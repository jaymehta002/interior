import { About } from "@/components/About";
import { HorizontalScrollCarousel } from "@/components/Cleintreview";
import Herosection from "@/components/Herosection";
import Starssection from "@/components/Starssection";

export default function Home() {
  return (
    <main>
     <Herosection></Herosection> 
     <HorizontalScrollCarousel></HorizontalScrollCarousel>
     <Starssection></Starssection>
     <About></About>
     <div className=" h-screen"></div>
    </main>
  );
}
