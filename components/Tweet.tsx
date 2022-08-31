import React from 'react'
import { Tweet } from '../typings'
import TimeAgo from 'react-timeago'

interface Props {
    tweet: Tweet
  }

const Tweet = ({tweet} : Props ) => {
  console.log(tweet.user.username)
  return (
    <div>
      <div>
        <img src={tweet.profileImage} className="h-10 w-10" alt="" />
        <div>
          <div className="flex items-center space-x-1">
            <p className='mr-1 font-bold'>{tweet.user.username}</p>
            <p className='hidden text-sm text-gray-500 sm:inline'>@{tweet.user.username.replace(/\s+/g, '').toLocaleLowerCase()}</p>
            

            <TimeAgo
            className='text-sm text-gray-500'
              date={tweet._createdAt}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tweet