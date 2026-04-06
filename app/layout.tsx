import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yonkomedia — Growth Studio',
  description:
    'We make ambitious companies grow faster. Strategy, execution, and results — all under one roof.',
  openGraph: {
    title: 'Yonkomedia — Growth Studio',
    description: 'Growth strategy, execution, and results for ambitious brands.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="bg-dark text-white antialiased overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  )
}
