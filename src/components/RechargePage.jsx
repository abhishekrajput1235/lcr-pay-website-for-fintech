import React from 'react';
import user from '../img/user.png';

// LCR PAY — Recharges & Bills Page (Premium — Advanced, polished & highly usable)
// React + Tailwind CSS
// Theme violet: #6C63FF

export default function LcrPayRechargesPage() {
  const violet = '#6C63FF';

  const services = [
    { key: 'mobile', title: 'Mobile Recharge', desc: 'Prepaid & postpaid recharges for all carriers', icon: MobileIcon },
    { key: 'dth', title: 'DTH Recharge', desc: 'Top up your set-top box instantly', icon: DthIcon },
    { key: 'electricity', title: 'Electricity Bill', desc: 'Pay securely with instant confirmation', icon: ElectricityIcon },
    { key: 'gas', title: 'Gas Bill', desc: 'Schedule or pay on the go', icon: GasIcon },
    { key: 'broadband', title: 'Broadband', desc: 'Recharges and bill payments for ISPs', icon: BroadbandIcon },
    { key: 'water', title: 'Water Bill', desc: 'Fast payments for municipal bills', icon: WaterIcon },
  ];

  const features = [
    { title: 'Instant Payments', subtitle: 'Transactions completed in seconds', icon: LightningIcon },
    { title: 'Secure & Trusted', subtitle: 'Bank-level encryption & 2FA', icon: ShieldIcon },
    { title: 'Rewards & Cashback', subtitle: 'Earn every time you pay', icon: GiftIcon },
    { title: '24/7 Support', subtitle: 'Help whenever you need it', icon: SupportIcon },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FBF8FF] text-gray-900 font-sans">



      {/* HERO — large, split layout with animated badges and compact mock */}
      <header className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-sm text-[#5F259F] font-medium">Recharges · Bills · Wallet</p>
          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold leading-tight">Pay bills & recharges instantly — secure, fast, rewarding</h1>
          <p className="mt-4 text-gray-600 max-w-xl">LCR PAY centralizes mobile, DTH and utility payments with an elegant UX, trusted security, and rewards that add real value. This is a product showcase — make payments inside the mobile app.</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a id="download" href="https://play.google.com/store/apps/details?id=com.LcrPay.LcrPay" target='_blank' className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-white font-semibold shadow-lg" style={{ background: "#5F259F", boxShadow: '0 12px 30px rgba(108,99,255,0.16)' }}>Get the app</a>
            <a href="#services" className="px-4 py-2 rounded-full border border-gray-200 text-sm">View Services</a>

            <div className="ml-2 flex items-center gap-3">
              <svg className="w-8 h-8 transform hover:scale-105 transition" viewBox="0 0 24 24" fill="none"><rect x="2" y="6" width="20" height="12" rx="2" stroke={violet} strokeWidth="1.4"/></svg>
              <svg className="w-8 h-8 transform hover:scale-105 transition" viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 00-9 6v4a9 9 0 0018 0V8a10 10 0 00-9-6z" stroke={violet} strokeWidth="1.4"/></svg>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 max-w-md text-sm text-gray-600">
            <div className="flex items-center gap-2"><CheckIcon /> Secure payments</div>
            <div className="flex items-center gap-2"><CheckIcon /> Instant receipts</div>
            <div className="flex items-center gap-2"><CheckIcon /> Saved payees</div>
            <div className="flex items-center gap-2"><CheckIcon /> Auto reminders</div>
          </div>
        </div>

        {/* Mockup card — polished */}
        <div className="flex justify-center">
          <div className="relative w-[360px] sm:w-[420px] lg:w-[480px]">
            <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ border: '1px solid rgba(108,99,255,0.06)' }}>
              <div className="bg-gradient-to-b from-white to-[#FBF8FF] p-5">
                <div className="rounded-2xl bg-white p-4 shadow-inner">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-400">Paying</div>
                      <div className="mt-1 text-lg font-semibold">Electricity Bill</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400">Amount</div>
                      <div className="mt-1 text-2xl font-bold">₹ 2,450</div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="rounded-lg bg-gray-50 p-3 border border-gray-100">
                      <div className="text-xs text-gray-400">Provider</div>
                      <div className="text-sm font-medium">Example Electric</div>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-white p-3 border border-gray-100 text-sm">UPI / Wallet / Cards</div>
                      <div className="rounded-lg bg-white p-3 border border-gray-100 text-sm">Auto pay options</div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-xs text-gray-400">Status</div>
                      <div className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{ background: violet }}>Ready</div>
                    </div>

                    <div className="mt-4 flex items-center gap-3">
                      <button className="flex-1 px-4 py-2 rounded-lg text-white font-semibold" style={{ background: "#5F259F" }}>Pay now</button>
                      <button className="px-3 py-2 rounded-lg border border-gray-200">Preview</button>
                    </div>

                    <div className="mt-3 text-xs text-gray-400">Confirmation is instant — receipts saved in history.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* decorative floating shapes */}
            <div className="absolute -right-10 -bottom-10 w-36 h-36 rounded-full" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(108,99,255,0.18), transparent)' }} />
          </div>
        </div>
      </header>

      {/* SERVICES grid — compact, informative and interactive */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold">Supported recharges & bills</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">All core services are available inside the LCR PAY app. This page highlights what you can do.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.key} className="group rounded-2xl p-5 bg-white shadow hover:shadow-2xl transition transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl grid place-items-center" style={{ background: 'linear-gradient(135deg, rgba(108,99,255,0.08), rgba(108,99,255,0.04))' }}>
                  <s.icon />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">{s.title}</h3>
                    <span className="text-xs text-gray-400">In app</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">{s.desc}</p>

                  <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                    <div className="px-2 py-1 rounded-full bg-gray-50 border border-gray-100">Fast</div>
                    <div className="px-2 py-1 rounded-full bg-gray-50 border border-gray-100">Secure</div>
                    <div className="px-2 py-1 rounded-full bg-gray-50 border border-gray-100">Rewards</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <a className="text-sm font-semibold text-violet-600">Learn more →</a>
                <button className="px-3 py-1 rounded-md text-sm font-medium" style={{ background: 'rgba(108,99,255,0.08)', color: violet }}>Open app</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ADVANCED FEATURES / BENEFITS — icon grid with short explainer */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-white/50 border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div>
            <h3 className="text-2xl font-extrabold">Why users choose LCR PAY</h3>
            <p className="mt-3 text-gray-600">Built for speed, safety and savings. A few things that make LCR special.</p>

            <div className="mt-6 space-y-3">
              <FeatureItem icon={LightningIcon} title="Instant checkout" desc="Complete payments in 3 steps with instant settlement." />
              <FeatureItem icon={ShieldIcon} title="Bank-grade security" desc="Encrypted transactions, secure tokens and 2FA options." />
              <FeatureItem icon={GiftIcon} title="Earn rewards" desc="Cashback and partner offers tailored to your usage." />
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-5 rounded-xl bg-white shadow hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg grid place-items-center bg-violet-50 text-violet-700">{<f.icon />}</div>
                  <div>
                    <div className="font-semibold">{f.title}</div>
                    <div className="text-sm text-gray-600 mt-1">{f.subtitle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — stepper with subtle connectors */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-extrabold text-center">How it works</h3>
        <p className="text-center text-gray-600 mt-2">Four simple steps to pay a bill or recharge.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <StepCard step={1} title="Choose Service" desc="Select mobile, DTH or utility." icon={SelectIcon} />
          <StepCard step={2} title="Enter Details" desc="Provide phone, consumer ID or account number." icon={FormIcon} />
          <StepCard step={3} title="Pay Securely" desc="Pay using UPI, cards or saved methods." icon={PayIcon} />
          <StepCard step={4} title="Get Confirmation" desc="Instant receipt & history entry." icon={ConfirmIcon} />
        </div>
      </section>

      {/* TESTIMONIALS — carousel-like grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-b from-white to-[#FBF8FF]">
        <h3 className="text-2xl font-extrabold text-center">Loved by users</h3>
        <p className="text-center text-gray-600 mt-2">Real feedback from people who use LCR PAY every day.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Testimonial image={user} name="Ananya S." role="Frequent user">Fast and reliable — saved me so much time.</Testimonial>
          <Testimonial image={user} name="Rohan K." role="Power user">Great rewards and easy recharges. Love the app!</Testimonial>
          <Testimonial image={user} name="Priya M." role="Professional">Peace of mind with secure transactions every time.</Testimonial>
        </div>
      </section>

    </div>
  );
}

/* ---------------------- small components ---------------------- */
function FeatureItem({ icon: Icon, title, desc }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-lg grid place-items-center bg-violet-50 text-violet-700">{<Icon />}</div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-gray-600 mt-1">{desc}</div>
      </div>
    </div>
  );
}

function StepCard({ step, title, desc, icon: Icon }) {
  return (
    <div className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm flex flex-col items-start gap-3">
      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-violet-50 text-violet-700 font-semibold">{step}</div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-gray-500">{desc}</div>
      </div>
    </div>
  );
}

function Testimonial({ image, name, role, children }) {
  return (
    <div className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition text-center">
      <img src={image} alt={name} className="w-16 h-16 rounded-full mx-auto object-cover" />
      <p className="mt-4 text-gray-700">“{children}”</p>
      <div className="mt-3 font-semibold">{name}</div>
      <div className="text-xs text-gray-400">{role}</div>
    </div>
  );
}

/* ---------------------- ICONS (inline SVGs) ---------------------- */
function MobileIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="3" width="10" height="18" rx="2" stroke="#6C63FF" strokeWidth="1.5" />
      <circle cx="12" cy="19" r="1" fill="#6C63FF" />
    </svg>
  );
}
function DthIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 7h18v10H3z" stroke="#6C63FF" strokeWidth="1.5" fill="none" />
      <path d="M8 12h8" stroke="#6C63FF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function ElectricityIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" stroke="#6C63FF" strokeWidth="1.2" fill="none" />
    </svg>
  );
}
function GasIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2c0 4-6 6-6 10a6 6 0 0012 0c0-4-6-6-6-10z" stroke="#6C63FF" strokeWidth="1.2" fill="none" />
    </svg>
  );
}
function BroadbandIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="3" stroke="#6C63FF" strokeWidth="1.5" />
      <path d="M4 12a8 8 0 0116 0" stroke="#6C63FF" strokeWidth="1.2" fill="none" />
    </svg>
  );
}
function WaterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3s5 4 5 8a5 5 0 11-10 0c0-4 5-8 5-8z" stroke="#6C63FF" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6L9 17l-5-5" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LightningIcon() { return (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" stroke="#6C63FF" strokeWidth="1.5" fill="none"/></svg>
);} 
function ShieldIcon() { return (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l7 3v5c0 5-3.8 9.8-7 11-3.2-1.2-7-6-7-11V5l7-3z" stroke="#6C63FF" strokeWidth="1.2" fill="none"/></svg>
);} 
function GiftIcon() { return (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7" stroke="#6C63FF" strokeWidth="1.2" fill="none"/><path d="M12 12V7" stroke="#6C63FF" strokeWidth="1.2"/></svg>
);} 
function SupportIcon() { return (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 00-9 6v4a9 9 0 0018 0V8a10 10 0 00-9-6z" stroke="#6C63FF" strokeWidth="1.2" fill="none"/></svg>
);} 
function SelectIcon() { return (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="16" rx="2" stroke="#6C63FF" strokeWidth="1.2"/></svg>
);} 
function FormIcon() { return (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 7h18" stroke="#6C63FF" strokeWidth="1.2"/><path d="M7 11h10" stroke="#6C63FF" strokeWidth="1.2"/></svg>
);} 
function PayIcon() { return (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="6" width="20" height="12" rx="2" stroke="#6C63FF" strokeWidth="1.2"/></svg>
);} 
function ConfirmIcon() { return (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="#6C63FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
)}
