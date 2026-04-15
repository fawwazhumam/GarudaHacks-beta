interface CornerCubeProps {
  className?: string;
}

export default function CornerCube({ className = "" }: CornerCubeProps) {
  return (
    <div
      className={`absolute flex items-center justify-center w-5 h-5 pointer-events-none z-60 ${className}`}>
      <div className="rotate-45 bg-[#F9F5FF] border border-[#C4A9FF] w-[10px] h-[10px]" />
    </div>
  );
}