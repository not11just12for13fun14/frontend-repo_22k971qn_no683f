export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-300">Start free. Upgrade when you’re ready. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[{
            name: 'Starter', price: '$0', desc: 'For solo agents trying the product'
          },{
            name: 'Team', price: '$49', desc: 'For growing teams and small brokerages'
          },{
            name: 'Brokerage', price: 'Custom', desc: 'For larger organizations with custom needs'
          }].map((t, idx) => (
            <div key={t.name} className={`rounded-2xl border ${idx===1? 'border-blue-400/30 bg-blue-500/10': 'border-white/10 bg-white/5'} p-6` }>
              <p className="text-white font-medium">{t.name}</p>
              <p className="mt-2 text-3xl text-white font-semibold">{t.price}<span className="text-base text-slate-300 font-normal">/mo</span></p>
              <p className="mt-2 text-sm text-slate-300/90">{t.desc}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-300/90">
                <li>Unlimited listings</li>
                <li>Lead capture & CRM</li>
                <li>Branded website</li>
                <li>Analytics & reporting</li>
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full justify-center items-center rounded-xl px-4 py-2 text-sm font-medium transition-colors ${idx===1? 'bg-blue-600 hover:bg-blue-500 text-white' : 'border border-white/20 bg-white/5 hover:bg-white/10 text-white'}`}>Choose plan</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
