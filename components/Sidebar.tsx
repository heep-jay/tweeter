import React from 'react'
import { RiHome7Fill } from 'react-icons/ri';
import { FiSearch } from 'react-icons/fi';
import { BsBookmark, BsPerson } from 'react-icons/bs';
import { CgNotes, CgMoreO } from 'react-icons/cg';
import {HiHashtag} from 'react-icons/hi'

import { IoNotificationsOutline } from "react-icons/io5";
import { MdMailOutline } from 'react-icons/md';
import SidebarRow from './SidebarRow'




const Sidebar = () => {
  return (
    <div className='flex flex-col col-span-1 2xl:col-span-2 space-y-3 md:col-span-1  lg:col-span-1 xl:items-start md:items-end items-center p-3'>
      <img className='h-8 w-8 lg:h-10 lg:w-10 md:mr-2 xl:mr-0' src="https://links.papareact.com/drq" alt="" />
      <SidebarRow Icon={RiHome7Fill} title={"Home"}/>
      <div className='block lg:hidden'>
      <SidebarRow Icon={FiSearch} title={"Search"}/>

      </div>
      
      <div className='hidden lg:block'>
      <SidebarRow Icon={HiHashtag} title={"Explore"}/>
      </div>
      
      <SidebarRow Icon={IoNotificationsOutline} title={"Notifications"}/>
      <SidebarRow Icon={MdMailOutline} title={"Inbox"}/>
      <SidebarRow Icon={BsBookmark} title={"Bookmarks"}/>
      <SidebarRow Icon={CgNotes} title={"Lists"}/>
      <SidebarRow Icon={BsPerson} title={"Profile"}/>
      <SidebarRow Icon={CgMoreO} title={"More"}/>
    </div>
  )
}

export default Sidebar