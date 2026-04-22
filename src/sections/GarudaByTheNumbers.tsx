import { byTheNumbers } from "@/Data/data";
import CornerCube from "@/components/CornerCube";

export default function GarudaByTheNumbers() {
    const points = [
    // buat yg kiri ama atas ye
    { pos: "-left-[-31px] -top-[10px] hidden lg:hidden xl:flex" },
    { pos: "-right-[-31px] -top-[10px] hidden lg:hidden xl:flex" },
    
    // buat yg vertikal atas
    { pos: "left-[7px] -top-[10px] lg:left-[111px] lg:-top-[10px] xl:left-[153px] xl:-top-[10px]" },
    { pos: "right-[7px] -top-[10px] lg:right-[111px] lg:-top-[10px] xl:right-[153px] xl:-top-[10px]" },

    // buat yang sudut kiri ama bawah
    { pos: "-left-[-31px] -bottom-[10px] hidden lg:hidden xl:flex" },
    { pos: "-right-[-31px] -bottom-[10px] hidden lg:hidden xl:flex" },
    
    // buat titik garis bantu bawah
    { pos: "left-[7px] -bottom-[10px] lg:left-[111px] lg:-bottom-[10px] xl:left-[153px] xl:-bottom-[10px]" },
    { pos: "right-[7px] -bottom-[10px] lg:right-[111px] lg:-bottom-[10px] xl:right-[153px] xl:-bottom-[10px]" },
    ];

    return (
        <section className={`w-full border-t border-gray-50`}>
            <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-r border-l border-r-[#C4A9FF] border-l-[#C4A9FF]">
                <div className="border-r border-l border-r-[#C4A9FF] border-l-[#C4A9FF] grid grid-cols-1 items-stretch gap-4 md:grid-cols-3 p-4">
                
                {byTheNumbers.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col border whitespace-pre-line border-[#C4A9FF] rounded-[8px] py-2 md:py-4 px-4 md:px-8">
                        <h3 className="font-['Monttserat',sans-serif] font-semibold text-[64px] text-[#8E47D6] leading-none">
                            {item.number}
                        </h3>
                  
                        <p className="font-['Montserat',sans-serif] font-medium text-[16px] text-gray-600 leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}