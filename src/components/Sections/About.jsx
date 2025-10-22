import { ShieldCheck, Clock, Zap, Users } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-white" />,
      title: "Secure Transactions",
      desc: "Bank-level encryption and advanced protection for every payment.",
      gradient: "from-[#5f259f] to-[#8b5cf6]",
    },
    {
      icon: <Zap className="h-10 w-10 text-white" />,
      title: "Lightning Fast",
      desc: "Real-time processing ensures your financial operations are instant.",
      gradient: "from-[#f59e0b] to-[#fbbf24]",
    },
    {
      icon: <Clock className="h-10 w-10 text-white" />,
      title: "24/7 Support",
      desc: "Our expert team is always ready to help you when you need it.",
      gradient: "from-[#9333ea] to-[#c084fc]",
    },
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: "User-Centric",
      desc: "Intuitive design for everyone — from beginners to professionals.",
      gradient: "from-[#22c55e] to-[#16a34a]",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-white via-violet-50/30 to-white overflow-hidden"
    >
      {/* Background Glow Elements */}
      <div className="absolute top-[-100px] left-1/4 w-[400px] h-[400px] bg-violet-300/20 blur-3xl rounded-full animate-float"></div>
      <div className="absolute bottom-[-100px] right-1/4 w-[300px] h-[300px] bg-yellow-200/20 blur-3xl rounded-full animate-float-delayed"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#5f259f] via-[#8b5cf6] to-[#b589ff] text-transparent bg-clip-text mb-4">
            Why Choose <span className="text-[#5f259f]">LCR Pay?</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            LCR Pay is your trusted companion for fast, secure, and hassle-free digital transactions. Built for everyone — from individuals to enterprises.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="group relative bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-violet-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Glow Icon Background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-400/10 to-yellow-200/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

              {/* Icon */}
              <div className="relative z-10 inline-flex items-center justify-center mb-6">
                <div
                  className={`bg-gradient-to-r ${f.gradient} p-5 rounded-2xl shadow-md ring-4 ring-white/30 group-hover:scale-110 transition-transform duration-500`}
                >
                  {f.icon}
                </div>
              </div>

              {/* Text */}
              <div className="relative z-10 text-center">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
