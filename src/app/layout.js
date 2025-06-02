import "./globals.css";
import { Inter } from "next/font/google";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Navbar from "../components/Navbar";
// import { useAuth } from '../context/authContext';
// import appwriteService from '../appwrite/config';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PublicTrades",
  description: "Developing overlooked ideas into useable products",
  // It's generally better to manage icons and manifest through the metadata object
  // if you're using the App Router, but adding them directly to head works too.
  // icons: {
  //   icon: [
  //     { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
  //     { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
  //   ],
  //   apple: '/apple-touch-icon.png',
  // },
  // manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <Theme>
          <Navbar />
          {children}
        </Theme>
      </body>
    </html>
  );
}
