import Bento from "@/components/Bento";
import Footer from "@/components/Footer";
import Heroabout from "@/components/Heroabout";
import Herosection from "@/components/Herosection";
import Portfolio from "@/components/Portfolio";
import Starssection from "@/components/Starsection";

export default function Home() {
  return (
    <main>
     <Herosection></Herosection> 
     <Bento></Bento>
     <Starssection></Starssection>
     <Heroabout></Heroabout>
     <Portfolio></Portfolio>
     <Footer></Footer>
    </main>
  );
}
