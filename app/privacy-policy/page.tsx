import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Corex IA Privacy Policy — how we collect, use, and protect your data.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-[#0F1117] mb-4">Privacy Policy</h1>
        <p className="text-sm text-[#9A9A96]">Corex IA, LLC · Last updated: October 27, 2026</p>
      </div>

      <div className="space-y-10 text-sm text-[#6B6B68] leading-relaxed">

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">1. Introduction</h2>
          <p>Corex IA, LLC (&quot;Corex IA&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates software platforms including CorexOS, CorexChurch, CorexPay, and CorexHealth. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our websites, web applications, and mobile applications (collectively, the &quot;Services&quot;).</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">2. Information We Collect</h2>
          <p className="mb-2"><strong className="text-[#0F1117]">Account information:</strong> Name, email address, phone number, company name, and password when you create an account.</p>
          <p className="mb-2"><strong className="text-[#0F1117]">Business data:</strong> Information you enter into the Services, including customer records, work orders, invoices, employee records, and financial data.</p>
          <p className="mb-2"><strong className="text-[#0F1117]">Payment information:</strong> Payment card and bank account details, processed by our PCI-compliant payment processors (Stripe and Plaid). We do not store raw card numbers.</p>
          <p className="mb-2"><strong className="text-[#0F1117]">Usage data:</strong> Log files, IP address, browser type, pages visited, and feature usage for analytics and troubleshooting.</p>
          <p className="mb-2"><strong className="text-[#0F1117]">Communications:</strong> Messages you send to our support team.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>To provide and maintain the Services</li>
            <li>To process transactions and send related notifications</li>
            <li>To send technical and account-related communications</li>
            <li>To improve the Services through analytics</li>
            <li>To comply with legal obligations</li>
            <li>To detect, prevent, and address fraud or security incidents</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">4. Sharing of Information</h2>
          <p className="mb-2">We do not sell your personal data. We share your information only with:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong className="text-[#0F1117]">Service providers:</strong> Supabase (database), Google Cloud (infrastructure), Firebase (authentication and hosting), Vercel (frontend hosting), Stripe (payments), Plaid (bank linking), SendGrid / Resend (email).</li>
            <li><strong className="text-[#0F1117]">AI providers:</strong> When you use AI-powered features, anonymized or pseudonymized data may be processed by Anthropic and/or OpenAI. We will request your explicit consent before enabling AI features.</li>
            <li><strong className="text-[#0F1117]">Legal requirements:</strong> When required by law, court order, or governmental authority.</li>
            <li><strong className="text-[#0F1117]">Business transfers:</strong> In connection with a merger, acquisition, or sale of assets, with advance notice to you.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">5. Data Retention</h2>
          <p>We retain your personal information for as long as your account is active or as needed to provide the Services. You may request deletion of your data at any time. See Section 10 for instructions.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">6. Security</h2>
          <p>We use industry-standard security measures including TLS encryption in transit, AES-256 encryption at rest, row-level security at the database layer, and access controls. See our <a href="/security" className="text-[#6581FF] hover:underline">Security page</a> for full details.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">7. Cookies</h2>
          <p>We use essential cookies to maintain your session and preferences. We use analytics cookies (e.g., Google Analytics) to understand usage patterns. You may disable non-essential cookies in your browser settings.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">8. Children&apos;s Privacy</h2>
          <p>Our Services are not directed to children under 13 (or 16 in the EU). We do not knowingly collect personal data from children. If you believe a child has provided us personal information, contact us at privacy@corex-ia.com and we will delete it.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">9. Your Rights</h2>
          <p className="mb-2">Depending on your location, you may have the right to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Access the personal data we hold about you</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to or restrict processing of your data</li>
            <li>Data portability (receive your data in a machine-readable format)</li>
            <li>Withdraw consent at any time, where processing is based on consent</li>
          </ul>
          <p className="mt-2">To exercise these rights, email <a href="mailto:privacy@corex-ia.com" className="text-[#6581FF] hover:underline">privacy@corex-ia.com</a>.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">10. Data Deletion</h2>
          <p>To request deletion of your personal data, visit our <a href="/data-deletion" className="text-[#6581FF] hover:underline">Data Deletion page</a> or delete your account from within any Corex IA app at <strong>Settings → Account → Delete Account</strong>. We will process your request within 30 days.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">11. Special Categories of Data</h2>
          <p className="mb-2"><strong className="text-[#0F1117]">CorexChurch:</strong> If you use CorexChurch, we may process information about religious affiliation and giving. This data is treated as sensitive and subject to heightened protections. We will request explicit consent before processing such data and never sell it to third parties. GDPR Article 9 applies to EU residents.</p>
          <p><strong className="text-[#0F1117]">CorexHealth:</strong> If you use CorexHealth, we may process health-related information. This data is treated with the highest level of protection. We comply with applicable health data regulations including HIPAA where applicable.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">12. California Privacy Rights (CCPA)</h2>
          <p>California residents have the right to know what personal information we collect, request deletion, and opt out of the sale of personal information. We do not sell personal information. To exercise your rights, contact <a href="mailto:privacy@corex-ia.com" className="text-[#6581FF] hover:underline">privacy@corex-ia.com</a>.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">13. International Transfers</h2>
          <p>Your data may be processed in the United States and other countries. By using our Services, you consent to such transfers. We take appropriate safeguards to protect your data in accordance with applicable law.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">14. Third-Party Links</h2>
          <p>Our Services may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their privacy policies.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">15. Changes to This Policy</h2>
          <p>We may update this policy. We will notify you of material changes by posting the new policy on this page and, where appropriate, by email. Continued use of the Services after changes constitutes acceptance.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">16. Contact</h2>
          <address className="not-italic space-y-1">
            <p><strong className="text-[#0F1117]">Corex IA, LLC</strong></p>
            <p>99 Oatgrass Dr, Grayson, GA 30017, United States</p>
            <p>Email: <a href="mailto:privacy@corex-ia.com" className="text-[#6581FF] hover:underline">privacy@corex-ia.com</a></p>
          </address>
        </section>

        {/* Section 20 — Mobile Applications (Apple requirement) */}
        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">20. Mobile Applications</h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-[#0F1117] mb-1">20(a). Device Permissions</h3>
              <p>Our mobile apps may request the following device permissions:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li><strong className="text-[#0F1117]">Camera:</strong> To capture photos for work orders, inspections, and document uploads. We do not retain camera access when the app is in the background.</li>
                <li><strong className="text-[#0F1117]">Push Notifications:</strong> To send you alerts about work orders, invoices, and account activity. You can disable notifications at any time in your device settings.</li>
                <li><strong className="text-[#0F1117]">Location:</strong> When enabled, to attach location data to field reports and work orders. Location is never collected in the background without explicit consent.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#0F1117] mb-1">20(b). Account Deletion from Mobile App</h3>
              <p>You can delete your account directly from any Corex IA mobile app by navigating to <strong>Settings → Account → Delete Account</strong>. This permanently removes your personal data within 30 days. Alternatively, submit a request at <a href="/data-deletion" className="text-[#6581FF] hover:underline">corex-ia.com/data-deletion</a>.</p>
            </div>

            <div>
              <h3 className="font-semibold text-[#0F1117] mb-1">20(c). AI Features in Mobile Apps</h3>
              <p>When you use AI-powered features in a Corex IA mobile app (such as intelligent work order summaries, automated estimates, or AI-generated reports), text or data you submit may be processed by third-party AI providers including <strong>Anthropic</strong> (Claude) and <strong>OpenAI</strong> (GPT). You will see a consent screen before any AI feature is activated for the first time. You may disable AI features at any time in Settings. We do not send personally identifiable health, financial, or religious data to AI providers without explicit consent.</p>
            </div>

            <div>
              <h3 className="font-semibold text-[#0F1117] mb-1">20(d). Analytics & Crash Reporting</h3>
              <p>Our mobile apps use crash reporting and analytics tools to improve stability and performance. These tools collect anonymized device information (OS version, device model, crash logs) and do not include personally identifiable information.</p>
            </div>

            <div>
              <h3 className="font-semibold text-[#0F1117] mb-1">20(e). App Store</h3>
              <p>Our mobile apps are distributed through the Apple App Store. Apple&apos;s privacy practices govern information collected through the App Store itself. Refer to <a href="https://www.apple.com/legal/privacy/" className="text-[#6581FF] hover:underline" target="_blank" rel="noopener noreferrer">Apple&apos;s Privacy Policy</a>.</p>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}
