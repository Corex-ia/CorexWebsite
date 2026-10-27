import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: { default: 'Corex IA', template: '%s | Corex IA' },
  description: 'Intelligent software for growing businesses.',
  metadataBase: new URL('https://corex-ia.com'),
}

const footerLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Data Deletion', href: '/data-deletion' },
  { label: 'Support', href: '/support' },
  { label: 'Security', href: '/security' },
  { label: 'Acceptable Use', href: '/acceptable-use' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-[#F8F6F2] text-[#0F1117] antialiased">
        {children}
        <footer className="border-t border-[#E8E4DC] bg-white mt-20">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl font-bold tracking-tight text-[#0F1117]">Corex IA</span>
                </div>
                <p className="text-sm text-[#6B6B68] leading-relaxed">
                  Intelligent software for growing businesses.<br />
                  Guatemala & United States.
                </p>
              </div>

              {/* Contact */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#9A9A96] mb-3">Contact</p>
                <div className="text-sm text-[#6B6B68] space-y-1">
                  <p>United States &amp; Guatemala</p>
                  <p className="mt-2">
                    <a href="mailto:projects@corex-ia.com" className="hover:text-[#0F1117] transition-colors">projects@corex-ia.com</a>
                  </p>
                </div>
              </div>

              {/* Legal links */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#9A9A96] mb-3">Legal</p>
                <nav className="flex flex-col gap-2">
                  {footerLinks.map(link => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm text-[#6B6B68] hover:text-[#0F1117] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-[#E8E4DC] text-sm text-[#9A9A96]">
              © {new Date().getFullYear()} Corex IA, LLC. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
