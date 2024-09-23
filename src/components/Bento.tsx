import React from 'react'
import BorderButton from './ui/BorderButton'
import Image from 'next/image'
import OutDoorSofa from '@/../public/6.jpg'
import { MoveUpRight } from 'lucide-react'

export default function Bento() {
    return (
        <section className=' grid grid-cols-1 md:grid-cols-12 mt-5 w-full p-4 sm:p-10 gap-5 '>
            <div className=' relative w-full md:col-span-8'>
                <video
                    width="100%"
                    height="100%"
                    autoPlay
                    loop
                    muted
                    preload="none"
                    style={{ display: 'block' }}
                    className=" rounded-3xl border"
                >
                    <source src="/logoreveal.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className=' absolute bottom-0  w-[60%] lg:w-[40%] left-0'>
                    <div className=' rounded-t-3xl w-[60%] rounded-l-none bg-white  pt-3 pr-2 lg:pt-6 lg:pr-6'>
                        <BorderButton text='Georgeus Interior' ></BorderButton>
                    </div>
                    <div className=' text-3xl lg:text-6xl font-semibold w-[80%] rounded-t-3xl rounded-l-none bg-white  pt-3 pr-2 lg:pt-6 lg:pr-6'>
                        Modern
                    </div>
                    <div className=' text-3xl lg:text-6xl font-semibold w-full rounded-t-3xl rounded-l-none bg-white  pt-3 pr-2 lg:pt-6 lg:pr-6'>
                        Minimalist
                    </div>
                </div>
            </div>
            <div className=' md:col-span-4 flex flex-col gap-5 group/cardthree'>
                <div className=' bg-[#f0e9e3] relative rounded-3xl h-[45%] p-8'>
                    <BorderButton text='Aesthetic' group='cardthree'></BorderButton>
                </div>
                <div className=' relative rounded-3xl h-[55%]'>
                    <div className='  absolute top-5 left-5'>
                        <BorderButton text=' Best Furniture' className=' border-white text-white'></BorderButton>
                    </div>
                    <Image src={OutDoorSofa} alt='out door sofa' className=' rounded-3xl h-full'>
                    </Image>
                    <div className=' absolute -bottom-3 -right-3  rounded-full p-3 transition-all duration-200 ease-in-out group-hover/cardthree:-translate-x-2 group-hover/cardthree:-translate-y-2 bg-white z-10 size-16'><MoveUpRight className=' group-hover/cardthree:-rotate-90 bg-black p-2 transition-all duration-200 ease-in-out  text-white size-full rounded-full' /></div>
                </div>
            </div>
        </section>
    )
}
