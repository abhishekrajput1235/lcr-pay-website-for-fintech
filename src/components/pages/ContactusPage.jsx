export default function ContactUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-20 space-y-16 mt-10">
      {/* Section 1: Contact Info */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-[#5F259F]">Get in Touch</h2>
        <p className="text-gray-600">
          We’d love to hear from you! Reach out via any of the methods below.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div className="border border-[#5F259F] rounded-lg p-6 shadow">
            <h4 className="text-lg font-semibold text-[#5F259F]">📍 Address</h4>
            <p className="text-gray-500">Vasundhara,Gaziabad, India</p>
          </div>
          <div className="border border-[#5F259F] rounded-lg p-6 shadow ">
            <h4 className="text-lg font-semibold text-[#5F259F]">📞 Phone</h4>
            <p className="text-gray-500">01169311284</p>
          </div>
          <div className="border border-[#5F259F] rounded-lg p-6 shadow">
            <h4 className="text-lg font-semibold text-[#5F259F]">📧 Email</h4>
            <p className="text-gray-500">lcrpay@gmail.com</p>
          </div>
        </div>
      </section>

      {/* Section 2: Contact Form */}
      <section className="min-h-screen flex items-center justify-center  px-4">
        <div className="w-full max-w-3xl backdrop-blur-md  px-10 ">
          <h3 className="text-3xl font-extrabold text-center text-[#5F259F] mb-8">
            📩 Send Us a Message
          </h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder=" "
                  required
                  className="w-full peer px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-[#5F259F] transition duration-300"
                />
                <label className="absolute left-4 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#5F259F] transition-all">
                  Your Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder=" "
                  required
                  className="w-full peer px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-[#5F259F] transition duration-300"
                />
                <label className="absolute left-4 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#5F259F] transition-all">
                  Your Email
                </label>
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder=" "
                className="w-full peer px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-[#5F259F] transition duration-300"
              />
              <label className="absolute left-4 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#5F259F] transition-all">
                Subject
              </label>
            </div>

            <div className="relative">
              <textarea
                rows="5"
                placeholder=" "
                required
                className="w-full peer px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-[#5F259F] transition duration-300 resize-none"
              ></textarea>
              <label className="absolute left-4 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#5F259F] transition-all">
                Your Message
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-block bg-[#5F259F] hover:bg-[#781ed8] text-white font-semibold text-lg px-10 py-3 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
              >
                🚀 Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Section 3: Map or Socials */}
      <section className="text-center pb-10">
        <h3 className="text-2xl font-bold mb-4">Find Us on Map</h3>
        <div className="w-full h-64">
          <iframe
            title="Google Maps"
            className="w-full h-full border rounded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.9553102282825!2d77.36839189731457!3d28.659572524021584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb92576eb78d%3A0x2a15caaacef5bb94!2sUnion%20Bank%20of%20India!5e0!3m2!1sen!2sin!4v1747125564928!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
