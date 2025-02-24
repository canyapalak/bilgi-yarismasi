import "tailwindcss/tailwind.css";
import "@/app/globals.css";
import Head from "next/head";
import Header from "@/app/components/Header";
import WelcomeButtons from "@/app/components/WelcomeButtons";

export default function MyApp({}: any) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
        <title>Bilgi Yarışması</title>
      </Head>
      <div className="flex flex-row gap-1">
        <p className="text-sm m-2">Version: 1.0</p>
      </div>
      <main className={"flex flex-col min-h-screen w-11/12 md:w-3/4 mx-auto"}>
        <Header />
        <div
          className="ml-auto mr-auto border-dashed
      border-spacing-20 border-4 border-neutral-600 rounded-xl py-6 px-6 w-10/12 md:w-3/4 mb-6 container-dash"
        >
          <WelcomeButtons />
        </div>
      </main>
    </>
  );
}
