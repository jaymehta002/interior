"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import BlurFade from "./blur-fade";
import Button from "./Button";

export function AppleCardsCarouselDemo() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full  mt-10 ">
            <div className='flex lg:flex-row sm:px-14 px-4 flex-col gap-3 justify-between'>
                <BlurFade y={0} x={-30} className='text-3xl lg:text-6xl  font-semibold max-w-2xl'>Explore Our Proudly Collection</BlurFade>
                <div className=' max-w-xl space-y-3'>
                    <BlurFade y={0} x={30} className=' text-left lg:text-right'>Whether you have distinct taste, or a unique space that needs a custom designed piece, our certified Custom Made furniture, will help you get anything made. Browse for ideas including: custom upholstery, custom tables, custom chairs, custom bedroom sets, custom shelves, custom built-ins, and more.</BlurFade>
                    <BlurFade y={0} x={30} className=' flex lg:justify-end'><Button text='View More'></Button></BlurFade>
                </div>
            </div>
            <Carousel items={cards} />
        </div>
    );
}


const data = [
    {
        category: "Artificial Intelligence",
        title: "You can do more with AI.",
        src: "/sofa2.jpg",
    },
    {
        category: "Productivity",
        title: "Enhance your productivity.",
        src: "/office/10.jpg",
    },
    {
        category: "Product",
        title: "Launching the new Apple Vision Pro.",
        src: "/residential/15.webp",
    },
    {
        category: "Product",
        title: "Launching the new Apple Vision Pro.",
        src: "/outdoor/2.jpg",
    },
    {
        category: "Product",
        title: "Launching the new Apple Vision Pro.",
        src: "/office/2.jpg",
    },
];
