"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Tracks", href: "#tracks" },
  { label: "FAQ", href: "#faq" },
  { label: "2025", href: "#2025" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-[#F9F5FF] border-b border-[#C4A9FF] sticky top-0 z-50">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-r border-l border-r-[#C4A9FF] border-l-[#C4A9FF]">
        <div className="flex items-center justify-between py-3 px-6 border-r border-l border-r-[#C4A9FF] border-l-[#C4A9FF]">
   
          <div className="flex items-center justify-center w-8 h-8 overflow-hidden shrink-0">
            <Image 
              src="/image/GambarLogoGarudaHitam.png"
              alt="Garuda Hacks Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
      
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

          <div className="hidden md:flex items-center">
            <a
              href="#apply"
              className="bg-[#8E47D6] text-[#F9F5FF] font-['Montserrat',sans-serif] font-medium text-[14px] px-6 py-2 rounded-lg hover:bg-[#8036CB] transition-colors whitespace-nowrap"
            >
              Apply Now
            </a>
          </div>

          <button
            className="md:hidden p-2 text-[#221139]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#F9F5FF] border-t border-[#C4A9FF] px-6 pb-4">
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 font-['Montserrat',sans-serif] font-medium text-[#221139] text-[14px] hover:text-[#8E47D6] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#apply"
              onClick={() => setMobileOpen(false)}
              className="mt-2 bg-[#8E47D6] text-[#F9F5FF] font-['Montserrat',sans-serif] font-medium text-[14px] px-6 py-2 rounded-lg hover:bg-[#8036CB] transition-colors text-center"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}