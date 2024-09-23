import React from 'react'

export default function Herosection() {
  return (
    <section className="relative h-screen w-full ">
      {/* Video element */}
      <div className=' absolute h-full top-0 left-0 w-full  '>
      <video
        className="h-full w-full shadow-xl  border object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://clientwork99.s3.ap-south-1.amazonaws.com/Casa+Mobilia+-+Finest+Bespoke+Furniture+%26+Interiors+-+New+Studio+2021~2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
      <div className="relative z-10 flex flex-col justify-end items-start h-full text-white">
        <h1 className="text-7xl max-w-5xl mb-8 ml-8 inline-flex p-3 bg-gradient-to-r from-white to-neutral-100 text-transparent bg-clip-text">
        Crafting Luxury Bespoke Furniture & Interiors for Timeless Elegance        </h1>
      </div>
    </section>
  )
}
