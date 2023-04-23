import { useEffect } from "react";
import { useHuddle01 } from "@huddle01/react";
import { Toaster } from "react-hot-toast";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

import Header from "@/components/Header";

import "@rainbow-me/rainbowkit/styles.css";
import "@/styles/globals.css";

import type { AppProps } from "next/app";

const { chains, provider } = configureChains(
  [polygonMumbai],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Connect",
  projectId: "connect",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function App({ Component, pageProps }: AppProps) {
  const { initialize } = useHuddle01();

  // initialize huddle01 sdk
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_PROJECT_ID) {
      initialize(process.env.NEXT_PUBLIC_PROJECT_ID);
    }
  }, []);

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider theme={darkTheme()} chains={chains}>
        <Header />
        <Component {...pageProps} />
        <Toaster />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
