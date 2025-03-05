import "tailwindcss/tailwind.css";
import "@/app/globals.css";
import Head from "next/head";
import Header from "@/app/components/Header";
import { useState } from "react";
import ContactSupportRounded from "@mui/icons-material/ContactSupportRounded";
import CreditsModal from "@/app/components/CreditsModal";
import { ContestProvider } from "@/app/context/ContestContext";
import { ScoreProvider } from "@/app/context/ScoreContext";

export default function MyApp({ Component, pageProps }: any) {
  const [open, setOpen] = useState(false);

  const handleOpenModal: any = () => {
    setOpen(true);
  };
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
        <title>
          "Bir Yıldız, Bir Hilal, İlelebet İstiklal" Bilgi Yarışması
        </title>
      </Head>
      <div className="flex flex-row gap-1">
        <ContactSupportRounded
          className="w-6 mt-1.5 ml-1.5 cursor-pointer hover:text-gray-default"
          onClick={handleOpenModal}
        />
        {open ? <CreditsModal open={open} setOpen={setOpen} /> : null}
      </div>
      <main className={"flex flex-col min-h-screen w-11/12 mx-auto"}>
        <Header />
        <div
          className="ml-auto mr-auto border-dashed
      border-spacing-20 border-4 border-neutral-600 rounded-xl py-6 px-2 sm:px-4 md:px-8 w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12 mb-8 container-dash"
        >
          <ScoreProvider>
            <ContestProvider>
              <Component {...pageProps} />
            </ContestProvider>
          </ScoreProvider>
        </div>
      </main>
    </>
  );
}
