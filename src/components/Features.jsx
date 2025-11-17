import { Home, Users, Map, BadgeCheck } from 'lucide-react'

const features = [
  {
    icon: Home,
    title: 'Beautiful property pages',
    desc: 'Bring listings to life with immersive media, floor plans, and neighborhood insights.',
  },
  {
    icon: Users,
    title: 'Lead management',
    desc: 'Capture, qualify, and nurture leads with automated follow-ups and analytics.',
  },
  {
    icon: Map,
    title: 'Smart search & maps',
    desc: 'Help clients find their perfect home with filters, geospatial search, and school data.',
  },
  {
    icon: BadgeCheck,
    title: 'MLS-ready & secure',
    desc: 'Compliant, reliable, and fast — built to scale with your business.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Built for modern brokerages</h2>
          <p className="mt-3 text-slate-300">Everything you need to market listings, delight clients, and grow revenue — all in one place.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="h-10 w-10 rounded-lg bg-blue-500/15 border border-blue-400/20 text-blue-300 flex items-center justify-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-white font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
