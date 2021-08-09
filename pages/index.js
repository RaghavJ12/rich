import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="./inbox"><a>
        <button class="is-size-5">Accepted</button>
      </a></Link>
    </div>
  )
}
