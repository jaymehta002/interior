"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import backgroundimage from '@/../public/krishnakunj2.jpg'
import Button from './ui/Button'
import Textslide from './ui/textslide'
import GradualSpacing from './ui/gradual-spacing'
import { motion, useScroll, useTransform } from 'framer-motion';


export default function Herosection() {
  const { scrollYProgress } = useScroll()
  const y=useTransform(scrollYProgress,[0,1],["0%","250%"])
  return (
    <section  className="relative overflow-hidden rounded-3xl h-screen w-full mt-10 sm:mt-7 ">
      <motion.div
      style={{y:y}}
      className=' h-full w-full absolute rounded-3xl p-4 sm:p-10  overflow-hidden'>
        <Image src={backgroundimage} alt='background image' className='image border h-full w-full rounded-3xl object-cover object-center'></Image>
      </motion.div>
      <div className=' h-full w-full overflow-hidden flex flex-col  p-4 sm:p-10'>
        <div className=' h-[70%] w-full flex justify-center items-center'>
          <GradualSpacing text='Contemporary' className=' text-white z-10 text-4xl lg:text-9xl font-bold'></GradualSpacing>
        </div>
        <div className=' mb-5 sm:mb-0'>
          <div className=' px-3 flex gap-6 flex-col md:flex-row'>
            <Textslide x={-50} className=' bg-black/5 p-4 md:w-[28rem] gap-3 rounded-xl backdrop-blur-2xl flex flex-col justify-between border border-white/60 shadow-sm'>
              <p className=' text-wrap text-white '>
                Blending modern aesthetics with timeless elegance, our bespoke furniture designs transform spaces, redefining the art of sophisticated living.
              </p>
              <a href='/portfolio/livingspace'>
                <Button text='View More '></Button>
              </a>
            </Textslide>
            <Textslide y={40} className=' bg-black/5 p-3 border-white/60  rounded-xl backdrop-blur-2xl border shadow-sm'>
              <VideoPlayer url='https://www.youtube.com/watch?v=opEVjrYNXWI'></VideoPlayer>
            </Textslide>
          </div>
        </div>
      </div>
    </section>
  )
}

const VideoPlayer = ({ url }: { url: string }) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) {
    return null; // Or return a loading spinner during SSR
  }

  // Extract the video ID from the URL
  const videoId = url.split("v=")[1].split("&")[0]; // Get the video ID

  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`} // Use the embed URL
      className=" rounded-lg h-full w-full  transition-transform duration-300 group-hover:scale-110"
      allow="accelerometer; autoplay; clipboard-write;  encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};
