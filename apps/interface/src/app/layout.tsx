import type { Metadata } from 'next'
import { WalletProvider } from '@/context/WalletContext'
import { Navbar } from '@/components/Navbar'
import './globals.css'

export const metadata: Metadata = {
  title: 'Enovate - Decentralized Innovation Funding',
  description: 'Fund innovative ideas on the Stellar blockchain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <WalletProvider>
          <Navbar />
          <main>{children}</main>
        </WalletProvider>
      </body>
    </html>
  )
}
