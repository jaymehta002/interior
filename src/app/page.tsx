import Bento from "@/components/Bento";
import Heroabout from "@/components/Heroabout";
import Herosection from "@/components/Herosection";
import Starssection from "@/components/Starsection";

export default function Home() {
  return (
    <main>
     <Herosection></Herosection> 
     <Bento></Bento>
     <Starssection></Starssection>
     <Heroabout></Heroabout>
     <div className=" h-screen"></div>
    </main>
  );
}
