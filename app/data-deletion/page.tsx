import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Deletion Request',
  description: 'Request deletion of your personal data from Corex IA.',
}

export default function DataDeletionPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#6581FF] mb-3">Your Rights</p>
        <h1 className="text-4xl font-bold text-[#0F1117] mb-4">Data Deletion Request</h1>
        <p className="text-lg text-[#6B6B68]">
          You have the right to request deletion of your personal data. We will process your request within 30 days.
        </p>
      </div>

      <div className="bg-white border border-[#E8E4DC] rounded-2xl p-8 mb-8">
        <h2 className="text-lg font-bold text-[#0F1117] mb-4">Submit a deletion request</h2>
        <p className="text-sm text-[#6B6B68] mb-6 leading-relaxed">
          Send an email to <a href="mailto:privacy@corex-ia.com" className="text-[#6581FF] hover:underline font-medium">privacy@corex-ia.com</a> with the subject line <strong>&quot;Data Deletion Request&quot;</strong> and include:
        </p>
        <ol className="text-sm text-[#6B6B68] space-y-2 list-decimal list-inside leading-relaxed">
          <li>Your full name</li>
          <li>The email address associated with your account</li>
          <li>The Corex IA product(s) you are requesting deletion from (e.g., CorexOS, CorexChurch)</li>
          <li>Whether you want a partial deletion (specific data) or full account deletion</li>
        </ol>
      </div>

      <div className="bg-white border border-[#E8E4DC] rounded-2xl p-8 mb-8">
        <h2 className="text-lg font-bold text-[#0F1117] mb-4">Delete from within the app</h2>
        <p className="text-sm text-[#6B6B68] leading-relaxed">
          You can also delete your account directly from within any Corex IA app:
        </p>
        <div className="mt-4 bg-[#F8F6F2] rounded-xl p-4 text-sm font-mono text-[#0F1117]">
          Settings → Account → Delete Account
        </div>
        <p className="text-sm text-[#6B6B68] mt-3">
          This action is permanent and cannot be undone. All your personal data will be removed within 30 days.
        </p>
      </div>

      <div className="space-y-4 text-sm text-[#6B6B68]">
        <h2 className="text-lg font-bold text-[#0F1117]">What gets deleted</h2>
        <ul className="list-disc list-inside space-y-1 leading-relaxed">
          <li>Your account credentials and profile information</li>
          <li>Contact details and personal identifiers</li>
          <li>Usage history and activity logs associated with your account</li>
          <li>Any content you created that is not shared with others</li>
        </ul>
        <p className="leading-relaxed">
          Some data may be retained for legal compliance (e.g., financial records required by tax law), fraud prevention, or at the request of law enforcement. We will inform you of any data we are unable to delete and the reason.
        </p>
        <p className="leading-relaxed">
          For questions, contact us at <a href="mailto:privacy@corex-ia.com" className="text-[#6581FF] hover:underline">privacy@corex-ia.com</a>.
        </p>
      </div>
    </main>
  )
}
