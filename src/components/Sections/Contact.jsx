import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-white via-violet-50 to-blue-50"
    >
      {/* Decorative Blurs */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#5f259f]/30 blur-3xl rounded-full opacity-40" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-200/40 blur-3xl rounded-full opacity-40" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-gradient-to-br from-[#5f259f] to-purple-600 text-white shadow-md">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Contact <span className="text-[#5f259f]">LCR PAY</span>
            </h2>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            Have questions or partnership inquiries? We’re always here to help.
            Reach out to our support team for quick assistance or collaboration
            opportunities.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <Phone className="text-[#5f259f] w-5 h-5" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-[#5f259f] w-5 h-5" />
              <span>support@lcrpay.com</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-[#5f259f] w-5 h-5" />
              <span>Quantum Tower, Noida, India</span>
            </li>
          </ul>

          <div className="pt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-[#5f259f] to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
              Chat with Support
            </button>
          </div>
        </motion.div>

        {/* Right Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative bg-white/70 backdrop-blur-xl border border-violet-100 rounded-3xl shadow-2xl p-8 sm:p-10"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Send us a message
          </h3>
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                required
                className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#5f259f] focus:border-transparent transition bg-white/50"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                required
                className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#5f259f] focus:border-transparent transition bg-white/50"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Type your message..."
                required
                className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#5f259f] focus:border-transparent transition bg-white/50 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl text-white font-semibold text-lg bg-gradient-to-r from-[#5f259f] to-purple-600 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Subtle glowing accent border */}
          <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-br from-[#5f259f]/40 via-transparent to-blue-300/40 opacity-40 pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
