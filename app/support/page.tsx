import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support',
  description: 'Get help with Corex IA products. Contact our support team.',
}

export default function SupportPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#6581FF] mb-3">Help Center</p>
        <h1 className="text-4xl font-bold text-[#0F1117] mb-4">Support</h1>
        <p className="text-lg text-[#6B6B68]">
          We&apos;re here to help. Reach out to our team any time.
        </p>
      </div>

      {/* Contact cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
        <div className="bg-white border border-[#E8E4DC] rounded-2xl p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#9A9A96] mb-2">Email</p>
          <a
            href="mailto:projects@corex-ia.com"
            className="font-semibold text-[#6581FF] hover:underline break-all"
          >
            projects@corex-ia.com
          </a>
          <p className="text-sm text-[#6B6B68] mt-2">We respond within 1 business day.</p>
        </div>

        <div className="bg-white border border-[#E8E4DC] rounded-2xl p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#9A9A96] mb-2">Phone</p>
          <div className="space-y-1">
            <a href="tel:+50237568031" className="block font-semibold text-[#0F1117] hover:text-[#6581FF] transition-colors">
              +502 3756 8031
            </a>
            <a href="tel:+50250169263" className="block font-semibold text-[#0F1117] hover:text-[#6581FF] transition-colors">
              +502 5016 9263
            </a>
          </div>
          <p className="text-sm text-[#6B6B68] mt-2">Mon–Fri, 9 am – 6 pm CT.</p>
        </div>

        <div className="bg-white border border-[#E8E4DC] rounded-2xl p-6 sm:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#9A9A96] mb-2">Office Address</p>
          <address className="not-italic font-medium text-[#0F1117]">
            99 Oatgrass Dr, Grayson, GA 30017<br />
            United States
          </address>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold text-[#0F1117] mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How do I reset my password?',
              a: 'Go to app.corex-ia.com, click "Forgot password" on the login screen, and follow the instructions sent to your email.',
            },
            {
              q: 'How do I add a new team member?',
              a: 'Inside CorexOS, go to Settings → Team → Invite Member and enter their email address. They will receive an invitation to join your workspace.',
            },
            {
              q: 'Can I cancel my subscription at any time?',
              a: 'Yes. You can cancel at any time from Settings → Billing. Your access continues until the end of your current billing period.',
            },
            {
              q: 'How do I request deletion of my data?',
              a: 'Visit our Data Deletion page and submit a request. We will process it within 30 days.',
            },
            {
              q: 'Is my data secure?',
              a: 'Yes. All data is encrypted in transit (TLS 1.2+) and at rest. We use Supabase PostgreSQL with row-level security and are PCI DSS Level 1 compliant through our payment processor. See our Security page for full details.',
            },
            {
              q: 'I found a security vulnerability. How do I report it?',
              a: 'Please email security@corex-ia.com with details. Do not disclose it publicly until we have had a chance to review and address it.',
            },
          ].map(({ q, a }) => (
            <details
              key={q}
              className="bg-white border border-[#E8E4DC] rounded-xl group"
            >
              <summary className="cursor-pointer px-5 py-4 font-medium text-[#0F1117] list-none flex justify-between items-center">
                {q}
                <span className="text-[#9A9A96] text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="px-5 pb-4 text-sm text-[#6B6B68] leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>

      <div className="mt-12 p-5 bg-indigo-50 border border-indigo-100 rounded-2xl text-sm text-[#6B6B68]">
        <strong className="text-[#0F1117]">Account deletion from the app:</strong> To delete your account directly from within a Corex app, go to Settings → Account → Delete Account. This permanently removes all your personal data.
      </div>
    </main>
  )
}
