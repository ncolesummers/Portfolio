import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Footer from '../components/footer'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'
// import Waves from '../components/waves'

export default function Home({
  allPostsData }: {
    allPostsData: {
      date: string
      title: string
      id: string
    }
  }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingXl} ${utilStyles.padding1px}`}>
      <p>N. Cole Summers Design</p>
      <p className={`${utilStyles.lightText} ${utilStyles.paddingNegative5px} ${utilStyles.headingMd}`}>Software Development and UX Design</p>
      </section>
      {/* <Waves/> */}
      
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
