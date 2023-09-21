'use client';

import styles from './page.module.css';

import { JoinForm } from '../components/index';

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Unlimited meetings</h2>
      <JoinForm />
    </main>
  );
}
