import Header from "@/components/Header";
import "@/styles/globals.css";
import { useHuddle01 } from "@huddle01/react";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { initialize } = useHuddle01();

  // initialize huddle01 connection
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_PROJECT_ID) {
      initialize(process.env.NEXT_PUBLIC_PROJECT_ID);
    }
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
