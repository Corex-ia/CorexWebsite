import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Corex IA Terms of Service — your agreement with Corex IA, LLC.',
}

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-[#0F1117] mb-4">Terms of Service</h1>
        <p className="text-sm text-[#9A9A96]">Corex IA, LLC · Last updated: October 27, 2026</p>
      </div>

      <div className="space-y-10 text-sm text-[#6B6B68] leading-relaxed">

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">1. Acceptance of Terms</h2>
          <p>By accessing or using any product or service provided by Corex IA, LLC (&quot;Corex IA&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree, do not use our Services.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">2. Description of Services</h2>
          <p>Corex IA provides software-as-a-service (SaaS) platforms including CorexOS (field service management), CorexChurch (church management), CorexPay (business payments), and CorexHealth (health and wellness practice management), collectively referred to as the &quot;Services&quot;.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">3. Accounts</h2>
          <p>You must create an account to use the Services. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You must notify us immediately at <a href="mailto:projects@corex-ia.com" className="text-[#6581FF] hover:underline">projects@corex-ia.com</a> of any unauthorized use of your account.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">4. Tenant Accounts and Operators</h2>
          <p>Corex IA is a multi-tenant platform. If you are an operator (&quot;Tenant&quot;), you are responsible for the use of the Services by users within your workspace. You agree to ensure your users comply with these Terms and our Acceptable Use Policy.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">5. Intellectual Property</h2>
          <p>All intellectual property rights in the Services belong to Corex IA or its licensors. You are granted a limited, non-exclusive, non-transferable license to use the Services for your internal business purposes. You may not copy, modify, distribute, sell, or lease any part of the Services.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">6. Your Content</h2>
          <p>You retain ownership of all data and content you upload to the Services (&quot;Your Content&quot;). By using the Services, you grant Corex IA a limited license to process Your Content solely to provide the Services. You are responsible for ensuring Your Content does not violate any law or third-party rights.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">7. Privacy</h2>
          <p>Your use of the Services is governed by our <a href="/privacy-policy" className="text-[#6581FF] hover:underline">Privacy Policy</a>, incorporated into these Terms by reference.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">8. Acceptable Use</h2>
          <p>You agree to use the Services only in accordance with our <a href="/acceptable-use" className="text-[#6581FF] hover:underline">Acceptable Use Policy</a>.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">9. Disclaimers</h2>
          <p>The Services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, express or implied, including but not limited to merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the Services will be uninterrupted, error-free, or secure.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">10. Limitation of Liability</h2>
          <p>To the fullest extent permitted by applicable law, Corex IA will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, data, goodwill, or other intangible losses, arising out of or related to your use of the Services.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">11. Eligibility and Age Requirement</h2>
          <p>You must be at least 18 years old to create an account and use the Services. By using the Services, you represent that you are at least 18 years of age. If you are between 13 and 17 years old, you may only use the Services under the supervision and with the consent of a parent or legal guardian who agrees to these Terms on your behalf.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">12. Subscriptions and Billing</h2>
          <p className="mb-2">Some Services are offered on a subscription basis. By subscribing, you agree to pay the applicable fees as described at the time of purchase.</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong className="text-[#0F1117]">Billing cycle:</strong> Subscriptions are billed monthly or annually, depending on the plan you select.</li>
            <li><strong className="text-[#0F1117]">Auto-renewal:</strong> Subscriptions automatically renew unless cancelled before the renewal date.</li>
            <li><strong className="text-[#0F1117]">Cancellation:</strong> You may cancel at any time from Settings → Billing. Cancellation takes effect at the end of the current billing period. No partial refunds are issued for unused time in a paid period.</li>
            <li><strong className="text-[#0F1117]">Refunds:</strong> We offer refunds within 14 days of initial purchase if you are not satisfied. Contact <a href="mailto:projects@corex-ia.com" className="text-[#6581FF] hover:underline">projects@corex-ia.com</a> to request a refund.</li>
            <li><strong className="text-[#0F1117]">Price changes:</strong> We may change subscription prices with 30 days&apos; notice. Your continued use after the effective date constitutes acceptance of the new price.</li>
            <li><strong className="text-[#0F1117]">Taxes:</strong> Prices shown do not include applicable taxes. You are responsible for any taxes imposed on your subscription.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">13. AI-Generated Content Disclaimer</h2>
          <p>Some features of our Services use artificial intelligence to generate content, summaries, estimates, or recommendations (&quot;AI Content&quot;). AI Content is generated automatically and may be inaccurate, incomplete, or inappropriate for your specific circumstances. You are solely responsible for reviewing, verifying, and using any AI Content before acting on it. AI Content does not constitute professional advice of any kind, including legal, financial, medical, or business advice. Corex IA disclaims all liability for decisions made based on AI Content.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">14. Apple App Store Additional Terms</h2>
          <p className="mb-2">If you download a Corex IA app from the Apple App Store, the following additional terms apply:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>These Terms are between you and Corex IA only, not with Apple, Inc. (&quot;Apple&quot;). Apple is not responsible for the app or its content.</li>
            <li>The license to use the app is limited to a non-transferable license to use the app on any Apple-branded product that you own or control, subject to the Usage Rules in the App Store Terms of Service.</li>
            <li>Apple has no obligation to provide maintenance or support services for the app.</li>
            <li>In the event of any third-party claim that the app or your possession and use of it infringes a third party&apos;s intellectual property rights, Apple will not be responsible for the investigation, defense, settlement or discharge of such claim.</li>
            <li>Apple and Apple&apos;s subsidiaries are third-party beneficiaries of these Terms, and upon your acceptance, Apple will have the right to enforce these Terms against you as a third-party beneficiary.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">15. Termination</h2>
          <p>We may terminate or suspend your account at any time for violation of these Terms, with or without notice. You may terminate your account at any time by deleting it from within the app or contacting us. Upon termination, your right to use the Services immediately ceases.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">16. Governing Law and Jurisdiction</h2>
          <p>These Terms are governed by and construed in accordance with the laws of the State of Georgia, United States of America, without regard to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of the state and federal courts located in Gwinnett County, Georgia for the resolution of any disputes arising under these Terms.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">17. Dispute Resolution</h2>
          <p>Before filing a formal legal claim, you agree to contact us at <a href="mailto:legal@corex-ia.com" className="text-[#6581FF] hover:underline">legal@corex-ia.com</a> and attempt to resolve the dispute informally for at least 30 days. If the dispute is not resolved informally, it shall be resolved by binding arbitration under the rules of the American Arbitration Association, except that either party may seek injunctive relief in court for intellectual property disputes.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">18. Changes to Terms</h2>
          <p>We may update these Terms at any time. We will notify you of material changes by posting the updated Terms on this page with a new effective date. Your continued use of the Services after the effective date constitutes acceptance of the updated Terms.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#0F1117] mb-3">19. Contact</h2>
          <address className="not-italic space-y-1">
            <p><strong className="text-[#0F1117]">Corex IA, LLC</strong></p>
            <p>Georgia, United States</p>
            <p>Email: <a href="mailto:legal@corex-ia.com" className="text-[#6581FF] hover:underline">legal@corex-ia.com</a></p>
          </address>
        </section>

      </div>
    </main>
  )
}
