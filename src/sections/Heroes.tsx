export default function Heroes() {
  return (
    <section className="bg-[#F9F5FF] border-b border-[#C4A9FF]">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border border-r-[#C4A9FF] border-l-[#C4A9FF]">
        <div className="flex flex-col items-center border border-r-[#C4A9FF] border-l-[#C4A9FF] justify-center py-6 px-6 pt-[60px] md:pt-[80px] lg:pt-[120px] pb-[60px] md:pb-[80px] lg:pb-[100px] gap-6">

          <div className="flex items-center justify-center px-3 py-2">
            <h1 className="font-['Montserrat',sans-serif] font-bold text-[#221139] text-[40px] md:text-[60px] lg:text-[80px] leading-none whitespace-nowrap">
              Garuda Hacks 6.0
            </h1>
          </div>

          <div className="flex flex-col items-center gap-0">
            <p className="font-['Montserrat',sans-serif] font-medium text-[#221139] text-[13px] md:text-[16px] text-center">
              July 24 - 26 | 2026 at Universitas Multimedia Nusantara
            </p>
            <p className="font-['Montserrat',sans-serif] font-medium text-[#221139] text-[13px] md:text-[16px] text-center">
              Be part of Indonesia's largest hackathon
            </p>
          </div>

          <div className="flex gap-6 items-center justify-center flex-wrap">
            <a
              href="#apply"
              className="bg-[#8E47D6] text-[#F9F5FF] font-['Montserrat',sans-serif] font-medium text-[14px] px-6 py-3 rounded-lg hover:bg-[#8036CB] transition-colors"
            >
              Apply Now
            </a>
            <a
              href="#guidebook"
              className="bg-[#8E47D6] text-[#F9F5FF] font-['Montserrat',sans-serif] font-medium text-[14px] px-6 py-3 rounded-lg hover:bg-[#8036CB] transition-colors"
            >
              Guide Book
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}