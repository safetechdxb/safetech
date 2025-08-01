import type { Metadata } from "next";
/* import { Geist, Geist_Mono } from "next/font/google"; */
import "@/app/globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`} >
        {children}
      </body>
    </html>
  );
}