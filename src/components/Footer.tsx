import Image from 'next/image'
import React from 'react'
import sofa from '@/../public/sofa1.jpg'


const navigation = {
  connect: [
    { name: 'Book Meeting', href: '' },
    {
      name: 'Twitter',
      href: 'https://twitter.com/justansub',
    },
    {
      name: 'Github',
      href: 'https://www.youtube.com/@SpeedyBrand-SEO',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/speedy-brand-inc/',
    },
  ],
  company: [
    { name: 'Blogs', href: '/' },
    { name: 'Pricing', href: '/' },
    { name: 'Affiliate Partner', href: '/' },
    { name: 'AI For Enterprise', href: '/' },
  ],
}

export default function Footer() {
  return (
    <section className='mt-16 bg-black text-white  p-4 sm:p-10'>
      <div className=' flex justify-between lg:flex-row flex-col'>
        <div className=' max-w-xl flex-col flex gap-9 '>
          <div className='text-4xl lg:text-6xl  font-semibold max-w-2xl'>Explore Our Proudly Collection</div>
          <p className=' text-left '>Whether you have distinct taste, or a unique space that needs a custom designed piece, our certified Custom Made furniture, will help you get anything made. Browse for ideas including: custom upholstery, custom tables, custom chairs, custom bedroom sets, custom shelves, custom built-ins, and more.</p>
        </div>
        <div className=' mt-10 lg:mt-0'>
          <Image src={sofa} alt='sofa' className=' md:h-[18rem] md:w-[28rem] object-cover rounded-2xl '></Image>
        </div>
      </div>
      <div className=' pb-9 flex flex-col md:flex-row md:justify-between'>
        <div className="mt-16 justify-center md:justify-start flex gap-40">
          <div className="md:mt-0">
            <h3 className="text-sm font-semibold leading-6">
              Connect
            </h3>
            <div className="mt-6 space-y-4">
              {navigation.connect.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm leading-6 opacity-70 hover:opacity-100"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div>
              <h3 className="text-sm font-semibold leading-6 ">
                Company
              </h3>
              <div className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 opacity-70 hover:opacity-100"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='  flex justify-center md:justify-end items-end mt-10 md:mt-0 '>
          <div>

          <p className=' text-8xl font-bold'>CASA</p>
          <p className=' text-right text-lg o'>MOBILIA</p>
          </div>
        </div>
      </div>
    </section>
  )
}
