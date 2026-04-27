"use client";

import { projects } from "@/Data/data";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CornerCube from "@/components/CornerCube";

export default function ProjectShowcase({
  className = " ",
  cards = projects,
}: {
  className?: string;
  cards?: any[];
}) {
  const infiniteCard = [...cards, ...cards];

  const points = [
    // buat yg kiri ama atas ye
    { pos: "-left-[-31px] -top-[10px] hidden lg:hidden xl:flex z-40" },
    { pos: "-right-[-31px] -top-[10px] hidden lg:hidden xl:flex z-40" },

    // buat yg vertikal atas
    {
      pos: "left-[7px] -top-[10px] lg:left-[111px] lg:-top-[10px] xl:left-[153px] xl:-top-[10px]",
    },
    {
      pos: "right-[7px] -top-[10px] lg:right-[111px] lg:-top-[10px] xl:right-[153px] xl:-top-[10px]",
    },

    // buat yang sudut kiri ama bawah
    { pos: "-left-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-40" },
    { pos: "-right-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-40" },

    // buat titik garis bantu bawah
    {
      pos: "left-[7px] -bottom-[10px] lg:left-[111px] lg:-bottom-[10px] xl:left-[153px] xl:-bottom-[10px]",
    },
    {
      pos: "right-[7px] -bottom-[10px] lg:right-[111px] lg:-bottom-[10px] xl:right-[153px] xl:-bottom-[10px]",
    },
  ];

  return (
    <>
      <section
        className={`w-full bg-[#F9F5FF] ${className} border-x border-[#C4A9FF] relative`}
      >
        {points.map((point, i) => (
          <CornerCube key={i} className={`${point.pos} pointer-events-none`} />
        ))}
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-x border-[#C4A9FF]">
          <div className="border-x border-[#C4A9FF] py-12">
            <div className="relative flex w-full overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#F9F5FF] to-transparent z-20"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#F9F5FF] to-transparent z-20"></div>
              <div className="flex gap-12 md:gap-8 w-max animate-infinite-scroll hover:[animation-play-state:paused]">
                {infiniteCard.map((card, index) => (
                  <div
                    key={index}
                    className="relative group shrink-0 w-[300px] md:w-[380px] mb-10"
                  >
                    <div className="bg-[#f9f5ff] rounded-[8px] pb-12 p-6 shadow-sm flex flex-col gap-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-['Montserrat', sans-serif] font-bold text-[16px] text-[#221139]">
                          {card.title}
                        </h3>
                        <span className="font-['Montserrat', sans-serif] font-medium text-[16px] text-[#221139]">
                          {card.number}
                        </span>
                      </div>

                      <div className="w-full aspect-[4/3] rounded-[6px] overflow-hidden bg-[#221139]">
                        {card.image ? (
                          <img
                            src={card.image}
                            alt={card.title}
                            className=" w-full h-full object-cover grayscale-[0.5] group-hocer:grayscale-0 transition-all duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-[#F9F5FF]" />
                        )}
                      </div>

                      <p className="font-['Montserrat', sans-serif] font-medium text-[#221139] leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    <div className="absolute -bottom-4 left-6">
                      <button className="flex items-center gap-2 bg-[#ad87ff] hover:bg-[#8e47d6] text-white px-6 py-3 rounded-[8px] shadow-lg shadow-purple-200 transition-all active:scale-95 group/btn">
                        <span className="font-['Montserrat', sans-serif] font-semibold text-[16px]">
                          {card.teamName}
                        </span>
                        <ArrowRightIcon className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
