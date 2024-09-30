'use client'

import Bento from "@/components/Bento";
import Heroabout from "@/components/Heroabout";
import Herosection from "@/components/Herosection";
import LogoProof from "@/components/LogosSection";
import Portfolio from "@/components/Portfolio";
import { AppleCardsCarouselDemo } from "@/components/ui/SwipeCarousel";
import Testimonial from "@/components/ui/Testimonial";

export default function Home() {
  return (
    <main className=" ">
      <Herosection></Herosection>
      <LogoProof></LogoProof>
      <Bento></Bento>
      <Heroabout></Heroabout>
      <Testimonial></Testimonial>
      <AppleCardsCarouselDemo></AppleCardsCarouselDemo>
    </main>
  );
}
