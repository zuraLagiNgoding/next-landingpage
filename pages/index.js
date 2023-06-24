import Head from 'next/head'
import Image from 'next/image'
import Hero from '@/components/hero'
import Slider from '@/components/Slider'
import { SliderData } from '@/components/SliderData'
import Insta from '@/components/Insta'

export default function Home() {
  return (
    <div>
    <Head>
      <title>Jepret</title>
      </Head>
      <div className='snap-y snap-mandatory'>
        <div className='snap-start snap-always'>
          <Hero heading='Jepret Photography' message='Capture moments in nature and keep them alive.' />
        </div>
        <div className='snap-start snap-always'>
          <Slider slides={SliderData} />
        </div>
        <div className='snap-start snap-always'>
          <Insta />
          </div>
        </div>
      </div>
  )
}
