import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import dynamic from "next/dynamic";
import Link from "next/link";

const Player = dynamic(() => import("@/components/Player"), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div
          className="div"
          style={{
            width: "600px",
          }}
        >
          <Player
            url="https://player.vimeo.com/video/798410935?h=35a20f40ed"
            provider="vimeo"
          />
          <Link href={"/two"}>Two</Link>
        </div>
      </main>
    </>
  );
}
