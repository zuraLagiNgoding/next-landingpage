import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import { SliderData } from './SliderData'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import igimg1 from '../public/igimg1.jpg'

const Slider = ({ slides }) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1  : current - 1)
    }
    useEffect(() => {
        const autoSlide = setInterval(() => {
          setCurrent((current) => (current === length - 1 ? 0 : current + 1));
        }, 10000);
    
        return () => clearInterval(autoSlide);
      }, [length]);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <div id='gallery' className='max-w-[1240px] mx-auto pt-[5rem]'>
            <h1 className='text-2xl font-bold text-center p-4'>Gallery</h1>
            <div>
                <div className='relative flex justify-center p-4'>
                {SliderData.map((slide, index) => {
                    return (
                        <div key={index} className={index === current
                            ? 'opacity-[1] ease-in duration-1000'
                            : 'opacity-0'
                        }
                        >
                            
                            <FaArrowCircleLeft onClick={prevSlide} className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]' size={50} />
                                {index === current && (
                                    <div className=''>
                                        <Image
                                            className='slider-img bg-top w-[1440px] h-[500px] object-cover'
                                            src={slide.image}
                                            alt=""
                                            width='1440'
                                            height='600'
                                            />
                                    </div>
                                )}
                                
                            <FaArrowCircleRight onClick={nextSlide} className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]' size={50} />    
                            </div>
                        );
                    })}
                    </div>
            </div>
        </div>
    )
}

export default Slider