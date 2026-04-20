export default function CubePattern() {

  const positions = [
    // Left side
    "left-[31px] top-[54px]",
    "left-[31px] top-[516px]",
    "left-[31px] top-[716px]",
    "left-[31px] top-[1311px]",

    "left-[152px] top-[54px]",
    "left-[152px] top-[516px]",
    "left-[152px] top-[716px]",
    "left-[152px] top-[1311px]",
    // Right side
    "right-[31px] top-[54px]",
    "right-[31px] top-[516px]",
    "right-[31px] top-[716px]",
    "right-[31px] top-[1311px]",

    "right-[152px] top-[54px]",
    "right-[152px] top-[516px]",
    "right-[152px] top-[716px]",
    "right-[152px] top-[1311px]",
    
  ];

  return (
    <>
      {positions.map((pos, i) => (
        <div
          key={i}
          className={`hidden lg:flex absolute ${pos} items-center justify-center w-5 h-5 pointer-events-none z-60`}
        >
          <div className="rotate-45 bg-[#F9F5FF] border border-[#C4A9FF] w-[14px] h-[14px]" />
        </div>
      ))}
    </>
  );
}