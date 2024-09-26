'use client'

import Bento from "@/components/Bento";
import Heroabout from "@/components/Heroabout";
import Herosection from "@/components/Herosection";
import Portfolio from "@/components/Portfolio";
import Testimonial from "@/components/ui/Testimonial";

export default function Home() {
  return (
    <main className=" ">
      <Herosection></Herosection>
      <Bento></Bento>
      <Heroabout></Heroabout>
      <Testimonial></Testimonial>
      <Portfolio></Portfolio>
    </main>
  );
}
