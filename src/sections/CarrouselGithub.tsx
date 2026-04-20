import Image from "next/image";
import { contributors } from "../Data/data";
import CornerCube from "@/components/CornerCube";

export default function CarrouselGithub() {
    const doubleContributors = [...contributors, ...contributors];

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
        <section className="w-full border-t border-t-[#C4A9FF] border-b border-b-[#C4A9FF] bg-[#F9F5FF] overflow-hidden">
            <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-x border-[#C4A9FF]">
                
                <div className="border-x border-[#C4A9FF] py-4">
                    

                    {/* Carousel Container */}
                    <div className="relative flex w-full overflow-hidden">
                        {/* Wrapper Animasi */}
                        <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] py-2">
                           
                            
                            {doubleContributors.map((username, index) => (
                                <div 
                                    key={index} 
                                    className="flex flex-col items-center justify-center mx-6 group cursor-pointer"
                                >
                                    <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-[8px] overflow-hidden border-2 border-[#C4A9FF] group-hover:border-[#8E47D6] group-hover:scale-110 transition-all duration-300 bg-white shadow-sm">
                                        <Image
                                            src={`https://github.com/${username}.png`}
                                            alt={username}
                                            fill
                                            className="object-cover"
                                            unoptimized
                                        />
                                    </div>
                                    <span className="mt-2 text-[12px] font-['Montserrat',sans-serif] font-medium text-[#AD87FF] group-hover:text-[#8E47D6]">
                                        {username}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#F9F5FF] to-transparent"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#F9F5FF] to-transparent"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}