"use client";

import Preloader from '@/components/preloader/index';
import React, { useEffect, useState } from 'react';
import { AnimatePresence } from "framer-motion";
import { useParams } from 'next/navigation';
import data from '@/../data/portfolio.json';
import BlurFade from '@/components/ui/blur-fade';

// Define the type for productlist
type ProductList = typeof data.portfolio.productlist;

export default function Page() {
    const [isLoading, setIsLoading] = useState(true);

    // Extract the 'products' parameter from the URL
    const params = useParams<{ products: string }>();
    const listname = params.products as keyof ProductList;

    // Safely access the productData by ensuring 'listname' is a valid key
    const productData = data.portfolio.productlist[listname];

    useEffect(() => {
        // Always run the effect, regardless of conditions in rendering
        const loadData = async () => {
            setTimeout(() => {
                setIsLoading(false);
                document.body.style.cursor = 'default';
                window.scrollTo(0, 0);
            }, 2000);
        };
        loadData();
    }, []);

    // If the productData doesn't exist, return a 401 error message
    if (!productData) {
        return <div>401 - Product not found</div>;
    }

    const imagelist = productData.images;

    return (
        <main className='mt-11 grid lg:grid-cols-3'>
            <AnimatePresence mode='wait'>
                {isLoading && <Preloader />}
            </AnimatePresence>
            {!isLoading && imagelist.map((image, i) => (
                <BlurFade key={i}>
                    <img src={image} alt={`image-${i}`} className='h-full w-full object-cover' />
                </BlurFade>
            ))}
        </main>
    );
}
