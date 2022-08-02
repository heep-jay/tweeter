import React from 'react'
import { FiSearch } from 'react-icons/fi';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Widgets = () => {
  return (
    <div className='mt-2 px-2 col-span-3 hidden lg:inline-grid lg:col-span-4 xl:col-span-3 ml-5' >
      <div className='flex items-center bg-gray-100 p-3 rounded-full mt-2'>
        <FiSearch className='h-5 w-5 text-gray-400 mr-2'/>
        <input type="text" className='bg-transparent outline-none border-none flex-1' placeholder='Search Twitter' name="" id="" />
      </div>
      <div className='flex bg-gray-100 p-3 mt-4 rounded-xl mx-auto'>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Jubrilmuritala1"
          options={{height: 800, width:700}}
        />
      </div>
      
    </div>
  )
}

export default Widgets