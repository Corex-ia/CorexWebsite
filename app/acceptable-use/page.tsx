import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Acceptable Use Policy',
  description: 'Corex IA Acceptable Use Policy — rules for using our platform.',
}

export default function AcceptableUsePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-[#0F1117] mb-4">Acceptable Use Policy</h1>
        <p className="text-sm text-[#9A9A96]">Effective: October 27, 2026</p>
      </div>
      <div className="prose prose-sm max-w-none text-[#6B6B68] space-y-6 leading-relaxed">
        <p>This Acceptable Use Policy (&quot;AUP&quot;) governs your use of any Corex IA, LLC (&quot;Corex IA&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) products and services.</p>
        <h2 className="text-lg font-bold text-[#0F1117]">1. Prohibited Uses</h2>
        <p>You may not use Corex IA services to:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Violate any applicable law or regulation</li>
          <li>Transmit spam, unsolicited communications, or malware</li>
          <li>Infringe intellectual property rights</li>
          <li>Harass, threaten, or harm other users</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Reverse-engineer or disassemble our software</li>
          <li>Use the service for cryptocurrency mining</li>
          <li>Impersonate another person or entity</li>
        </ul>
        <h2 className="text-lg font-bold text-[#0F1117]">2. Enforcement</h2>
        <p>We reserve the right to suspend or terminate accounts that violate this policy without prior notice. We may also report violations to law enforcement authorities where required.</p>
        <h2 className="text-lg font-bold text-[#0F1117]">3. Reporting Violations</h2>
        <p>To report a violation, contact <a href="mailto:projects@corex-ia.com" className="text-[#6581FF] hover:underline">projects@corex-ia.com</a>.</p>
        <h2 className="text-lg font-bold text-[#0F1117]">4. Changes</h2>
        <p>We may update this AUP at any time. Continued use of our services after changes constitutes acceptance of the updated policy.</p>
      </div>
    </main>
  )
}
