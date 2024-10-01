"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import image1 from '@/../public/luxuryresidences/4.jpg'
import image2 from '@/../public/ppsteel1.jpg'
import image3 from '@/../public/commercialspaces/2.jpg'
import Image from 'next/image'


const OpenCards = () => {

    const [expandedIndex, setExpandedIndex] = useState(1)

    const handleCardClick = (index:number) => {
        setExpandedIndex(index === expandedIndex ? -1 : index)
    }

    const cardVariants = {
        expanded: {
            width: "400px"
        },
        collapsed: {
            width: '200px'
        }
    }


    const cardDescriptions = [
        {
            image: image1,
            title: "sofa",
        },
        {
            image: image2,
            title: "sofa",
        },
        {
            image: image3,
            title: "sofa",
        }
    ]
    return (

        <div className='mt-12 lg:hidden flex flex-row justify-center items-center gap-5'>
            {cardDescriptions.map((data, index) => (
                <motion.div
                    key={index}
                    className={`card relative cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${index === expandedIndex ? 'expanded' : ''}`}
                    variants={cardVariants}
                    initial="collapsed"
                    animate={index === expandedIndex ? 'expanded' : 'collapsed'}
                    transition={{ duration: 0.5 }}
                    onClick={() => handleCardClick(index)}
                >
                    <Image alt={data.title} className=' absolute object-cover rounded-3xl h-full w-full ' src={data.image}></Image>
                    <div className='card-content z-30 h-full flex flex-col justify-end'>
                        <div className='card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center'>
                            <h2 className='text-xl font-semibold text-black text-center'>Card {index + 1}</h2>
                            {index === expandedIndex && (
                                <p className='mt-2 text-lg text-center'>{data.title} </p>
                            )

                            }
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

export default OpenCards