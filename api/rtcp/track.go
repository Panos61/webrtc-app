package rtcp

import (
	"fmt"

	"github.com/Panos61/webrtc-app/utils"
	"github.com/pion/webrtc/v3"
)

func AddTrack() {
	config := webrtc.Configuration{
		ICEServers: []webrtc.ICEServer{
			{URLs: []string{"stun:stun.l.google.com:19302"}},
		},
	}

	peerConnection, err := webrtc.NewPeerConnection(config)
	if err != nil {
		panic(err)
	}

	peerConnection.OnTrack(func(tr *webrtc.TrackRemote, r *webrtc.RTPReceiver) {
		fmt.Printf("Track has started streamID: %s, id: %s, rid: %s\n", tr.StreamID(), tr.ID(), tr.RID())

		for {
			// Read the RTCP Packets
			rtcp, _, err := r.ReadRTCP()
			if err != nil {
				panic(err)
			}

			for _, r := range rtcp {
				// Print the string description of the packets
				if stringer, canString := r.(fmt.Stringer); canString {
					fmt.Printf("Received RTCP Packet: %v", stringer.String())
				}
			}
		}
	})

	peerConnection.OnICEConnectionStateChange(func(connectionState webrtc.ICEConnectionState) {
		fmt.Printf("Connection state has changed: %s\n", connectionState.String())
	})

	offer := webrtc.SessionDescription{}
	utils.Decode(utils.MustReadStdin(), &offer)

	err = peerConnection.SetRemoteDescription(offer)
	if err != nil {
		panic(err)
	}

	answer, err := peerConnection.CreateAnswer(nil)
	if err != nil {
		panic(err)
	}

	gatherComplete := webrtc.GatheringCompletePromise(peerConnection)

	err = peerConnection.SetLocalDescription(answer)
	if err != nil {
		panic(err)
	}

	<-gatherComplete

	fmt.Println(utils.Encode(*peerConnection.LocalDescription()))

	select {}
}
