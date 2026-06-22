import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Yonkomedia',
  description: 'Privacy Policy for Yonkomedia. Learn how we collect, use and protect your personal information.',
}

export default function PrivacyPolicy() {
  const updated = 'June 22, 2026'

  return (
    <div className="bg-dark min-h-screen text-white">
      {/* Header */}
      <div className="border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="font-display font-bold text-xl tracking-tight">
            yonko<span className="text-accent">media</span>
          </Link>
          <Link href="/" className="text-white/40 hover:text-white text-sm transition-colors duration-200">
            ← Back to home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="mb-12">
          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4">Legal</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-white/40 text-sm">Last updated: {updated}</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-10">

          <section>
            <h2 className="text-white font-bold text-xl mb-3">1. Introduction</h2>
            <p className="text-white/60 leading-relaxed">
              Yonkomedia ("we", "us", or "our") operates as a paid media and performance marketing agency. This Privacy Policy explains how we collect, use, disclose and protect your personal information when you interact with our website at yonkomedia.com, submit enquiries through our contact forms, or engage with our advertising on platforms such as Meta (Facebook and Instagram).
            </p>
            <p className="text-white/60 leading-relaxed mt-3">
              By submitting your information through any form on our website or through our Meta lead ads, you agree to the practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">2. Information We Collect</h2>
            <p className="text-white/60 leading-relaxed mb-3">We collect the following types of information:</p>
            <div className="space-y-4">
              <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-5">
                <h3 className="text-white font-semibold mb-2">Information you provide directly</h3>
                <ul className="text-white/60 space-y-1.5 text-sm leading-relaxed list-disc list-inside">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company name and website URL</li>
                  <li>Business revenue range and marketing budget</li>
                  <li>Growth challenges and business goals</li>
                  <li>Any other information you choose to share</li>
                </ul>
              </div>
              <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-5">
                <h3 className="text-white font-semibold mb-2">Information collected automatically</h3>
                <ul className="text-white/60 space-y-1.5 text-sm leading-relaxed list-disc list-inside">
                  <li>IP address and approximate location</li>
                  <li>Browser type and device information</li>
                  <li>Pages visited and time spent on site</li>
                  <li>Referring website or ad that brought you to our site</li>
                  <li>Clicks, scrolls and interactions on our website</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">3. How We Use Your Information</h2>
            <p className="text-white/60 leading-relaxed mb-3">We use the information we collect to:</p>
            <ul className="text-white/60 space-y-2 text-sm leading-relaxed list-disc list-inside">
              <li>Respond to your enquiries and schedule strategy calls</li>
              <li>Assess whether our services are a good fit for your business</li>
              <li>Send you relevant information about our services (you may opt out at any time)</li>
              <li>Improve our website, services and advertising</li>
              <li>Analyse how our marketing campaigns are performing</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="text-white/60 leading-relaxed mt-4">
              We do not sell your personal information to third parties. We do not use your data for any purpose other than those listed above without your consent.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">4. Meta Lead Ads</h2>
            <p className="text-white/60 leading-relaxed">
              We run lead generation campaigns on Meta platforms (Facebook and Instagram). When you submit your information through a Meta lead form, that information is collected by Meta and shared with us in accordance with Meta's data policies. By submitting a lead form on Meta, you agree to both Meta's Privacy Policy and this Privacy Policy.
            </p>
            <p className="text-white/60 leading-relaxed mt-3">
              We use this information solely to follow up on your enquiry. We will contact you via email or phone within a reasonable timeframe. You may opt out of further communications at any time by replying "unsubscribe" or by emailing us at <a href="mailto:hello@yonkomedia.com" className="text-accent hover:underline">hello@yonkomedia.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">5. Cookies and Tracking Technologies</h2>
            <p className="text-white/60 leading-relaxed mb-4">
              Our website uses the following tracking tools:
            </p>
            <div className="space-y-3">
              {[
                { name: 'Google Analytics 4', desc: 'Tracks website traffic, user behaviour and campaign performance. Data is anonymised and aggregated. You can opt out via Google\'s opt-out browser add-on.' },
                { name: 'Microsoft Clarity', desc: 'Records session replays and heatmaps to help us understand how visitors use our site. No personally identifiable information is stored.' },
                { name: 'Meta Pixel', desc: 'Tracks conversions from Meta ads and helps us build targeted audiences. If you visit our site after seeing a Meta ad, this pixel may link your visit to that ad.' },
                { name: 'Vercel Analytics', desc: 'Measures website performance and core web vitals. Fully privacy-friendly with no personal data collection.' },
              ].map(({ name, desc }) => (
                <div key={name} className="bg-white/[0.03] border border-white/8 rounded-xl p-4">
                  <p className="text-white font-semibold text-sm mb-1">{name}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">6. Data Sharing</h2>
            <p className="text-white/60 leading-relaxed mb-3">
              We share your information only in the following limited circumstances:
            </p>
            <ul className="text-white/60 space-y-2 text-sm leading-relaxed list-disc list-inside">
              <li><strong className="text-white/80">Google Sheets:</strong> Lead form submissions are stored securely in Google Sheets for internal CRM purposes.</li>
              <li><strong className="text-white/80">Calendly:</strong> If you book a call, your name and email are shared with Calendly to facilitate scheduling.</li>
              <li><strong className="text-white/80">Legal requirements:</strong> We may disclose information if required by law or to protect our legal rights.</li>
            </ul>
            <p className="text-white/60 leading-relaxed mt-4">
              We do not share, sell, rent or trade your personal information with third parties for their marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">7. Data Retention</h2>
            <p className="text-white/60 leading-relaxed">
              We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy, or as required by applicable law. Lead enquiry data is typically retained for up to 2 years. You may request deletion of your data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">8. Your Rights</h2>
            <p className="text-white/60 leading-relaxed mb-3">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="text-white/60 space-y-2 text-sm leading-relaxed list-disc list-inside">
              <li><strong className="text-white/80">Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong className="text-white/80">Correction:</strong> Request that we correct inaccurate or incomplete data.</li>
              <li><strong className="text-white/80">Deletion:</strong> Request that we delete your personal data.</li>
              <li><strong className="text-white/80">Opt-out:</strong> Opt out of marketing communications at any time.</li>
              <li><strong className="text-white/80">Data portability:</strong> Request your data in a portable format.</li>
            </ul>
            <p className="text-white/60 leading-relaxed mt-4">
              To exercise any of these rights, email us at <a href="mailto:hello@yonkomedia.com" className="text-accent hover:underline">hello@yonkomedia.com</a>. We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">9. Security</h2>
            <p className="text-white/60 leading-relaxed">
              We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, loss or disclosure. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">10. Third-Party Links</h2>
            <p className="text-white/60 leading-relaxed">
              Our website may contain links to third-party websites (such as LinkedIn, Instagram or Calendly). We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies separately.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">11. Children's Privacy</h2>
            <p className="text-white/60 leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">12. Changes to This Policy</h2>
            <p className="text-white/60 leading-relaxed">
              We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page. We encourage you to review this policy periodically. Continued use of our website or services after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">13. Contact Us</h2>
            <p className="text-white/60 leading-relaxed">
              If you have any questions, concerns or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="mt-4 bg-white/[0.03] border border-white/8 rounded-2xl p-5 space-y-2">
              <p className="text-white font-semibold">Yonkomedia</p>
              <p className="text-white/60 text-sm">Email: <a href="mailto:hello@yonkomedia.com" className="text-accent hover:underline">hello@yonkomedia.com</a></p>
              <p className="text-white/60 text-sm">Website: <a href="https://yonkomedia.com" className="text-accent hover:underline">yonkomedia.com</a></p>
            </div>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/25 text-xs">© {new Date().getFullYear()} Yonkomedia. All rights reserved.</p>
          <Link href="/" className="text-accent text-sm hover:underline">← Back to home</Link>
        </div>
      </div>
    </div>
  )
}
