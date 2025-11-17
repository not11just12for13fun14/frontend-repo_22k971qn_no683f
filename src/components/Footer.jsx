export default function Footer() {
  return (
    <footer id="contact" className="relative bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12 border-t border-white/10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-white font-medium">Ready to elevate your real estate brand?</h3>
            <p className="mt-2 text-slate-300">Book a personalized walkthrough — we’ll tailor the demo to your listings and market.</p>
          </div>
          <form className="grid sm:grid-cols-3 gap-3">
            <input type="email" placeholder="Work email" className="col-span-2 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
            <button className="rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 text-sm font-medium transition-colors">Book demo</button>
          </form>
        </div>
        <div className="mt-10 flex items-center justify-between text-sm text-slate-400">
          <p>© {new Date().getFullYear()} SkyLuxe, Inc.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-200">Privacy</a>
            <a href="#" className="hover:text-slate-200">Terms</a>
            <a href="#" className="hover:text-slate-200">Support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
