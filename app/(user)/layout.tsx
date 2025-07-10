import type { Metadata } from "next";
/* import { Geist, Geist_Mono } from "next/font/google"; */
import "../../app/globals.css";
import Footer from "../components/common/Footer";
import HeaderMenu from "../components/common/HeaderMenu";
import { JobSelectContextProvider } from "../contexts/jobSelectContext";
import parse from 'html-react-parser'

/* const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

 */


export const metadata: Metadata = {
  title: "Safe tech",
  description: "Every construction is built to last and enhances the spaces where people live, work, and thrive.",
};

export const dynamic = 'force-dynamic';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const tagResponse = await fetch(`${process.env.BASE_URL}/api/admin/tags`);
  const tagData = await tagResponse.json();


  return (
    <html lang="en">
      {tagData?.tag && <head>{parse(tagData?.tag?.headerScript || "")}</head>}
      <body className={`antialiased`} >
      {tagData?.tag && <>{parse(tagData?.tag?.bodyScript || "")}</>}
        <JobSelectContextProvider>
          <HeaderMenu />
          {children}
          <Footer/>
        </JobSelectContextProvider>
      </body>
    </html>
  );
}
