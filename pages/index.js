import Head from 'next/head'
import Image from 'next/image'
import { global } from 'styled-jsx/css'
import Hero from '@/components/hero'
import Slider from '@/components/Slider'
import { SliderData } from '@/components/SliderData'

export default function Home() {
  return (
    <div>
    <Head>
      <title>Jepret</title>
    </Head>
      <Hero heading='Jepret Photography' message='Capture moments in nature and keep them alive.' />
      <Slider slides={SliderData} />
      </div>
  )
}
