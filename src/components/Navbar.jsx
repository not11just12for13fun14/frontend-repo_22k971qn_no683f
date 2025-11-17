import { useState } from 'react'
import { Menu, X, Building2 } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 backdrop-blur-md bg-slate-900/50 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300">
                <Building2 className="h-5 w-5" />
              </div>
              <span className="text-white font-semibold tracking-tight">SkyLuxe</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-slate-300 hover:text-white transition-colors text-sm">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 transition-colors px-4 py-2 rounded-xl">
                Book a demo
              </a>
            </nav>

            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-slate-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="block text-white bg-blue-600 hover:bg-blue-500 transition-colors px-4 py-2 rounded-xl text-center">
                Book a demo
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
