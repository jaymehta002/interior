"use client"

import Preloader from '@/components/preloader/index';
import React, { useEffect, useState } from 'react'
import Contact from '@/components/ui/Constactform'
import BlurFade from '@/components/ui/blur-fade'
import { AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Page() {  // Changed to uppercase 'P'
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (
      async () => {
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2000)
      }
    )()
  }, [])

  return (
    <section className='p-4 sm:p-10 mt-14 text-stone-900'>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>

      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 p-4 mt-16'>
        <div>
          <div className='mb-6'>
            <div className='text-4xl lg:text-6xl font-bold'>Contact Us</div>  {/* Corrected typo */}
            <div className='mt-5'>
              At Casa Mobilia, we&rsquo;re here to bring your design visions to life. Whether you&rsquo;re looking for bespoke furniture or interior design solutions, our team is ready to assist you with personalized consultations and expert guidance. Reach out to us today to discuss your project or any inquiries you may have. We look forward to helping you create the perfect space!
            </div>
          </div>
          <Contact />
        </div>
        <div className='rounded-2xl max-w-2xl space-y-5'>
          <div className='flex border py-4 px-11 rounded-3xl text-white shadow-lg bg-black gap-8'>
            <div className='flex justify-center items-center'>
              <MapPin />
            </div>
            <div>
              <p className='font-semibold'>Address</p>
              <p className='text-lg'>Aakarshan Furniture Systems, Plot no- D2/9 Tikona Park, New Industrial Township 2- NIT, Faridabad - 121001, Near Canara Bank</p>
            </div>
          </div>
          <div className='flex border py-4 px-11 rounded-3xl text-white shadow-lg bg-black gap-8'>
            <div className='flex justify-center items-center'>
              <Phone />
            </div>
            <div>
              <span className='font-semibold'>Contact:</span>
              <div className='flex gap-4 flex-wrap'>
                <a href="tel:+919911375600">+91-9911375600</a>
              </div>
              <a href="tel:+911294055600">0129-4055600</a>
            </div>
          </div>
          <div className='flex border py-4 px-11 rounded-3xl text-white shadow-lg bg-black gap-8'>
            <div className='flex justify-center items-center'>
              <Mail />
            </div>
            <div>
              <span className='font-semibold'>Sales:</span>
              <div className='flex gap-4 flex-wrap'>
                <a href="mailto:sales@Casa mobilia.in">sales@Casa mobilia.in</a>
              </div>
              <a href="mailto:ankit@Casa mobilia.in">ankit@Casa mobilia.in</a>
            </div>
          </div>
          <div className='flex border py-4 px-11 rounded-3xl text-white shadow-lg bg-black gap-8'>
            <div className='flex justify-center items-center'>
              <Mail />
            </div>
            <div>
              <span className='font-semibold'>Vendor:</span>
              <div className='flex gap-4 flex-wrap'>
                <a href="mailto:ankit@afsfurniture.in">ankit@afsfurniture.in</a>
              </div>
              <a href="mailto:info@Casa mobilia.in">info@Casa mobilia.in</a>
            </div>
          </div>
          <div className='flex border py-4 px-11 rounded-3xl text-white shadow-lg bg-black gap-8'>
            <div className='flex justify-center items-center'>
              <Mail />
            </div>
            <div>
              <span className='font-semibold'>Career:</span>
              <div className='flex gap-4 flex-wrap'>
                <a href="mailto:megha@Casa mobilia.in">megha@Casa mobilia.in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BlurFade className='w-full mt-14 relative block'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.1997543421367!2d77.29341977549161!3d28.383034075801962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cddecc299103d%3A0x7c6502b3565f4f5e!2sCasa%20Mobilia%20-%20Finest%20Bespoke%20Interiors%20%26%20Furniture*21!5e0!3m2!1sen!2sin!4v1727268274347!5m2!1sen!2sin" width="600" height="450" loading="lazy" className='w-full rounded-3xl relative' referrerPolicy="no-referrer-when-downgrade"></iframe>
      </BlurFade>
    </section>
  )
}
