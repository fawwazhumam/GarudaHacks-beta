import { stat } from "fs";
import Link from "next/link";

export default function Heroes({ className = " " }: { className?: string }) {
  return (
    <section className="w-full bg-[#F9F5FF] ${className}">
      <div className="max-w-[1216px] dotBg border-r-2 border-l-2 border-pink-100 mx-auto px-5 md:px-8">
        <div className="flex flex-col items-center text-center bg-[#F9F5FF] border-r-2 border-l-2 border-pink-100 pt-24 md:pt-32 pb-14 md:pb-20 gap-5 md:gap-6">
          <h1 className="font-['Plus_Jakarta_Sans', sans-serif] font-semibold text-pink-500 leading-[1.08] tracking-[-0.03em] mx-w-[680px] text-[40px] sm:text-[52px] md:text-[60px]">
            Garuda Hacks<span className="text-pink-600">7.0</span>
          </h1>

          <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-gray-600 leading-relaxed max-w-[480px]">
            Be part of Indonesia&apos;s Largest Hackathon
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1">
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-[16px] font-semibold rounded-lg hover:bg-gray-100 transition-all font-['Plus-Jakarta_Sans,sans-serif]">
              Hand Book
            </Link>
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-[16px] font-semibold rounded-lg hover:bg-gray-100 transition-all font-['Plus-Jakarta_Sans,sans-serif]">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
