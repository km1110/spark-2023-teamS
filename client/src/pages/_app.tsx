import { AxiosProvider } from "@/components/AxiosProvider";
import { FirebaseAuthProvider } from "@/components/FirebaseAuthProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FirebaseAuthProvider>
      <AxiosProvider>
        <Component {...pageProps} />
      </AxiosProvider>
    </FirebaseAuthProvider>
  );
}
