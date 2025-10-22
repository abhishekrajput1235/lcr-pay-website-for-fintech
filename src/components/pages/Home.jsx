import React from "react";
import Hero from "../Hero";
import AppCarousel from "../AppCarousel";
import Service from "../Sections/Service";
import About from "../Sections/About";
import RechargeFaq from "../FAQ/RechargeFaq";
import Contact from "../Sections/Contact";
import TestimonialsSection from "../Sections/Testimonial";
import InfoSection from "../InfoSection";
function Home() {
  return (
    <div>
      {/* <Hero /> */}
      <AppCarousel />
      <Service />
<InfoSection
  title="Transforming Digital Payments with LCR Pay"
  description="LCR Pay is redefining how individuals and businesses manage their finances with secure, seamless, and lightning-fast digital payment solutions. Our platform is designed to empower users with an intuitive experience, enabling easy money transfers, utility bill payments, recharges, and much more—all from a single app.

From real-time transaction tracking to multi-layer security and fraud prevention, LCR Pay delivers enterprise-grade fintech innovation with a customer-first approach. Whether you're sending money to loved ones or managing high-volume business payments, LCR Pay ensures every transaction is fast, reliable, and transparent.

Join the next generation of digital banking and take control of your financial life with LCR Pay—your trusted partner in financial freedom."
/>

      <About />
      <RechargeFaq />
      <TestimonialsSection />
      <Contact />
    </div>
  );
}

export default Home;
