import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/atom/Banner";
import Head from "next/head";
import CategoryCard from "@/components/atom/CategoryCard";
import Audio from "@/public/audio.webp";
import Mochilas from "@/public/mochilas.jpeg";
import SkinCare from "@/public/skincare.jpeg";
import Velador from "@/public/product/veladorSmartP.png";
import SmartWatch from "@/public/product/SmartWatch.png";
import Charger from "@/public/product/charger.jpeg";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trending Imports",
  description: "Un mundo entero en tus manos",
};

const CATEGORIES = [
  { title: "Audio", img: Audio },
  { title: "Cargadores", img: Charger },
  { title: "Mochilas", img: Mochilas },
  { title: "SkinCare", img: SkinCare },
  { title: "Organización", img: Velador },
  { title: "SmartWatch", img: SmartWatch },
];

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Trending Imports</title>
        <meta property="og:title" content="Trending Imports" key="title" />
        <meta
          name="description"
          content="Trending imports, un mundo entero en tus manos, donde puedes encontrar todo lo que necesitas para que tu vida sea mas sencilla"
        ></meta>
      </Head>
      <Banner />
      <div className="container-global pt-10">
        <h2 className="uppercase text-center text-4xl text-blue-dark">
          Explora todo lo que tenemos para ti!
        </h2>
        <div className="flex justify-center gap-10 py-10">
          {CATEGORIES.map((item, index) => (
            <CategoryCard title={item.title} img={item.img} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
