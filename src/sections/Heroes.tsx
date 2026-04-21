import CornerCube from "@/components/CornerCube";
import Image from "next/image";

export default function Heroes() {

  const points = [
    // buat yg kiri ama atas ye
    { pos: "-left-[-31px] -top-[10px] hidden lg:hidden xl:flex z-40" },
    { pos: "-right-[-31px] -top-[10px] hidden lg:hidden xl:flex z-40" },
    
    // buat yg vertikal atas
    { pos: "left-[7px] -top-[10px] lg:left-[111px] lg:-top-[10px] xl:left-[153px] xl:-top-[10px]" },
    { pos: "right-[7px] -top-[10px] lg:right-[111px] lg:-top-[10px] xl:right-[153px] xl:-top-[10px]" },

    // buat yang sudut kiri ama bawah
    { pos: "-left-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-100" },
    { pos: "-right-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-40" },
    
    // buat titik garis bantu bawah
    { pos: "left-[7px] -bottom-[10px] lg:left-[111px] lg:-bottom-[10px] xl:left-[153px] xl:-bottom-[10px]" },
    { pos: "right-[7px] -bottom-[10px] lg:right-[111px] lg:-bottom-[10px] xl:right-[153px] xl:-bottom-[10px]" },
  ];
  return (
    <section className="bg-[#F9F5FF] relative border-b border-[#C4A9FF]">
      
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-r border-l border-t border-r-[#C4A9FF] border-l-[#C4A9FF]">
      
        <div className="flex flex-col items-center border-r border-l border-r-[#C4A9FF] border-l-[#C4A9FF] justify-center gap-6 bg-[#190437]">
          
          {points.map((point, i) => (
          <CornerCube key={i} className={point.pos} />
          ))}

          <div className="relative w-full h-auto z-20">
            <Image 
              src="/image/HeroesCover.png" 
              alt="Background Grid" 
              width={1440} 
              height={840}
              className="w-full h-auto"
              priority 
            />
          </div>

          <div className="absolute z-40 flex flex-col items-center justify-center px-6 pt-[4px] md:pt-[8px] lg:pt-[12px] pb-[60px] md:pb-[80px] lg:pb-[180px] gap-6">
            <div className="flex items-center justify-center px-3 py-2">
              <h1 className="font-['Montserrat',sans-serif] font-bold text-[#F9F5FF] text-[40px] md:text-[60px] lg:text-[80px] leading-none whitespace-nowrap">
                Garuda Hacks 7.0
              </h1>
            </div>

            <div className="flex flex-col items-center gap-0">
              <p className="font-['Montserrat',sans-serif] font-medium text-[#F9F5FF] text-[13px] md:text-[16px] text-center">
                July 24 - 26 | 2026 at Universitas Multimedia Nusantara
              </p>
              <p className="font-['Montserrat',sans-serif] font-medium text-[#F9F5FF] text-[13px] md:text-[16px] text-center">
                Be part of Indonesia's largest hackathon
              </p>
            </div>

            <div className="flex gap-6 items-center justify-center flex-wrap">
              <a
                href="#apply"
                className="btn-bold bg-[#8E47D6] text-[#F9F5FF] font-['Montserrat',sans-serif] font-medium text-[16px]"
              >
                Apply Now
              </a>
              <a
                href="#guidebook"
                className="btn-bold bg-[#8E47D6] text-[#F9F5FF] font-['Montserrat',sans-serif] font-medium text-[16px]"
              >
                Guide Book
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}