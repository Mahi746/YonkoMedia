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
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '2069032613967109');
          fbq('track', 'PageView');
        `}</Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2069032613967109&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
