import Navbar from "@/components/Navbar";
import CommentsBar from "@/sections/Comments";
import Heroes from "@/sections/Heroes";

export default function Home() {
  return (
    <div className="min-h-screen dotBg">
      <Navbar />
      <Heroes />
      <CommentsBar />
    </div>
  );
}
