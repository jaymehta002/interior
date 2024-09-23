"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    <div className=" flex flex-col justify-center gap-16">
                        <h1 className=' text-4xl font-bold px-10 ' >
                            Why Choose Us ?
                        </h1>
                        <p className=" text-wrap font-medium max-w-4xl text-lg px-10">
                            Discover what our satisfied clients are saying about their journey with Casa Mobilia! From stunning transformations to personalized design experiences, our social media showcases authentic reviews and engaging videos that highlight the elegance and craftsmanship of our bespoke furniture and interiors. Join the Casa Mobilia community and see why we are the top choice for luxury living. Do not just take our word for it—experience the artistry and dedication that sets us apart!
                        </p>
                    </div>
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                    
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }: { card: { url: string; id: number } }) => {
    return (
        <div className="group relative rounded-2xl h-[400px] w-[800px] overflow-hidden shadow-xl">
            <VideoPlayer url={card.url}></VideoPlayer>
        </div>
    );
};

const VideoPlayer = ({ url }: { url: string }) => {
    const [isSSR, setIsSSR] = useState(true);

    useEffect(() => {
        setIsSSR(false);
    }, []);

    if (isSSR) {
        return null; // Or return a loading spinner during SSR
    }

    // Extract the video ID from the URL
    const videoId = url.split("v=")[1].split("&")[0]; // Get the video ID

    return (
        <iframe
            src={`https://www.youtube.com/embed/${videoId}`} // Use the embed URL
            className="absolute rounded-2xl inset-0 z-0 h-full w-full transition-transform duration-300 group-hover:scale-110"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    );
};

const cards = [
    {
        url: "https://www.youtube.com/watch?v=qyP0qGVrxmk",
        id: 1,
    },
    {
        url: "https://www.youtube.com/watch?v=zPuc7gsRWc0",
        id: 2,
    },
    {
        url: "https://www.youtube.com/watch?v=ybr64NaFhQM",
        id: 3,
    },
    {
        url: "https://www.youtube.com/watch?v=u46pbMQFhIU",
        id: 4,
    },
];
