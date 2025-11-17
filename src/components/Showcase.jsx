export default function Showcase() {
  return (
    <section id="showcase" className="relative py-24 bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Showcase that sells</h2>
          <p className="mt-3 text-slate-300">Create stunning galleries and tours that highlight every detail clients care about.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={`https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop`} alt="Luxury interior" className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-4">
                <p className="text-white font-medium">Penthouse Living</p>
                <p className="text-slate-300 text-sm">Skyluxe Residences</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
