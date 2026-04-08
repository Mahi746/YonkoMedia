import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const GA_ID = 'G-GB8TQ4Y7FJ'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://yonkomedia.com'),
  title: 'Yonkomedia — Fractional CMO Studio',
  description:
    'Fractional CMO studio for ambitious brands. We fix the levers limiting your growth — Traffic, Conversion, Retention, Pricing — and build systems that compound.',
  keywords: ['fractional CMO', 'growth marketing', 'revenue growth', 'marketing strategy', 'CMO for hire', 'growth systems', 'performance marketing'],
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
  },
  openGraph: {
    title: 'Yonkomedia — Fractional CMO Studio',
    description: 'We fix the levers limiting your growth. Traffic × Conversion × Retention × Pricing.',
    type: 'website',
    url: 'https://yonkomedia.com',
    siteName: 'Yonkomedia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yonkomedia — Fractional CMO Studio',
    description: 'We fix the levers limiting your growth. Traffic × Conversion × Retention × Pricing.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable} suppressHydrationWarning>
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body className="bg-dark text-white antialiased overflow-x-hidden font-sans">
        {children}
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">{`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "w7misv1bx6");
        `}</Script>
      </body>
    </html>
  )
}
