import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security',
  description: 'How Corex IA protects your data — encryption, access controls, compliance, and vulnerability reporting.',
}

export default function SecurityPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#6581FF] mb-3">Trust & Safety</p>
        <h1 className="text-4xl font-bold text-[#0F1117] mb-4">Security</h1>
        <p className="text-lg text-[#6B6B68]">
          We take the security of your data seriously. Here is how we protect it.
        </p>
      </div>

      <div className="space-y-10 text-[#0F1117]">

        <section>
          <h2 className="text-xl font-bold mb-3">Data Encryption</h2>
          <ul className="text-[#6B6B68] text-sm space-y-2 leading-relaxed list-disc list-inside">
            <li>All data transmitted between your device and our servers is encrypted using TLS 1.2 or higher.</li>
            <li>Data at rest is encrypted using AES-256 on our cloud infrastructure (Supabase / Google Cloud).</li>
            <li>Database connections use SSL-enforced certificates.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">Access Controls</h2>
          <ul className="text-[#6B6B68] text-sm space-y-2 leading-relaxed list-disc list-inside">
            <li>Row-Level Security (RLS) enforced at the database layer ensures tenants can only access their own data.</li>
            <li>Authentication is handled by Firebase Authentication with multi-factor authentication (MFA) support.</li>
            <li>Role-based access control (RBAC) restricts features to authorized roles within each tenant workspace.</li>
            <li>Administrative access to production systems requires multi-factor authentication and is logged.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">Infrastructure</h2>
          <ul className="text-[#6B6B68] text-sm space-y-2 leading-relaxed list-disc list-inside">
            <li>Hosted on Google Cloud Platform (Cloud Run) and Supabase, both SOC 2 Type II certified.</li>
            <li>Frontend deployed via Vercel with automatic HTTPS and edge security.</li>
            <li>Database backups are taken daily and retained for 30 days.</li>
            <li>Authorized network access to production databases is restricted by IP allowlist.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">Payment Security</h2>
          <ul className="text-[#6B6B68] text-sm space-y-2 leading-relaxed list-disc list-inside">
            <li>Payment processing is handled by <strong>Stripe</strong>, a PCI DSS Level 1 certified provider.</li>
            <li>Bank account linking uses <strong>Plaid</strong>, which employs bank-grade encryption and OAuth.</li>
            <li>Corex IA never stores raw card numbers or bank credentials on our servers.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">AI & Third-Party Services</h2>
          <p className="text-[#6B6B68] text-sm leading-relaxed">
            Some Corex IA products include AI-powered features. When you use these features, anonymized or pseudonymized data may be processed by third-party AI providers including Anthropic and OpenAI. We do not send personally identifiable information to AI providers without your explicit consent. You will be asked to consent to AI features before first use.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">Incident Response</h2>
          <p className="text-[#6B6B68] text-sm leading-relaxed">
            In the event of a data breach that affects your personal information, we will notify affected users and relevant authorities within 72 hours of discovery, as required by applicable regulations. Notifications will be sent to the email address on your account.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">Vulnerability Reporting</h2>
          <p className="text-[#6B6B68] text-sm leading-relaxed mb-3">
            If you discover a security vulnerability in any Corex IA product, please report it responsibly:
          </p>
          <div className="bg-white border border-[#E8E4DC] rounded-xl p-5 text-sm">
            <p className="font-medium mb-1">Email: <a href="mailto:security@corex-ia.com" className="text-[#6581FF] hover:underline">security@corex-ia.com</a></p>
            <p className="text-[#6B6B68]">Please include a description of the vulnerability, steps to reproduce it, and any proof-of-concept code. Do not publicly disclose the issue until we have confirmed a fix.</p>
          </div>
          <p className="text-[#6B6B68] text-sm mt-3">We aim to acknowledge reports within 48 hours and resolve critical issues within 7 days.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">Contact</h2>
          <p className="text-[#6B6B68] text-sm">
            For security questions or concerns: <a href="mailto:security@corex-ia.com" className="text-[#6581FF] hover:underline">security@corex-ia.com</a>
          </p>
          <p className="text-[#6B6B68] text-sm mt-1">
            Last updated: October 27, 2026
          </p>
        </section>

      </div>
    </main>
  )
}
