import React from 'react'
import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'

const InstaImg = ({feed, shotby}) => {
  return (
    <div className='relative'>
      <Image src={feed} alt='/' className='w-full h-full object-cover'/>
      <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/40 group'>
        <div className='hidden group-hover:flex text-gray-300 flex-col justify-center items-center'>
          <p className=''><FaInstagram size={30} /></p>
          <p>Shot By {shotby}</p>
        </div>
      </div>
    </div>
  )
}

export default InstaImg