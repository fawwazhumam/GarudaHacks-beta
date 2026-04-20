"use client";

import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import CornerCube from "@/components/CornerCube";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Tracks", href: "#tracks" },
  { label: "FAQ", href: "#faq" },
  { label: "2025", href: "#2025" },
];

export default function Navbar({ className = "" }: { className?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const points = [
    // buat yang sudut kiri ama atas
    { pos: "-left-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-40" },
    { pos: "-right-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-40" },
    
    // buat titik garis bawah
    { pos: "left-[7px] -bottom-[10px] lg:left-[111px] lg:-bottom-[10px] xl:left-[153px] xl:-bottom-[10px]" },
    { pos: "right-[7px] -bottom-[10px] lg:right-[111px] lg:-bottom-[10px] xl:right-[153px] xl:-bottom-[10px]" },
  ];

  // Efek Anti-Scroll
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    // PERBAIKAN 1: Wajib dibungkus Fragment <> karena ada 3 div utama di level atas
    <>
      <nav className={`bg-[#F9F5FF] w-full border-b border-[#C4A9FF] top-0 right-0 z-[100] fixed ${className}`}>
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-x border-[#C4A9FF]">
          {points.map((point, i) => (
            <CornerCube key={i} 
              className={`${point.pos} pointer-events-none`} />
            ))}
          <div className="flex items-center justify-between py-3 px-6 border-x border-[#C4A9FF] relative">

            {/* Logo - PERBAIKAN 2: Hilangkan w-8 h-8 agar logo tidak terpotong */}
            <div className="flex items-center h-8 shrink-0">
              <Image
                src="/image/GambarLogoGarudaHitam.png"
                alt="Garuda Hacks Logo"
                width={150}
                height={50}
                className="h-full w-auto object-contain"
                priority
              />
            </div>

            {/* Nav Links Desktop */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 font-['Montserrat',sans-serif] font-medium text-[#221139] text-[14px] hover:text-[#8E47D6] transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Apply Button Desktop */}
            <div className="hidden md:flex items-center">
              <a
                href="#apply"
                className="btn-bold"
              >
                Apply Now
              </a>
            </div>

            {/* Hamburger Button */}
            <button
              type="button"
              className="md:hidden p-2 text-[#221139]"
              onClick={(e) => {
                  e.stopPropagation(); 
                  setMobileOpen(!mobileOpen);
                }
              }
            >
              {mobileOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* 2. OVERLAY BACKDROP */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`md:hidden fixed inset-0 z-[105] bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* 3. BOTTOM SHEET MENU */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-[110] bg-[#F9F5FF] border-t border-[#C4A9FF] rounded-t-[4px] shadow-2xl transition-transform duration-300 ease-out p-6 ${
          mobileOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex justify-center mb-6">
          <div className="w-12 h-1.5 rounded-full bg-gray-300" />
        </div>

        <div className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-4 font-['Montserrat',sans-serif] font-medium text-[#221139] text-[16px] border-b border-gray-100 active:bg-purple-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#apply"
            onClick={() => setMobileOpen(false)}
            className="mt-6 bg-[#8E47D6] text-[#F9F5FF] font-['Montserrat',sans-serif] font-bold text-[14px] px-6 py-4 rounded-xl hover:bg-[#8036CB] transition-colors text-center shadow-lg shadow-purple-200"
          >
            Apply Now
          </a>
        </div>
      </div>
    </>
  );
}