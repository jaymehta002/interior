"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";

export const HeroParallax = ({
  products,
}: {
  products: {
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 6);
  const secondRow = products.slice(6, 12);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] pb-40  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product,i) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={i}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product,i) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={i}
            />
          ))}
        </motion.div>
        
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
      About Us
      </h1>
      <p className="max-w-2xl text-base md:text-lg mt-8 dark:text-neutral-200">
      Welcome to <span className=" font-bold">Casa Mobilia</span>, the premier destination for bespoke furniture and interiors that elegantly blend global refinement with indigenous design. Founded in 2012 by Ankit Agarwal and Sadhna Goyal under Aakarshan Furniture Systems, our brand embodies a commitment to contemporary elegance and timeless artistry. Our curated selection showcases the rich heritage of both traditional and modern Indian craftsmanship, offering unique, customizable pieces that resonate with the individual tastes of our discerning clients. Each item is crafted with meticulous attention to detail, ensuring that it is not just a product, but a collectible work of art that contributes to a legacy of design excellence.
      </p>
      <p className="max-w-2xl text-base md:text-lg mt-8 dark:text-neutral-200">
      At Casa Mobilia, we believe in a collaborative approach to design, working closely with clients to transform their visions into stunning realities. Our talented team of designers provides personalized consultations, whether you’re seeking a statement piece or a complete interior overhaul. As we continue to evolve, we remain dedicated to innovation and sustainability, regularly launching awe-inspiring collections that reflect our commitment to artistry and style. Join us in creating beautiful spaces that embody your unique personality and elevate your lifestyle.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      className="group/product h-96  w-[30rem] relative flex-shrink-0"
    >
      <div
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover border shadow-xl rounded-xl object-left-top absolute h-full w-full inset-0"
          alt={'products'}
        />
      </div>
    </motion.div>
  );
};
