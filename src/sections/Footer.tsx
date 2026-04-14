const footerColumns = [
  {
    title: "Garuda Hacks © 2026",
    isBrand: true,
    links: [
      { label: "Join Now", href: "#" },
      { label: "Guide Book", href: "#" },
    ],
  },
  {
    title: "About",
    links: [{ label: "Download ↗", href: "#" }],
  },
  {
    title: "Project",
    links: [
      { label: "Discord ↗", href: "#" },
      { label: "GH 2025 ↗", href: "#" },
    ],
  },
  {
    title: "Track",
    links: [
      { label: "Blog ↗", href: "#" },
      { label: "About ↗", href: "#" },
      { label: "Team ↗", href: "#" },
      { label: "FAQ ↗", href: "#" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Twitter ↗", href: "#" },
      { label: "Medium ↗", href: "#" },
      { label: "YouTube ↗", href: "#" },
      { label: "Instagram ↗", href: "#" },
      { label: "Tiktok ↗", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#8E47D6]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-[144px] py-3">
        <div className="px-6 py-3">
          {/* Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 pb-12 pt-2">
            {footerColumns.map((col) => (
              <div key={col.title} className="flex flex-col gap-6">
                {/* Title */}
                <div
                  className={`py-2 ${col.isBrand ? "border-b border-[#C4A9FF]" : ""}`}
                >
                  <div className="px-2 py-0.5">
                    <span
                      className={`font-['Montserrat',sans-serif] text-[#F9F5FF] text-[14px] md:text-[16px] ${
                        col.isBrand ? "font-bold" : "font-medium"
                      }`}
                    >
                      {col.title}
                    </span>
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-2">
                  {col.links.map((link) => (
                    <div key={link.label} className="flex flex-col">
                      <a
                        href={link.href}
                        className="px-2 py-0.5 font-['Montserrat',sans-serif] font-normal text-[#F9F5FF] text-[11px] md:text-[12px] underline hover:text-[#C4A9FF] transition-colors"
                      >
                        {link.label}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}