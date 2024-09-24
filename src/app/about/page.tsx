import Image from 'next/image'
import React from 'react'
import textimage1 from '@/../public/11.jpg'
import textimage2 from '@/../public/12.jpg'
import Starssection from '@/components/Starsection'

export default function page() {
  return (
    <section className='p-4 sm:p-10 mt-14 text-stone-800 '>
      <div className=' flex'>
        <div className=' text-4xl sm:text-6xl lg:text-8xl justify-center items-center font-extrabold  flex flex-wrap max-w-3xl mx-auto gap-5 sm:gap-10 text-center'>Poliform
          <Image src={textimage1} alt='sofa imaage' className='w-24 h-12 sm:w-36 sm:h-20 object-cover flex rounded-2xl sm:rounded-3xl'></Image>
          is <Image src={textimage2} alt='sofa imaage' className='w-24 h-12 sm:w-36 sm:h-20 object-cover flex rounded-2xl sm:rounded-3xl'></Image>
          <span className=' flex  flex-wrap'>Known for </span>Innovative
        </div>
      </div>
      <Starssection></Starssection>
      <div className=' grid grid-cols-7 gap-6 mt-8'>
        <div className=' col-span-2'>
          <Image src={textimage1} alt='image' className=' object-cover rounded-3xl h-80 w-full '></Image>
        </div>
        <div className=' col-span-3'>
          <Image src={textimage2} alt='image' className=' object-cover rounded-3xl h-80 w-full '></Image>
        </div>
        <div className=' col-span-2'>
          <Image src={textimage1} alt='image' className=' object-cover rounded-3xl h-80 w-full '></Image>
        </div>
      </div>
      <div className=' mt-28 space-y-8'>
        <p className='text-3xl text-center lg:text-6xl font-semibold'>Crafting Timeless Spaces</p>
        <p className=' text-center max-w-2xl mx-auto'>Pušform&apos;s talent is as know-how, a copacity that merges culture and knowledge and which, prior to becoming a gesture, is a design idea</p>
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-7'>
          <div className=' relative rounded-3xl '>
            <Image src={textimage1} alt='image' className=' rounded-2xl object-cover h-[26rem]'></Image>
        
          </div>
          <div className=' rounded-3xl '>
            <div className=' rounded-2xl bg-black text-white object-cover h-[26rem] p-10 lg:p-24 flex gap-8 justify-center flex-col'>
              <p className=' text-4xl'>Our History</p>
              <p>Poliform was founded in 1970 by Alberto Spinelli, Aldo Spinelli, and Giovanni Anzani, transforming their family&apos;s 1942 artisan business into a modern industry. The new name, Poliform, symbolized a shift towards flexibility, simplicity, elegance, and future-forward thinking.</p>
            </div>
          </div>
        </div>
      </div>
      <div className=' mt-10 relative'>
      <div className=' absolute top-0  w-[60%] lg:w-[40%] left-0 '>
              <div className=' text-2xl lg:text-6xl font-semibold w-full p-5 rounded-ee-2xl flex items-start bg-white  pt-1 pr-2 lg:pt-3 lg:pr-6'>
              Our Knowledge
              </div>
              <div className=' text-xs md:text-lg p-5  w-[80%] rounded-ee-2xl flex items-start bg-white  pt-1 pr-2 lg:pt-3 lg:pr-6'>
              Poliform&apos;s strength is its expertise, combining culture and inowledge to form design ideas before tiringing them to life
              </div>
            </div>
        <Image src={textimage2} alt='image' className=' rounded-3xl h-[26rem] object-cover w-full '></Image>
      </div>
      <div className=' grid grid-cols-2 gap-7 mt-10'>
        <div className=' rounded-3xl '>
          <Image src={textimage1} alt='image' className=' rounded-2xl object-cover h-[26rem]'></Image>

        </div>
        <div className=' rounded-3xl '>
          <Image src={textimage1} alt='image' className=' rounded-2xl object-cover h-[26rem]'></Image>
        </div>
      </div>
    </section>
  )
}
