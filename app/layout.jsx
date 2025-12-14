import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import LenisProvider from "./components/LenisProvider";
import IntroLoader from "./components/IntroLoader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "700", "800", "900"],
});


export const metadata = {
  title: "BoostBros",
  description: "Next Gen Studio ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <LenisProvider>
          <IntroLoader />
          <Navbar />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
