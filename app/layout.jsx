import { Inter, Anton } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({
  variable:'--font-inter',
  subsets:['latin'],
  weight:['400','500','600','700','700','800','900']
})


export const metadata = {
  title: "BoostBros",
  description: "Next Gen Studio ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
