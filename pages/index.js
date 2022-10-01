import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-[#372c2e] w-full h-full">
      <Head>
        <title>aDiL</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.png"></link>
      </Head>
      <div className="bg-[#372c2e] max-w-[1300px] m-auto overflow-x-hidden">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

// light #eee7e1
// dark #1a1919
// light bluish #cbe5ff
// light yellowish #FFF480
