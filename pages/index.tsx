import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Sidebar, Feed, Widgets } from '../components';


const Home: NextPage = () => {
  return (
    <div className="mx-auto max-w-7xl max-h-screen overflow-hidden  scrollbar-thumb-black ">
      <Head>
        <title>Home/ Twitter</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="grid grid-cols-10">
        {/* sidebar */}
        <Sidebar/>

        {/* Feed */}
        <Feed/>

        {/* widgets*/}
        <Widgets/>
        
      </main>

    </div>
  )
}

export default Home
