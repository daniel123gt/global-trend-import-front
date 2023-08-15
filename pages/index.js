import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/atom/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <Banner />
    </div>
  );
}
