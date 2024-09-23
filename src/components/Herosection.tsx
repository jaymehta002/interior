import React from 'react'

export default function Herosection() {
  return (
    <section className="relative h-screen bg-black w-full ">
      {/* Video element */}
      <div className=' absolute h-full top-0 w-full   px-16'>
      <video
        className="h-full w-full rounded-2xl mb-16 border border-white/60 object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://clientwork99.s3.ap-south-1.amazonaws.com/herobackgroundvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
      <div className="relative z-10 flex flex-col items-center  justify-center h-full text-white">
        <h1 className=" text-4xl sm:text-7xl max-w-5xl text-center font-semibold inline-flex p-3 bg-gradient-to-r from-white to-neutral-100 text-transparent bg-clip-text">
        Crafting Luxury Bespoke Furniture & Interiors for Timeless Elegance        </h1>
      </div>
    </section>
  )
}
