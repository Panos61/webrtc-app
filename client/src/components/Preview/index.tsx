'use client';
import { IFormikProps } from '@/utils/useFormikHook';
import Avatar from 'react-avatar';

import styles from './preview.module.css';

const Preview: React.FC<IFormikProps> = ({ formik }) => {
  console.log('username: ', formik.values.username);

  return (
    <div className={styles.preview}>
      <Avatar
        name={formik.values.username || null}
        size='200px'
        round
        className={styles.preview_avatar}
      />
    </div>
  );
};

export default Preview;
