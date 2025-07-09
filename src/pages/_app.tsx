import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/pages/components/layouts/Navbar";
import Footer from "@/pages/components/layouts/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
