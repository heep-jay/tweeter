import React, { useState } from 'react'
import {AiOutlinePicture, AiOutlineFileGif, AiOutlineGif } from 'react-icons/ai'
import { BiPoll } from 'react-icons/bi'
import { BsEmojiSmile, BsCalendarDay } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
const TweeTBox = () => {
    const [input, setInput] = useState<string>("")
  return (
    <div className='flex items-start px-5'>
        <img 
            src="https://links.papareact.com/gll" 
            alt="profile-photo"
            className='h-14 w-14 rounded-full mr-4'
         />
         <div className='flex flex-col flex-1'>
            <form className='flex flex-col flex-1'>
                <input
                    value={input}
                    onChange={(e)=> setInput(e.target.value)} 
                    type="text"  placeholder='Whats happening ?' className='h-24 outline-none text-xl font-base'/>
                <div className='flex items-center justify-between px-3 py-4 border-t border-gray-100'>
                    <div className='flex space-x-4 flex-1'>
                       <AiOutlinePicture className='h-5 w-5 transition-transform duration-150 ease-out hover:scale-125  cursor-pointer text-twitter'/>
                       <AiOutlineGif className='h-5 w-5  text-twitter cursor-pointer'/>
                       <BiPoll className='h-5 w-5  text-twitter cursor-pointer'/>
                       <BsEmojiSmile className='h-5 w-5  text-twitter cursor-pointer'/>
                       <BsCalendarDay className='h-5 w-5  text-twitter cursor-pointer'/>
                       <GoLocation className='h-5 w-5  text-twitter cursor-pointer'/>
                    </div>
                    <button
                        disabled={!input} 
                        className='bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40'
                    >
                        Tweet
                    </button>
                </div>
            </form>
         </div>
    </div> 
  )
}

export default TweeTBox