<<<<<<< HEAD
import Heroes from "@/sections/Heroes";
import Navbar from "@/sections/Navbar";
import SpaceSection from "@/sections/SpaceSection";
import Footer from "@/sections/Footer";
import Image from "next/image";
import dynamic from "next/dynamic";
import Countdown from "@/sections/Countdown";
=======
import Countdown from "@/sections/Countdown";
import CubePattern from "@/components/CubePattern";
import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";
import SectionAboutUs from "@/sections/SectionAboutUs";
import Heroes from "@/sections/Heroes";
import GarudaByTheNumbers from "@/sections/GarudaByTheNumbers";
import Spacing1 from "@/sections/SpaceHeader1";
import ProjectShowcase from "@/sections/Projects";
>>>>>>> a96d7a9655b427a07ac05fb5d985db6ff103c5ef

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <Heroes />
      <Countdown />
<<<<<<< HEAD
      <SpaceSection />
=======
      <Spacing1 />
      <SectionAboutUs />
      <GarudaByTheNumbers />
      <ProjectShowcase />
>>>>>>> a96d7a9655b427a07ac05fb5d985db6ff103c5ef
      <Footer />
    </div>
  );
}
