import { Inter } from 'next/font/google'
import './globals.css'
import { Theme } from '@radix-ui/themes';
import Navbar from '@/components/Navbar';
import AuthProvider from '@/context/authContext';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
 })

export const metadata = {
  title: 'Public-Trades',
  description: 'A market-place for your digital products',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <AuthProvider>
        <Theme>
        <Navbar />
        {children}
        </Theme>
        </AuthProvider>
        </body>
    </html>
  )
}
