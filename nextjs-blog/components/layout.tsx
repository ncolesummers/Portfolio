import Head from 'next/head';
// import Image from 'next/image';
import styles from './layout.module.css';
// import utilStyles from '../styles/utils.module.css';
import Header from './header';
import Link from 'next/link';
import Footer from './footer';
import React from 'react';

const name = 'N. Cole Summers'
export const siteTitle = 'N. Cole Summers Design'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Software Development and UX Design"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header/>
      <main>{children}</main>
      <Footer />
    </div>
  )
}
