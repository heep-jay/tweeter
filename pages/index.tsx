import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { Sidebar, Feed, Widgets } from '../components';
import { Tweet } from '../typings';
import { fetchTweets } from '../utils/fetchTweets'

interface Props {
  tweets: Tweet[]
}

const Home = ({tweets} : Props) => {
  console.log(tweets)
  return (
    <div className="mx-auto max-w-6xl max-h-screen overflow-y-scroll scrollbar-hide scrollbar-thumb-black ">
      <Head>
        <title>Home/ Twitter</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="grid grid-cols-10">
        {/* sidebar */}
        <Sidebar/>

        {/* Feed */}
        <Feed tweets={tweets
        }/>

        {/* widgets*/}
        <Widgets/>
        
      </main>

    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const tweets = await fetchTweets();
  console.log(tweets)
  return {
    props: {
      tweets
    }
  }
}
