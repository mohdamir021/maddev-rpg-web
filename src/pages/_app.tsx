import "@/styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; // OPTIONAL
import Head from "next/head";
import Providers from "@/loaders/Providers";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>MADDEV RPG</title>
        <meta name="description" content="html5qr test" />
        <link rel="icon" href="/assets/ico/eSPBT.ico" sizes="any" />
      </Head>
      <Providers>{getLayout(<Component {...pageProps} />)}</Providers>
    </>
  );
}
