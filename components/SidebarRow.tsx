import React, { SVGProps } from 'react'

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) =>   JSX.Element
  title: string
}

const SidebarRow = ({Icon, title}: Props) => {
  return (
    <div className='flex items-center space-x-5 hover:bg-gray-100 px-3  py-3 group cursor-pointer w-fit rounded-full'>
      <Icon className='lg:h-7 lg:w-7 h-6 w-6 '/>
      <p className='group-hover:text-twitter text-xl hidden 2xl:block'>{title}</p>
    </div>
  )
}

export default SidebarRow;