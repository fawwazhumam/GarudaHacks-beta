// Decorative rotated squares at section borders (matches Figma cube-pattern elements)
export default function CubePattern() {
  // These appear at the edges of sections as visual dividers
  // On mobile we hide most of them for cleaner look
  const positions = [
    // Left side
    "left-[22px] top-[47px]",
    "left-[22px] top-[542px]",
    "left-[22px] top-[727px]",
    "left-[22px] top-[780px]",
    "left-[22px] top-[1345px]",
    // Right side
    "right-[22px] top-[47px]",
    "right-[22px] top-[542px]",
    "right-[22px] top-[727px]",
    "right-[22px] top-[780px]",
    "right-[22px] top-[1345px]",
  ];

  return (
    <>
      {positions.map((pos, i) => (
        <div
          key={i}
          className={`hidden lg:flex absolute ${pos} items-center justify-center w-5 h-5 pointer-events-none z-10`}
        >
          <div className="rotate-45 bg-[#F9F5FF] border border-[#C4A9FF] w-[14px] h-[14px]" />
        </div>
      ))}
    </>
  );
}