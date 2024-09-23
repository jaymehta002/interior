import About from "@/components/About";
import { HorizontalScrollCarousel } from "@/components/Cleintreview";
import Herosection from "@/components/Herosection";
import Starssection from "@/components/Starssection";

export default function Home() {
  return (
    <main>
     <Herosection></Herosection> 
     <Starssection></Starssection>
     <HorizontalScrollCarousel></HorizontalScrollCarousel>
     <About></About>
    </main>
  );
}
