import React from 'react'

export default function Herosection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video element */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://clientwork99.s3.ap-south-1.amazonaws.com/herobackgroundvideo.mp4" type="video/mp4" />
        {/* Add a fallback for browsers that don’t support video */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay content goes here */}
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold">Your Content Here</h1>
      </div>

      {/* Optional background overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    </section>
  )
}
