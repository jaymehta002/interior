"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import Sideimage3 from '@/../public/ppsteel2.jpg'
import Sideimage2 from '@/../public/dark.jpg'
import Sideimage1 from '@/../public/light.jpg'
import Sideimage4 from '@/../public/10.jpg'
import Button from './ui/Button'
import BlurFade from './ui/blur-fade'
import { useTransform, motion, useScroll } from 'framer-motion';

export default function Heroabout() {
    const ref=useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
      })
    const y=useTransform(scrollYProgress,[0,1],["0%","-50%"])
    const scale=useTransform(scrollYProgress,[0,1],[1,0.6])
    const opacity=useTransform(scrollYProgress,[0,1],[1,0])
    return (
        <motion.section style={{y:y,scale:scale,opacity:opacity}} ref={ref} className=' grid grid-cols-1 gap-5 lg:grid-cols-2 mt-5 p-4 sm:p-10 '>
            <div className=' grid grid-cols-2 gap-3'>
                <BlurFade y={0} x={-50} className=' w-full h-full '>
                    <Image src={Sideimage1} alt='sofa image' className='object-cover h-full w-full order-2 rounded-3xl border' ></Image>
                </BlurFade>
                <BlurFade y={0} x={50} className=' w-full h-full '>
                    <Image src={Sideimage2} alt='sofa image' className='object-cover h-full w-full order-2 rounded-3xl border' ></Image>
                </BlurFade>
                <BlurFade y={0} x={-50} className=' w-full h-full '>
                    <Image src={Sideimage4} alt='sofa image' className='object-cover h-[85%] w-full order-2 rounded-3xl border' ></Image>
                </BlurFade>
                <BlurFade y={0} x={50} className=' w-full h-full '>
                    <Image src={Sideimage3} alt='sofa image' className='object-cover h-[85%] w-full order-2 rounded-3xl border' ></Image>
                </BlurFade>
            </div>
            <div className=' lg:p-4 sm:p-10 flex flex-col order-1 gap-5 '>
                <BlurFade className='text-lg'>Timeless</BlurFade>
                <BlurFade className=' text-3xl lg:text-6xl font-semibold '>Modern Style Timeless Charm</BlurFade>
                <BlurFade>
                    Casa Mobilia creates luxury bespoke furniture and timeless interiors, combining global refinement with indigenous design. Founded in 2012, we offer unique, customizable pieces that reflect exceptional craftsmanship. Our designs transform spaces, blending contemporary and classic styles for a truly personalized living experience.
                </BlurFade>
                <BlurFade>
                    <Button text='About Us'></Button>
                </BlurFade>
            </div>
        </motion.section>
    )
}
