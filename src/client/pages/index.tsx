import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Auth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Next.js Auth</h1>

        <p className={styles.description}>
          <Link href="/login">
            <a>Đăng nhập</a>
          </Link>{' '}
          hoặc{' '}
          <Link href="/signup">
            <a>Đăng ký</a>
          </Link>{' '}
          để bắt đầu
        </p>
      </main>
    </div>
  );
}
