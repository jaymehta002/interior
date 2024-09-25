import { livingList } from '@/lib/gallery/livingspace'
import Image from 'next/image'
import React from 'react'


export default function page() {
  return (
    <section className=' grid grid-cols-1 lg:grid-cols-2'>
        {
            livingList.map((image,i)=>(
                <Image key={i} src={image} alt='image' className=' h-full w-full object-cover'></Image>
            ))
        }
    </section>
  )
}
