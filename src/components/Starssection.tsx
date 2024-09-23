import React from 'react'
import AnimatedCounter from './ui/AnimatedCounter'

export default function Starssection() {
    return (
        <section className=' mt-16 flex flex-col gap-10'>
            <h1 className='text-2xl text-center max-w-5xl mx-auto font-bold px-10 '>Delivering Excellence Through Countless Projects, Years of Experience, and Dedicated Design Hours for Our Clients</h1>
            <div className="text-xl grid grid-cols-4 gap-16 tabular-nums tracking-tight max-w-6xl mx-auto">
                <div className=' '>
                    <AnimatedCounter from={0} to={600} />
                    
                    Projects Done
                </div>
                <div className=''>
                    <AnimatedCounter from={0} to={50000} />
                    
                    Years of Experience
                </div>
                <div className=''>
                    <AnimatedCounter from={0} to={100} />
                    
                    Design Hours
                </div>
                <div className=''>
                    <AnimatedCounter from={0} to={250} />
                    
                    Clients
                </div>
            </div>
        </section>
    )
}
