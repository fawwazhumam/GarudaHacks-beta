"use client";

import { useEffect, useState } from "react";

interface TimeUnit {
  value: string;
  label: string;
}

function CountdownBox({ value, label }: TimeUnit) {
  return (
    <div className="flex flex-col gap-1 items-center">
      <div className="bg-[rgba(249,245,255,0.2)] p-1 rounded-xl shadow-[0px_4px_8px_0px_rgba(138,56,245,0.18)]">
        <div className="bg-[#F9F5FF] flex items-center justify-center rounded-lg px-3 py-3 md:px-4 md:py-5">
          <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[#221139] text-[36px] md:text-[50px] lg:text-[64px] tracking-[-2px] leading-none">
            {value}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center px-4 py-1 rounded-xl">
        <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[#8036CB] text-[11px] md:text-[14px] lg:text-[16px]">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function CountdownSection() {
  // Target: July 24, 2026
  const target = new Date("2026-07-24T00:00:00").getTime();

  const getTimeLeft = () => {
    const now = Date.now();
    const diff = Math.max(target - now, 0);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  const units: TimeUnit[] = [
    { value: pad(time.days), label: "DAYS" },
    { value: pad(time.hours), label: "HOURS" },
    { value: pad(time.minutes), label: "MINUTES" },
    { value: pad(time.seconds), label: "SECONDS" },
  ];

  return (
    <section className="bg-[#F9F5FF] border-b border-[#C4A9FF]">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-r border-l border-r-[#C4A9FF] border-l-[#C4A9FF]">
        <div className="border-r border-l border-r-[#C4A9FF] border-l-[#C4A9FF] flex gap-3 md:gap-6 items-center justify-center px-6 py-6 flex-wrap">
          {units.map((unit, i) => (
            <CountdownBox key={unit.label} value={unit.value} label={unit.label} />
          ))}
        </div>
      </div>
    </section>
  );
}