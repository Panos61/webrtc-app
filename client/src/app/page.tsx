'use client';

import { useFormikProps } from '@/utils/useFormikHook';
import { Title } from '@mantine/core';
import CreateRoomForm from '../components/Form';
import Preview from '@/components/Preview';

import styles from './page.module.css';

const Home = () => {
  const formikProps = useFormikProps();

  return (
    <div className={styles.pre_meeting_screen}>
      <div className={styles.sidebar}>
        <div className={styles.sidebar_content}>
          <Title className={styles.title}>Create a meeting</Title>
          <CreateRoomForm formik={formikProps} />
        </div>
      </div>
      <div className={styles.preview}>
        <Preview formik={formikProps} />
      </div>
    </div>
  );
};

export default Home;
