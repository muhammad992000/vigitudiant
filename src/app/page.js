'use client';
import styles from './page.module.scss';
import Link from 'next/link';
import { Banner } from '../components/banner';

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner></Banner>
    </main>
  );
}
