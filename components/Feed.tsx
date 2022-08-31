import React from 'react'
import { HiRefresh } from 'react-icons/hi'
import { Tweet } from '../typings'
import TweeTBox from './TweeTBox'
import Tweetz from './Tweet'


interface Props {
  tweets: Tweet[]
}

const Feed = ({tweets}: Props) => {
  return (
    <div className='lg:col-span-5 col-span-9 sm:col-span-8 md:col-span-8 border-l border-r'>
        <div className='flex items-center justify-between'>
            <h1 className=' p-5 text-xl font-bold'>Home</h1>
            <HiRefresh className='h-8 w-8 cursor-pointer text-twitter mr-5 mt-3 transition-all duration-500 ease-out hover:rotate-180 active:scale-125'/>
        </div>
        <div>
         <TweeTBox/>
        </div>
        <div>
          {tweets.map((tweet) => (
            <Tweetz key={tweet._id} tweet={tweet} />
          ) )}
          

        </div>
    </div>
  )
}

export default Feed