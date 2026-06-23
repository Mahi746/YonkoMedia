import type { Metadata } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const GA_ID = 'G-GB8TQ4Y7FJ'

export const metadata: Metadata = {
  metadataBase: new URL('https://yonkomedia.com'),
  title: 'Yonkomedia | Performance Marketing & Paid Ads Agency',
  description:
    'Yonkomedia helps e-commerce and growth-focused brands scale profitably through paid ads, creative strategy and conversion optimization.',
  keywords: [
    'performance marketing agency',
    'paid ads agency',
    'Meta ads agency',
    'Google ads agency',
    'creative strategy',
    'conversion optimization',
    'growth marketing',
  ],
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
  },
  openGraph: {
    title: 'Yonkomedia | Performance Marketing & Paid Ads Agency',
    description: 'Scale profitably with paid ads, creative strategy and conversion optimization.',
    type: 'website',
    url: 'https://yonkomedia.com',
    siteName: 'Yonkomedia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yonkomedia | Performance Marketing & Paid Ads Agency',
    description: 'Scale profitably with paid ads, creative strategy and conversion optimization.',
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
      </head>
      <body>
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
