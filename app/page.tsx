export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Remote Team Tool
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Find Optimal Meeting Times{" "}
          <span className="text-[#58a6ff]">Across Global Teams</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Stop the timezone guessing game. Instantly calculate the best meeting windows for your distributed team — factoring in work hours, preferences, and meeting fatigue.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
          >
            Start for $8/mo
          </a>
          <span className="text-[#8b949e] text-sm">No credit card required to try</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🌍</div>
            <h3 className="text-white font-semibold mb-1">Smart Timezone Engine</h3>
            <p className="text-[#8b949e] text-sm">Handles DST, regional holidays, and custom work hours automatically.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="text-white font-semibold mb-1">Fatigue-Aware Scheduling</h3>
            <p className="text-[#8b949e] text-sm">Avoids back-to-back meetings and respects focus time blocks per person.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">👥</div>
            <h3 className="text-white font-semibold mb-1">Team Profiles</h3>
            <p className="text-[#8b949e] text-sm">Save team members, their locations, and preferences for instant reuse.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <span className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest">Pro Plan</span>
          <div className="mt-4 mb-2">
            <span className="text-5xl font-bold text-white">$8</span>
            <span className="text-[#8b949e] ml-1">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to coordinate global teams</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited team members",
              "Smart meeting time suggestions",
              "Fatigue & focus time detection",
              "Calendar export (ICS / Google)",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started — $8/mo
          </a>
          <p className="text-[#8b949e] text-xs mt-3">Cancel anytime. Billed monthly.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How does the fatigue detection work?</h3>
            <p className="text-[#8b949e] text-sm">The algorithm tracks each team member's meeting load throughout the day and avoids scheduling new meetings when someone already has back-to-back sessions or has exceeded their daily meeting threshold.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Does it handle Daylight Saving Time automatically?</h3>
            <p className="text-[#8b949e] text-sm">Yes. The timezone engine uses IANA timezone data and recalculates offsets in real time, so DST transitions are always accounted for without any manual adjustments.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I cancel my subscription at any time?</h3>
            <p className="text-[#8b949e] text-sm">Absolutely. You can cancel from your billing dashboard at any time. You'll retain access until the end of your current billing period with no hidden fees.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Team Timezone Coordinator. All rights reserved.
      </footer>
    </main>
  )
}
