import Image from "next/image";
import CornerCube from "@/components/CornerCube";
import { AboutData } from "@/Data/data";

export default function SectionAboutUs() {
  const points = [
    // buat yg kiri ama atas ye
    { pos: "-left-[-31px] -top-[10px] hidden lg:hidden xl:flex z-40" },
    { pos: "-right-[-31px] -top-[10px] hidden lg:hidden xl:flex z-40" },
    
    // buat yg vertikal atas
    { pos: "left-[7px] -top-[10px] lg:left-[111px] lg:-top-[10px] xl:left-[153px] xl:-top-[10px]" },
    { pos: "right-[7px] -top-[10px] lg:right-[111px] lg:-top-[10px] xl:right-[153px] xl:-top-[10px]" },

    // buat yang sudut kiri ama bawah
    { pos: "-left-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-40" },
    { pos: "-right-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-40" },
    
    // buat titik garis bantu bawah
    { pos: "left-[7px] -bottom-[10px] lg:left-[111px] lg:-bottom-[10px] xl:left-[153px] xl:-bottom-[10px]" },
    { pos: "right-[7px] -bottom-[10px] lg:right-[111px] lg:-bottom-[10px] xl:right-[153px] xl:-bottom-[10px]" },
  ];

  return (
    <section id="about" className="bg-[#F9F5FF] relative border-b border-[#C4A9FF]">
      
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-r border-l border-r-[#C4A9FF] border-l-[#C4A9FF] stripeBg">
        {points.map((point, i) => (
              <CornerCube key={i} className={point.pos} />
            ))}
        <div className="flex flex-col bg-[#F9F5FF] border-r border-l border-r-[#C4A9FF] border-l-[#C4A9FF] md:flex-row gap-6 items-start px-6 py-[60px] md:py-[80px] lg:py-[120px]">
   
          <div className="border border-[#C4A9FF] rounded-lg p-3 flex items-center justify-center relative shrink-0 self-center md:self-auto w-full md:w-auto md:min-w-[260px] lg:min-w-[365px] shadow-[inset_2px_4px_18px_0px_rgba(196,169,255,0.64)]">
            <div className="flex items-center justify-center overflow-hidden w-full h-full">
              <Image
                src="/image/GHIllustration.svg"
                alt="Garuda Hacks Logo"
                width={264}
                height={264}
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 flex-1 justify-center">
            <div className="px-3 py-2">
              <h2 className="font-['Montserrat',sans-serif] font-medium text-[#221139] text-[20px] md:text-[26px] lg:text-[32px] leading-snug">
                Garuda Hacks is Southeast Asia's largest hackathon, with over{" "}
                <span className="font-bold">6000 total participants.</span>
              </h2>
            </div>
            <div className="px-3 py-1">
              <p className="font-['Montserrat',sans-serif] font-medium text-[#221139] text-[13px] md:text-[15px] lg:text-[16px] text-justify leading-relaxed">
                {AboutData[0].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}