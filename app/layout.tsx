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
  title: 'Yonkomedia — Growth Studio',
  description:
    'We make ambitious companies grow faster. Strategy, execution, and results — all under one roof.',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
  },
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
