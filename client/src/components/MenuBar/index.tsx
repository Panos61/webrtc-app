'use client';
import { Card } from '@mui/material';
import styles from './menu.module.scss';

const MenuBar: React.FC = () => {
  return (
    <>
      <Card
        className={styles.menu_card}
        elevation={3}
        style={{
          backgroundColor: 'white',
          zIndex: 2,
          width: '200px',
        }}
      >
        ddd
      </Card>
    </>
  );
};

export default MenuBar;
