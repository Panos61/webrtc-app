'use client';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const lightTheme = createTheme({ palette: { mode: 'light' } });

const JoinForm: React.FC = () => {
  return (
    <>
      <h2>Join Form</h2>
      <ThemeProvider theme={lightTheme}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 128,
              height: 128,
            },
          }}
        >
          <Paper elevation={4} />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default JoinForm;
