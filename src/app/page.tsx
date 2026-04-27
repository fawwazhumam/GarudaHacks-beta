import Countdown from "@/sections/Countdown";
import CubePattern from "@/components/CubePattern";
import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";
import SectionAboutUs from "@/sections/SectionAboutUs";
import Heroes from "@/sections/Heroes";
import GarudaByTheNumbers from "@/sections/GarudaByTheNumbers";
import Spacing1 from "@/sections/SpaceHeader1";
import ProjectShowcase from "@/sections/Projects";

export default function Home() {
  return (
    <div className="bg-[#F9F5FF] min-h-screen relative overflow-x-hidden">
      <Navbar />
      <Heroes />
      <Countdown />
      <Spacing1 />
      <SectionAboutUs />
      <GarudaByTheNumbers />
      <ProjectShowcase />
      <Footer />
    </div>
  );
}
