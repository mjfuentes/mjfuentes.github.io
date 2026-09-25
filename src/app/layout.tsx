import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-archivo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Matias Fuentes — Staff Backend Engineer',
  description:
    '13+ years building software at the intersection of technology and creativity. Founder of Kerplunk Studio, exploring agentic AI architectures.',
  openGraph: {
    title: 'Matias Fuentes — Staff Backend Engineer',
    description:
      '13+ years building software at the intersection of technology and creativity.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={archivo.variable}
    >
      <body>{children}</body>
    </html>
  )
}
