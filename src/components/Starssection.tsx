import React from 'react'
import AnimatedCounter from './ui/AnimatedCounter'

export default function Starssection() {
    return (
        <section className=' mb-20 '>
            <div className=' bg-black pt-24 pb-36'>
                <h1 className=' text-4xl font-bold text-white text-center' >
                    Why Choose Us ?
                </h1>
            </div>
            <div className="text-xl grid grid-cols-4 gap-20 tabular-nums tracking-tight max-w-6xl mx-auto">
                <div className=' rounded-xl flex flex-col justify-center items-center text-center py-14 -mt-24 gap-5 border bg-white shadow-sm '>
                    <AnimatedCounter from={0} to={100} />
                    
                    Projects Done
                </div>
                <div className=' rounded-xl flex flex-col items-center text-center py-14 -mt-24 gap-5 border bg-white shadow-sm '>
                    <AnimatedCounter from={0} to={100} />
                    
                    Projects Done
                </div>
                <div className=' rounded-xl flex flex-col items-center text-center py-14 -mt-24 gap-5 border bg-white shadow-sm '>
                    <AnimatedCounter from={0} to={100} />
                    
                    Projects Done
                </div>
                <div className=' rounded-xl flex flex-col items-center text-center py-14 -mt-24 gap-5 border bg-white shadow-sm '>
                    <AnimatedCounter from={0} to={100} />
                    
                    Projects Done
                </div>
            </div>
        </section>
    )
}
