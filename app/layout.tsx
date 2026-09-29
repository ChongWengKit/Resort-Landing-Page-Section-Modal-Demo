import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import TopBar from "./components/ui/TopBar";
import Footer from "./components/ui/Footer";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "St Regis Langkawi",
  description: "St Regis Langkawi is a luxurious resort in Langkawi, Malaysia.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TopBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
