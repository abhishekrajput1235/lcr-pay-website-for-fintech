import React from "react";
import playstore from "../img/playstore.png";
import appstore from "../img/appstore.jpeg";
import user from '../img/user.png';


// LCR PAY — Modern, attractive, user-friendly Services page
// React + Tailwind CSS
// Primary color: #5F259F

export default function LcrPayServicesPage() {
  const primary = "#5F259F";

  const services = [
    { id: "payments", title: "Secure Payments", desc: "One-tap merchant & P2P payments — app-only.", icon: WalletIcon },
    { id: "recharge", title: "Mobile & DTH", desc: "Prepaid/postpaid & DTH top-ups with operator plans.", icon: MobileIcon },
    { id: "bills", title: "Utility Bills", desc: "Electricity, gas, water & broadband bill payments.", icon: BillIcon },
    { id: "wallet", title: "LCR Wallet", desc: "Top-up for faster checkouts and instant refunds.", icon: WalletIcon },
    { id: "offers", title: "Rewards", desc: "Cashback & partner offers inside the app.", icon: GiftIcon },
    { id: "support", title: "24/7 Support", desc: "In-app chat and help center for payment issues.", icon: SupportIcon },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* HERO */}
      <header className="relative overflow-hidden bg-gradient-to-b from-white to-[#FBF8FF]">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm" style={{ border: '1px solid rgba(95,37,159,0.08)' }}>
              <strong className="text-[#5F259F]">LCR PAY</strong>
              <span className="text-xs text-gray-400">Fintech • Recharges & Bills</span>
            </span>

            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">Fast, secure & rewarding payments — all in one app</h1>
            <p className="mt-4 text-gray-600 max-w-xl">LCR PAY helps you pay recharges, DTH and all utility bills instantly with bank‑level security and meaningful rewards. This page showcases the app — perform payments inside the mobile app.</p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3 justify-center lg:justify-start">
              <a href="https://play.google.com/store/apps/details?id=com.LcrPay.LcrPay" className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-white font-semibold shadow-lg" style={{ background: primary }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-90"><path d="M12 2v14" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 9l5 5 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Download LCR PAY
              </a>

              <a href="#services" className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-gray-200 text-sm text-gray-700">Explore services</a>
            </div>

            <div className="mt-6 flex items-center gap-4 justify-center lg:justify-start">
              <BadgePlay available />
              <BadgeAppstore comingSoon />
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl">
              <Spotlight title="Instant" desc="Payments in seconds" />
              <Spotlight title="Secure" desc="Bank-level encryption" />
              <Spotlight title="Rewarding" desc="Cashback & offers" />
            </div>
          </div>

          {/* Right — visual mockup */}
          <div className="flex items-center justify-center">
            <div className="relative w-[320px] sm:w-[380px] lg:w-[440px]">
              <div className="rounded-3xl p-5 bg-white shadow-2xl border border-gray-100">
                <div className="w-full h-[520px] sm:h-[520px] bg-gradient-to-b from-white to-gray-50 rounded-2xl overflow-hidden">
                  <div className="h-12 flex items-center justify-between px-4">
                    <div className="w-10 h-3 rounded-md bg-gray-200" />
                    <div className="text-xs text-gray-400">9:41</div>
                  </div>

                  <div className="p-4">
                    <div className="text-sm text-gray-500">Paying</div>
                    <div className="mt-1 font-semibold text-lg">Mobile Recharge</div>

                    <div className="mt-4 bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">Operator</div>
                        <div className="text-sm font-medium">Airtel</div>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <div>
                          <div className="text-xs text-gray-500">Amount</div>
                          <div className="text-lg font-semibold">₹199</div>
                        </div>
                        <div>
                          <button className="px-3 py-2 rounded-md text-white text-sm font-medium" style={{ background: primary }}>Pay</button>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-2">
                      <div className="p-3 rounded-lg bg-white border border-gray-100 text-xs text-gray-600">Payment history</div>
                      <div className="p-3 rounded-lg bg-white border border-gray-100 text-xs text-gray-600">Save as favorite</div>
                    </div>

                    <div className="mt-6 text-xs text-gray-400">Instant confirmation will be sent to your phone.</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full opacity-30" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(95,37,159,0.18), transparent)' }} />
            </div>
          </div>
        </div>
      </header>

      {/* SERVICES + BENEFITS */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Services list */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">What the app does</h2>
            <p className="mt-3 text-gray-600">A concise list of the key services available inside the mobile app.</p>

            <div className="mt-8 space-y-6">
              {services.map((s) => (
                <div key={s.id} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg grid place-items-center" style={{ background: 'linear-gradient(135deg, rgba(95,37,159,0.08), rgba(126,63,242,0.04))' }}>
                    <s.icon />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{s.title}</h3>
                      <span className="text-xs text-gray-400">App only</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
                    <div className="mt-3 text-xs text-gray-500 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div>• Fast 3-step flows</div>
                      <div>• Instant receipts</div>
                      <div>• Saved payees</div>
                      <div>• Auto-reminders</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits strip */}
          <div>
            <div className="rounded-2xl p-6 bg-gradient-to-tr from-white to-[#FBF8FF] border border-gray-100 shadow-lg">
              <h4 className="text-xl font-semibold">Why customers love LCR PAY</h4>
              <p className="mt-2 text-gray-600">Designed for speed, security, and savings.</p>

              <div className="mt-6 space-y-4">
                <BenefitRow title="Smart notifications" desc="Real-time updates for every payment, so you never miss a receipt." />
                <BenefitRow title="Auto-pay rules" desc="Schedule repeat payments and never worry about missed bills." />
                <BenefitRow title="Unified history" desc="All payments and invoices in one place for easy tracking." />
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a href="https://play.google.com/store/apps/details?id=com.LcrPay.LcrPay" className="px-4 py-2 rounded-full text-white font-semibold" style={{ background: primary }}>Download App</a>
                <a href="#contact" className="px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-700">Contact Sales</a>
              </div>
            </div>

            <div className="mt-6 text-xs text-gray-500">Available: Google Play — App Store coming soon</div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#F9F7FF] py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard title="Fast Transactions" desc="Send and receive money instantly without delays." />
          <FeatureCard title="Multi-Payment Options" desc="Supports UPI, Netbanking, cards, and wallet payments." />
          <FeatureCard title="Exclusive Rewards" desc="Earn cashback and special offers on transactions." />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto px-6 py-16 bg-white">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-extrabold text-gray-900">Loved by Our Users</h3>
          <p className="mt-2 text-gray-600">Hear what people say about LCR PAY.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Testimonial image="/users/user1.jpg" name="Ananya S." role="Frequent App User">Fast and reliable — saved me so much time.</Testimonial>
          <Testimonial image="/users/user2.jpg" name="Rohan K." role="Digital Payments Enthusiast">Great rewards and easy recharges. Love the app!</Testimonial>
          <Testimonial image="/users/user3.jpg" name="Priya M." role="Professional User">Peace of mind with secure transactions every time.</Testimonial>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h4 className="text-lg font-semibold text-center">Frequently asked</h4>
        <div className="mt-6 space-y-3">
          <details className="p-4 rounded-lg border border-gray-100 bg-white"><summary className="cursor-pointer font-medium">Can I pay bills from the website?</summary><p className="mt-2 text-sm text-gray-600">No — use the LCR PAY mobile app to perform payments. This site is a polished showcase.</p></details>
          <details className="p-4 rounded-lg border border-gray-100 bg-white"><summary className="cursor-pointer font-medium">Which payment methods are supported?</summary><p className="mt-2 text-sm text-gray-600">UPI, Cards, Netbanking and Wallet balance inside the app.</p></details>
          <details className="p-4 rounded-lg border border-gray-100 bg-white"><summary className="cursor-pointer font-medium">Is my data secure?</summary><p className="mt-2 text-sm text-gray-600">Yes — LCR PAY uses bank-level encryption and secure servers for all transactions.</p></details>
          <details className="p-4 rounded-lg border border-gray-100 bg-white"><summary className="cursor-pointer font-medium">Are there any hidden charges?</summary><p className="mt-2 text-sm text-gray-600">No — all payments are transparent, with no hidden fees.</p></details>
        </div>

        <div className="mt-8 text-center">
          <a href="https://play.google.com/store/apps/details?id=com.LcrPay.LcrPay" className="inline-flex items-center gap-3 px-6 py-3 rounded-full shadow-lg text-white text-sm font-semibold" style={{ background: primary }}>Get the app — it's free</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} LCR PAY — All rights reserved.
      </footer>
    </div>
  );
}

/* ---------------------- small components ---------------------- */
function BadgePlay({ available }) {
  return (
    <a href="https://play.google.com/store/apps/details?id=com.LcrPay.LcrPay" className="inline-flex items-center gap-3 px-4 py-2 rounded-lg shadow-sm bg-black border border-gray-100">
      <img src={playstore} alt="Google Play" className="w-6 h-6" />
      <div className="text-left leading-tight">
        <div className="text-[11px] text-white">Get it on</div>
        <div className="font-semibold text-white">Google Play</div>
      </div>
    </a>
  );
}
function BadgeAppstore({ comingSoon }) {
  return (
    <div className="relative inline-flex items-center gap-3 px-4 py-2 rounded-lg shadow-sm bg-blue-500 border border-gray-100">
      <img src={appstore} alt="App Store" className="w-6 h-6 grayscale" />
      <div className="text-left leading-tight text-white">
        <div className="text-[11px] text-gray-500 text-green-300">Coming soon</div>
        <div className="font-semibold">App Store</div>
      </div>
    </div>
  );
}

function Spotlight({ title, desc }) {
  return (
    <div className="p-3 rounded-lg bg-white border border-gray-100 text-center shadow-sm">
      <div className="font-semibold">{title}</div>
      <div className="text-xs text-gray-500 mt-1">{desc}</div>
    </div>
  );
}

function BenefitRow({ title, desc }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg grid place-items-center bg-[#F3ECFF] text-[#5F259F]">✓</div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-xs text-gray-500 mt-1">{desc}</div>
      </div>
    </div>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="p-5 bg-white rounded-2xl shadow-md border border-gray-100 text-center">
      <h3 className="font-semibold text-sm">{title}</h3>
      <p className="text-xs text-gray-600 mt-1">{desc}</p>
    </div>
  );
}

function Testimonial({ image, name, role, children }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 text-center">
      <img src={user} alt={name} className="w-16 h-16 mx-auto rounded-full object-cover" />
      <p className="mt-4 text-gray-700 text-sm">“{children}”</p>
      <h4 className="mt-3 text-gray-900 font-semibold">{name}</h4>
      <span className="text-gray-400 text-xs">{role}</span>
    </div>
  );
}

function WalletIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="6" width="20" height="12" rx="2" stroke="#5F259F" strokeWidth="1.6" />
    </svg>
  );
}
function MobileIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="3" width="10" height="18" rx="2" stroke="#5F259F" strokeWidth="1.6" />
    </svg>
  );
}
function BillIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12" stroke="#5F259F" strokeWidth="1.4" />
      <path d="M7 10h10M7 14h6" stroke="#5F259F" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
function GiftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 12v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7" stroke="#5F259F" strokeWidth="1.4" />
      <path d="M12 12V7" stroke="#5F259F" strokeWidth="1.4" />
    </svg>
  );
}
function SupportIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2a10 10 0 00-9 6v4a9 9 0 0018 0V8a10 10 0 00-9-6z" stroke="#5F259F" strokeWidth="1.4" fill="none" />
    </svg>
  );
}
