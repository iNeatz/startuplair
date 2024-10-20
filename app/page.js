import TiltCard from "@/components/Hero/TiltCard";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="flex h-screen w-full items-center justify-center"
      style={{
        background: `url('/logos/sul-purplebg-sq.png') center no-repeat`,
		  backgroundSize: 'cover'
      }}
    >
      <TiltCard />
    </div>
  );
}
