'use client';
import { Text } from '@mantine/core';

import styles from './form.module.css';

const Badge: React.FC = () => {
  return (
    <div className={styles.badge}>
      <Text size='xs' fw={400} c='white'>Please enter your name to join the meeting</Text>
    </div>
  );
};

export default Badge;
