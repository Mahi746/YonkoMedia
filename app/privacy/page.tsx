import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Yonkomedia',
  description: 'Privacy Policy for Yonkomedia. Learn how we collect, use and protect your personal information.',
}

const sections = [
  {
    title: '1. Introduction',
    body: [
      'Yonkomedia ("we", "us", or "our") operates as a paid media and performance marketing agency. This Privacy Policy explains how we collect, use, disclose and protect your personal information when you interact with our website at yonkomedia.com, submit enquiries through our contact forms, or engage with our advertising on platforms such as Meta (Facebook and Instagram).',
      'By submitting your information through any form on our website or through our Meta lead ads, you agree to the practices described in this policy.',
    ],
  },
  {
    title: '2. Information We Collect',
    body: ['We collect information you provide directly, including your name, email address, phone number, company name, website URL, business revenue range, marketing budget, growth challenges, business goals and any other details you choose to share.'],
    listTitle: 'We may also collect information automatically, such as:',
    list: ['IP address and approximate location', 'Browser type and device information', 'Pages visited and time spent on site', 'Referring website or ad that brought you to our site', 'Clicks, scrolls and interactions on our website'],
  },
  {
    title: '3. How We Use Your Information',
    body: [
      'We use the information we collect to respond to your enquiries, schedule strategy calls, assess whether our services are a good fit for your business, send relevant information about our services, improve our website and advertising, analyze marketing performance, comply with legal obligations and prevent fraud or misuse.',
      'We do not sell your personal information to third parties. We do not use your data for any purpose other than those listed above without your consent.',
    ],
  },
  {
    title: '4. Meta Lead Ads',
    body: [
      'We run lead generation campaigns on Meta platforms including Facebook and Instagram. When you submit your information through a Meta lead form, that information is collected by Meta and shared with us in accordance with Meta’s data policies.',
      'We use this information only to contact you about our services, evaluate fit and follow up on your request. You may opt out of further communications at any time by replying “unsubscribe” or emailing us.',
    ],
  },
  {
    title: '5. Cookies and Tracking Technologies',
    body: ['We may use cookies, pixels and analytics tools to understand website performance, measure advertising effectiveness and improve user experience. You can control cookies through your browser settings, but some website features may not work as intended if cookies are disabled.'],
    listTitle: 'Our website may use tools such as:',
    list: ['Google Analytics 4 for traffic and campaign performance measurement', 'Microsoft Clarity for privacy-conscious session insights and heatmaps', 'Meta Pixel for conversion tracking and ad performance', 'Vercel Analytics and Speed Insights for site performance'],
  },
  {
    title: '6. Data Sharing',
    body: [
      'We do not sell, rent or trade your personal information. We may share data with trusted service providers who help us operate our website, manage forms, analyze performance, schedule calls, run ads or provide client services.',
      'Examples include Google Sheets for internal lead tracking and Calendly when you choose to book a call. We may also disclose information if required by law, regulation, legal process or to protect our rights and users.',
    ],
  },
  {
    title: '7. Data Retention',
    body: ['We retain personal information only for as long as reasonably necessary to respond to enquiries, manage business relationships, comply with legal obligations, resolve disputes and improve our services. Lead enquiry data is typically retained for up to two years unless you ask us to delete it earlier.'],
  },
  {
    title: '8. Your Rights',
    body: ['Depending on your location, you may have rights to access, correct, delete, restrict or object to processing of your personal information. You may also request a copy of your data, withdraw consent where processing is based on consent, or opt out of marketing communications at any time.'],
  },
  {
    title: '9. Security',
    body: ['We use reasonable administrative, technical and organizational measures to protect your information. However, no method of transmission or storage is fully secure, so we cannot guarantee absolute security.'],
  },
  {
    title: '10. Third-Party Links',
    body: ['Our website may link to third-party websites, tools or platforms. We are not responsible for the privacy practices, policies or content of those third parties.'],
  },
  {
    title: '11. Children’s Privacy',
    body: ['Our website and services are intended for businesses and are not directed to children under 13. We do not knowingly collect personal information from children.'],
  },
  {
    title: '12. Changes to This Policy',
    body: ['We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised "Last updated" date.'],
  },
  {
    title: '13. Contact Us',
    body: ['If you have questions about this Privacy Policy or want to exercise your rights, contact Yonkomedia at hello@yonkomedia.com or visit yonkomedia.com. We will respond to reasonable privacy requests within 30 days.'],
  },
]

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#f1f0ea] text-[#171714]" style={{ fontFamily: 'Geist, system-ui, sans-serif' }}>
      <header className="px-5 py-5 md:px-10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-[#d8d5ca] bg-[#fbfaf7]/90 px-5 py-4 shadow-[0_18px_45px_rgba(40,34,25,0.06)] backdrop-blur">
          <Link href="/" className="text-xl font-bold tracking-[-0.045em] text-[#171714]">
            yonko<span className="text-[#bfff20]">media</span>
          </Link>
          <Link
            href="/"
            className="rounded-full bg-[#171714] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_16px_35px_rgba(23,23,20,0.18)]"
          >
            Back to home
          </Link>
        </nav>
      </header>

      <section className="px-5 pb-10 pt-8 md:px-10 md:pb-16 md:pt-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[32px] border border-[#d8d5ca] bg-white p-7 shadow-[0_24px_70px_rgba(40,34,25,0.08)] md:p-9">
              <p className="mb-5 inline-flex rounded-full bg-[#bfff20] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#171714]">
                Legal
              </p>
              <h1 className="max-w-md text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
                Privacy Policy
              </h1>
              <p className="mt-5 max-w-md text-base leading-7 text-[#68635c]">
                How Yonkomedia collects, uses and protects information across our website, lead forms and advertising touchpoints.
              </p>
              <div className="mt-8 rounded-3xl bg-[#f1f0ea] p-5">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#777169]">Last updated</span>
                <p className="mt-2 text-lg font-semibold">June 22, 2026</p>
              </div>
            </div>
          </aside>

          <div className="space-y-4">
            {sections.map((section) => (
              <section
                key={section.title}
                className="rounded-[28px] border border-[#d8d5ca] bg-white p-6 shadow-[0_18px_45px_rgba(40,34,25,0.05)] md:p-8"
              >
                <h2 className="text-2xl font-semibold tracking-[-0.035em]">{section.title}</h2>
                <div className="mt-4 space-y-4 text-[15px] leading-7 text-[#605b54] md:text-base">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.listTitle ? <p className="font-semibold text-[#171714]">{section.listTitle}</p> : null}
                  {section.list ? (
                    <ul className="grid gap-2">
                      {section.list.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-1.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#bfff20] text-xs font-bold text-[#171714]">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-5 pb-5 md:px-10 md:pb-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 rounded-[32px] bg-[#bfff20] p-6 text-[#171714] md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em]">Ready when you are</p>
            <p className="mt-2 max-w-xl text-2xl font-semibold tracking-[-0.04em]">
              Let’s build the system behind your next stage of growth.
            </p>
          </div>
          <a
            href="https://calendly.com/akshay-yonkomedia/30min"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#171714] px-6 py-4 text-sm font-semibold text-white"
          >
            Book a Free Strategy Call →
          </a>
        </div>
      </footer>
    </main>
  )
}
