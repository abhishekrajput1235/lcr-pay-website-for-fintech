import { CheckCircle } from "lucide-react";
import Contact from "../Sections/Contact";
import About from "../Sections/About";
import PricingFaq from "../FAQ/PricingFaq";
import servicesImage from "../../img/heroImg.png";

const PricingPage = () => {
  const services = [
    "Mobile Recharges (Prepaid/Postpaid)",
    "Electricity & Water Bill Payments",
    "DTH Recharge & Broadband Payments",
    "Piped Gas Bill Payment",
    "Wallet-Based Transactions",
    "Exclusive Cashback & Rewards",
  ];

  const benefits = [
    "Secure Transactions",
    "User-Friendly Dashboard",
    "24/7 Customer Support",
    "Fast & Reliable Service",
    "Affordable Monthly Plans",
    "Cashback & Loyalty Rewards",
  ];

  return (
    <div className=" min-h-screen px-4 pt-36 h-full">
      {/* Intro */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-5xl font-bold text-[#5F259F] tracking-tight mb-4">
          Power Your Payments with{" "}
          <span className="text-yellow-500">LCR PAY</span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
       Say goodbye to juggling multiple apps! LCR PAY is your one-stop solution for mobile recharges, utility bill payments, DTH, broadband, and more — all in one secure, easy-to-use platform. Experience lightning-fast transactions, 24/7 reliability, and exciting cashback rewards that make every payment more rewarding. Simplify your life and power your payments with LCR PAY today!
        </p>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Image */}
          <div className="w-full">
            <img
              src={servicesImage}
              alt="Our Services"
              className="w-full max-w-md mx-auto md:mx-0"
            />
          </div>



          {/* Right Side: Services */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  {services.map((service, idx) => (
    <div
      key={idx}
      className="flex items-start gap-4 bg-white border-l-4 border-[#5F259F] shadow-md rounded-xl p-5 hover:shadow-xl transition-all duration-300"
    >
      <div className="mt-1">
        <CheckCircle className="text-[#5F259F]" size={28} />
      </div>
      <p className="text-gray-800 text-base font-medium">{service}</p>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Pricing Plan */}
         <h2 className="text-3xl font-bold text-[#5F259F] text-center mb-16">
          App Subscription Pricing Plans
        </h2>
      <section className="max-w-lg mx-auto bg-gradient-to-br from-white via-purple-50 to-yellow-50 shadow-2xl border border-yellow-300 rounded-3xl p-10 my-10 text-center">
       
        <h3 className="text-3xl font-bold text-[#5F259F] mb-2"> Premium Plan</h3>
        <p className="text-gray-600 mb-6">
          Get unlimited access at one affordable price.
        </p>
        <div className="text-5xl font-extrabold text-yellow-500 mb-2">₹500</div>
        <p className="text-gray-500 text-lg mb-8">per month</p>
        <ul className="text-left text-gray-700 space-y-3 mb-10">
          <li>✔ Unlimited Recharges & Payments</li>
          <li>✔ Access to All Services</li>
          <li>✔ Cashback & Loyalty Rewards</li>
          <li>✔ Priority 24/7 Support</li>
        </ul>
        <button className="bg-[#5F259F] hover:bg-[#4a1c7c] text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg">
          Get Started
        </button>
      </section>

      {/* FAQ & Contact */}
      <PricingFaq />
      <Contact />
    </div>
  );
};

export default PricingPage;
