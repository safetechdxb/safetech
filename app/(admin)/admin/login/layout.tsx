export const metadata = {
    title: "Safe Tech | Backend Console",
    description: "Safe Tech",
  };
  
  import "../../../globals.css";
  
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }