import './globals.css'
import { Inter } from 'next/font/google'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import Navbar from './_components/Navbar'
import Newsletter from './_components/Newsletter'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PublicTrades',
  description: 'Developing overlooked ideas into Useable products',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Theme>
          <Navbar />
          {children}
          <Newsletter />
        </Theme>
      </body>

    </html>
  )
}
