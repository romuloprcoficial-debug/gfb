import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'GFB Seguros',
  description: 'Seguros de Vida, Automóvel, Residencial e Empresarial.',
}

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased text-slate-800 bg-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
