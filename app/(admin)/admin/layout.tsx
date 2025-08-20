import type { Metadata } from "next";
import "../../../app/globals.css";


export const metadata: Metadata = {
  title: "Safe Tech | Backend Console",
  description: "Safe Tech",
  icons: {
    icon: "/assets/img/logofav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased overflow-x-hidden overflow-y-hidden`}>{children}</body>
    </html>
  );
}