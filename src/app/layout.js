import './globals.css';
import { Inter } from 'next/font/google';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Navbar from '../components/Navbar';
// import { useAuth } from '../context/authContext';
// import appwriteService from '../appwrite/config';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PublicTrades',
  description: 'Developing overlooked ideas into useable products',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <Navbar />
          {children}
        </Theme>
      </body>
    </html>
  )
}
