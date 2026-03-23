import Navbar from "@/components/Navbar";
import Heroes from "@/sections/Heroes";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Heroes />
    </div>
  );
}
