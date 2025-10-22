import { ShieldCheck, Puzzle, Headset } from "lucide-react";

export default function ServiceSection() {
  const services = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-white" />,
      title: "Secure Transactions",
      desc: "End-to-end encrypted payments with intelligent fraud protection, ensuring your business and customers stay safe.",
      bg: "from-[#5f259f] to-[#8b5cf6]",
    },
    {
      icon: <Puzzle className="h-8 w-8 text-white" />,
      title: "Easy Integration",
      desc: "Plug-and-play APIs with seamless developer experience. Integrate payments in minutes, not days.",
      bg: "from-[#22c55e] to-[#16a34a]",
    },
    {
      icon: <Headset className="h-8 w-8 text-white" />,
      title: "24/7 Expert Support",
      desc: "Get instant help from our fintech specialists — any time, any day, anywhere.",
      bg: "from-[#9333ea] to-[#c084fc]",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-b from-white via-violet-50/50 to-white overflow-hidden"
    >
      {/* Background Glow Elements */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#8b5cf6]/20 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-200/20 blur-[150px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#5f259f] via-[#8b5cf6] to-[#b589ff] bg-clip-text text-transparent drop-shadow-sm mb-5">
          Our Services
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          Power your business with LCR Pay’s advanced fintech solutions — secure, scalable, and supported by experts 24/7.
        </p>

        {/* Service Cards */}
        <div className="mt-20 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative p-8 bg-white/60 backdrop-blur-md border border-violet-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Glow Animation Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-400/10 to-yellow-200/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

              {/* Icon */}
              <div className="relative z-10 inline-flex items-center justify-center mb-6">
                <div
                  className={`bg-gradient-to-r ${service.bg} p-5 rounded-2xl shadow-md ring-4 ring-white/30 group-hover:scale-110 transition-transform duration-500`}
                >
                  {service.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Animated Lights */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-violet-400/30 blur-3xl rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-yellow-300/40 blur-2xl rounded-full animate-float-delayed"></div>
    </section>
  );
}
