import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo/LCRPAY_LOGO.png'; // Assuming you want to use the logo

const AboutUsPage = () => {
  return (
    <section className="py-24 bg-gray-50" id="about-us">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <img src={logo} alt="LCR PAY Logo" className="mx-auto h-20 mb-6" />
          <h1 className="text-4xl font-extrabold text-[#5f259f] mb-4">About LCR PAY</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in digital payments, simplifying transactions and empowering financial freedom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Mission Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              At LCR PAY, our mission is to revolutionize the way people manage their finances by providing
              a secure, seamless, and intuitive digital payment platform. We believe in making financial
              transactions accessible, efficient, and rewarding for everyone.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are committed to innovation, constantly striving to enhance our services and introduce
              features that truly make a difference in our users' daily lives. From instant recharges
              to effortless bill payments, we aim to be the go-to solution for all your digital payment needs.
            </p>
          </div>

          {/* Vision Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              Our vision is to build a future where financial transactions are no longer a chore, but a
              simple, integrated part of life. We envision a world where every individual and business
              can conduct their financial activities with complete confidence, knowing their data is secure
              and their transactions are instant.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We aspire to be a leader in the fintech industry, recognized for our reliability, customer-centric
              approach, and continuous pursuit of excellence. Join us on this journey to redefine digital payments.
            </p>
          </div>
        </div>

        {/* Call to Action / Values */}
        <div className="mt-20 text-center space-y-8">
          <h2 className="text-3xl font-bold text-gray-800">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-[#5f259f] mb-3">Security First</h3>
              <p className="text-gray-600">Protecting your data and transactions with state-of-the-art encryption.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-[#5f259f] mb-3">User-Centric Design</h3>
              <p className="text-gray-600">Crafting intuitive and easy-to-use experiences for everyone.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-[#5f259f] mb-3">Innovation</h3>
              <p className="text-gray-600">Continuously evolving our services to meet future financial needs.</p>
            </div>
          </div>
          <Link
            to="/Home/Contact_Us"
            className="inline-block px-8 py-4 bg-[#5f259f] text-white font-semibold rounded-full shadow-lg hover:bg-[#4a1c7c] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;