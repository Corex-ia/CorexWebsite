import Link from 'next/link'
import type { Metadata } from 'next'
import { ClipboardList, BookOpen, CreditCard, Stethoscope, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Corex IA — Intelligent Software for Growing Businesses',
  description: 'Corex IA builds intelligent, modular software for field service, churches, payments, and healthcare.',
}

const products = [
  {
    name: 'CorexOS',
    tagline: 'Field Service Management',
    description: 'Work orders, CRM, estimates, invoicing, payroll, fleet, and more — all in one platform built for service businesses.',
    url: 'https://app.corex-ia.com',
    Icon: ClipboardList,
    iconBg: 'bg-[#EEF1FF]',
    iconColor: 'text-[#6581FF]',
    accent: 'group-hover:border-[#6581FF]',
  },
  {
    name: 'CorexChurch',
    tagline: 'Church Management',
    description: 'Member management, giving, events, small groups, and communications for modern congregations.',
    url: null,
    Icon: BookOpen,
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-500',
    accent: 'group-hover:border-purple-300',
  },
  {
    name: 'CorexPay',
    tagline: 'Business Payments',
    description: 'Invoicing, card processing, ACH transfers, and financial reporting — payments made simple.',
    url: null,
    Icon: CreditCard,
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    accent: 'group-hover:border-emerald-300',
  },
  {
    name: 'CorexHealth',
    tagline: 'Health & Wellness',
    description: 'Practice management software designed for clinics, wellness centers, and independent practitioners.',
    url: null,
    Icon: Stethoscope,
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-500',
    accent: 'group-hover:border-sky-300',
  },
]

export default function Home() {
  return (
    <main>
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#E8E4DC]">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight">Corex IA</span>
          <div className="flex items-center gap-6">
            <Link href="/support" className="text-sm text-[#6B6B68] hover:text-[#0F1117] transition-colors hidden sm:block">
              Support
            </Link>
            <a
              href="https://app.corex-ia.com"
              className="text-sm font-medium bg-[#6581FF] text-white px-4 py-1.5 rounded-full hover:bg-[#4F6AE8] transition-colors"
            >
              Sign in
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-block text-xs font-semibold uppercase tracking-widest text-[#6581FF] bg-indigo-50 px-3 py-1 rounded-full mb-6">
          Intelligent Software
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#0F1117] mb-6 max-w-3xl mx-auto">
          Software that grows with your business
        </h1>
        <p className="text-lg text-[#6B6B68] max-w-xl mx-auto mb-10 leading-relaxed">
          Corex IA builds modular, AI-powered platforms for field service, churches, payments, and healthcare.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="https://app.corex-ia.com"
            className="bg-[#6581FF] text-white px-6 py-3 rounded-full font-medium hover:bg-[#4F6AE8] transition-colors"
          >
            Get started
          </a>
          <Link
            href="/support"
            className="border border-[#E8E4DC] text-[#0F1117] px-6 py-3 rounded-full font-medium hover:border-[#6581FF] transition-colors"
          >
            Contact us
          </Link>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#9A9A96] text-center mb-10">Our Products</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map(p => (
            <div key={p.name} className={`group bg-white rounded-2xl border border-[#E8E4DC] p-6 flex flex-col transition-colors ${p.accent}`}>
              <div className={`w-10 h-10 rounded-xl ${p.iconBg} flex items-center justify-center mb-5`}>
                <p.Icon className={`w-5 h-5 ${p.iconColor}`} strokeWidth={1.75} />
              </div>
              <h2 className="font-semibold text-[#0F1117] mb-1">{p.name}</h2>
              <p className="text-xs font-medium text-[#9A9A96] uppercase tracking-wider mb-3">{p.tagline}</p>
              <p className="text-sm text-[#6B6B68] leading-relaxed mb-5 flex-1">{p.description}</p>
              {p.url ? (
                <a href={p.url} className="inline-flex items-center gap-1 text-xs font-semibold text-[#6581FF] hover:gap-2 transition-all">
                  Open app <ArrowRight className="w-3 h-3" />
                </a>
              ) : (
                <span className="text-xs font-medium text-[#C4C4BF] tracking-wide">Coming soon</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F1117] text-white mx-6 rounded-3xl mb-20 max-w-6xl lg:mx-auto px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to streamline your operations?</h2>
        <p className="text-[#9A9A96] mb-8 max-w-md mx-auto">
          Join businesses across Guatemala and the United States using Corex IA.
        </p>
        <a
          href="https://app.corex-ia.com"
          className="inline-block bg-[#6581FF] text-white px-8 py-3 rounded-full font-medium hover:bg-[#4F6AE8] transition-colors"
        >
          Get started free
        </a>
      </section>
    </main>
  )
}
