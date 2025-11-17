import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Now accepting early access customers
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            The modern SaaS for real estate teams
          </h1>
          <p className="mt-4 text-slate-200/90 text-lg">
            Showcase properties, manage leads, and close deals faster with a single, elegant platform.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex justify-center items-center rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 text-sm font-medium transition-colors">
              Start free trial
            </a>
            <a href="#showcase" className="inline-flex justify-center items-center rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white px-6 py-3 text-sm font-medium transition-colors">
              See it in action
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-semibold text-white">2.1k+</p>
              <p className="text-xs text-slate-300">Listings managed</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-semibold text-white">38%</p>
              <p className="text-xs text-slate-300">Faster deal cycles</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-semibold text-white">99.9%</p>
              <p className="text-xs text-slate-300">Uptime guaranteed</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-semibold text-white">24/7</p>
              <p className="text-xs text-slate-300">Priority support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
