import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { JSX } from 'react';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <>
		<Head>
        <title>Create Next</title>
        <meta name="description" content="Generated by create next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link key={1} rel="icon" href="/favicon_2.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
				<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </Head>
		<Component {...pageProps} />;
	</>
}
