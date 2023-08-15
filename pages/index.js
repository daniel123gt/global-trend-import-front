import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/atom/Banner";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trending Imports",
  description: "Un mundo entero en tus manos",
};

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
    </div>
  );
}
