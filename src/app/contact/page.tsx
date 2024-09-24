import Contact from '@/components/ui/Constactform'
import React from 'react'

export default function page() {
  return (
    <section className=' mt-10  p-4 sm:p-20 h-screen space-y-6'>
      <div>
        <h1 className='text-4xl lg:text-6xl mb-16 font-semibold max-w-2xl'>Constact Us</h1>
      </div>
      <div className=' grid grid-cols-2'>
        <div className=' bg-[#f0e9e3] rounded-2xl'>
        <div className=' rounded-2xl border p-10 max-w-2xl backdrop-blur-3xl   space-y-5 '>
          <p className=' text-2xl font-semibold'>Visit our studio at</p>
          <p className=' text-lg'>Aakarshan Furniture Systems, Plot no- D2/9 Tikona Park, New Industrial Township 2- NIT, Faridabad - 121001, Near Canara Bank
          </p>
          <div className=' flex justify-between text-lg'>
            <span className=' font-semibold'>Contact</span>
            <span> +91-9911375600, 0129-4055600</span>
          </div>
          <div className=' flex justify-between text-lg'>
            <span className=' font-semibold'>Sales</span>
            <a href="mailto:example@gmail.com"> ankit@casamobilia.in,sales@casamobilia.in</a>
          </div>
          <div className=' flex justify-between text-lg'>
            <span className=' font-semibold'>Vendor</span>
            <span> info@casamobilia.in, ankit@afsfurniture.in</span>
          </div>
          <div className=' flex justify-between text-lg'>
            <span className=' font-semibold'>Career</span>
            <span> megha@casamobilia.in</span>
          </div>
        </div>
        </div>
        <div className=''>
          <Contact></Contact>
        </div>
      </div>
    </section>
  )
}
