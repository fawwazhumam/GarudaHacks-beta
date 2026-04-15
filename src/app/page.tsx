import Countdown from "@/sections/Countdown";
import CubePattern from "@/sections/CubePattern";
import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";
import SectionAboutUs from "@/sections/SectionAboutUs";
import Heroes from "@/sections/Heroes";

export default function Home() {
  return (
    <div className="bg-[#F9F5FF] min-h-screen relative overflow-x-hidden">

      
      <Navbar />
      <Heroes />
      <Countdown />
      <SectionAboutUs />
      <Footer />
    </div>
  );
}
