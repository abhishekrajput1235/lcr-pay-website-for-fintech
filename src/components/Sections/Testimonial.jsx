import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "John Doe",
      title: "Business Owner",
      message:
        "LCR Pay has revolutionized how we manage business transactions — it’s smooth, secure, and incredibly fast.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
    },
    {
      name: "Jane Smith",
      title: "Freelancer",
      message:
        "I use LCR Pay daily to get paid by clients. It’s seamless and gives me full control over my earnings.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      name: "Ravi Kumar",
      title: "Startup Founder",
      message:
        "Our startup relies on LCR Pay for quick settlements and easy integrations. Couldn’t ask for more!",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
      rating: 4,
    },
    {
      name: "Anita Verma",
      title: "E-Commerce Seller",
      message:
        "From checkout to payout — LCR Pay delivers a flawless experience with great customer support!",
      img: "https://randomuser.me/api/portraits/women/55.jpg",
      rating: 5,
    },
    {
      name: "Carlos Mendez",
      title: "Digital Marketer",
      message:
        "One of the best payment platforms I’ve ever used. Sleek design, fast UI, and 100% reliable.",
      img: "https://randomuser.me/api/portraits/men/72.jpg",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-gradient-to-b from-white via-violet-50/60 to-white overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-violet-300/30 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-[-150px] right-1/2 translate-x-1/2 w-[700px] h-[700px] bg-yellow-200/30 blur-[150px] rounded-full"></div>

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#5f259f] via-[#8f4de0] to-[#b589ff] text-transparent bg-clip-text mb-5">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Trusted by thousands of businesses and individuals,{" "}
          <span className="text-[#5f259f] font-semibold">LCR Pay</span> makes
          every payment effortless, secure, and lightning fast.
        </p>
      </div>

      {/* Swiper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="group relative bg-white/60 backdrop-blur-md border border-violet-100 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/80">
                {/* Decorative Gradient Border Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-400/20 to-yellow-200/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md mb-6"
                  />
                  <p className="text-gray-700 text-base md:text-lg italic leading-relaxed mb-6">
                    “{t.message}”
                  </p>
                  {/* Star Rating */}
                  <div className="flex justify-center gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        size={18}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-violet-400/30 blur-3xl rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-yellow-300/40 blur-2xl rounded-full animate-float-delayed"></div>
    </section>
  );
}
