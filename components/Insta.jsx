import React from 'react'
import igimg1 from '../public/igimg1.jpg'
import igimg2 from '../public/igimg2.jpg'
import igimg3 from '../public/igimg3.jpg'
import igimg4 from '../public/igimg4.jpg'
import igimg5 from '../public/igimg5.jpg'
import igimg6 from '../public/igimg6.jpg'
import InstaImg from './InstaImg'

const Insta = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
      <p className='text-2xl font-bold'>Follow us on Instagram</p>
      <p className='pb-4'>@JepretID</p>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-2 p-4'>
        <InstaImg feed={igimg1} shotby={"Jairph"}/>
        <InstaImg feed={igimg2} shotby={"Keszthelyi Timi"}/>
        <InstaImg feed={igimg3} shotby={"Ihsan Halimawan"}/>
        <InstaImg feed={igimg4} shotby={"Neven Krcmarek"}/>
        <InstaImg feed={igimg5} shotby={"Gonzales"}/>
        <InstaImg feed={igimg6} shotby={"Imtiyaaz"}/>
      </div>
    </div>
  )
}

export default Insta