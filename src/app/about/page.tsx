import Image from 'next/image'
import React from 'react'
import profile from '@/../public/ankit.jpeg'
import { HorizontalScrollCarousel } from '@/components/ui/Clintreviews'


export default function page() {
  return (
    <section className=' lg:grid lg:grid-cols-3 gap-7  mt-20 p-4 sm:p-14 space-y-12'>
      <div className=' flex flex-col w-full gap-10 lg:col-span-2'>
        <h1 className='text-4xl lg:text-6xl  font-semibold max-w-2xl'>About Us</h1>
        <p className=' max-w-xl'>
          Welcome to Casa Mobilia, the premier destination for bespoke furniture and interiors that elegantly blend global refinement with indigenous design. Founded in 2012 by Ankit Agarwal and Sadhna Goyal under Aakarshan Furniture Systems, our brand embodies a commitment to contemporary elegance and timeless artistry. Our curated selection showcases the rich heritage of both traditional and modern Indian craftsmanship, offering unique, customizable pieces that resonate with the individual tastes of our discerning clients. Each item is crafted with meticulous attention to detail, ensuring that it is not just a product, but a collectible work of art that contributes to a legacy of design excellence.
        </p>
        <p className=' max-w-xl'>
          At Casa Mobilia, we believe in a collaborative approach to design, working closely with clients to transform their visions into stunning realities. Our talented team of designers provides personalized consultations, whether you’re seeking a statement piece or a complete interior overhaul. As we continue to evolve, we remain dedicated to innovation and sustainability, regularly launching awe-inspiring collections that reflect our commitment to artistry and style. Join us in creating beautiful spaces that embody your unique personality and elevate your lifestyle.
        </p>
      </div>
      <div className=' lg:col-span-1'>
          <Image src={profile} alt='profile' className=' rounded-2xl'></Image>
      </div>
      <div className=' sm:col-span-3'>
        <HorizontalScrollCarousel></HorizontalScrollCarousel>
      </div>
    </section>
  )
}
