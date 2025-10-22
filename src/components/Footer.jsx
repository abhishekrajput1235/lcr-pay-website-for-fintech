import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import LCRPAY_LOGO from '../img/logo/LCRPAY_LOGO.png'

const Footer = () => {
  return (
    <footer className="bg-[#5f259f] text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <img src={LCRPAY_LOGO} alt="logo" />
          <p className="mt-4 text-sm text-gray-300">
            Empowering your digital payments with reliable, scalable, and secure solutions. Experience faster, safer, and smarter transactions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          {/* Added About Us link */}
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
            <li><Link to="/services" className="hover:text-blue-400">Services</Link></li>
            <li><Link to="/Home/Contact_Us" className="hover:text-blue-400">Contact</Link></li>
            <li><Link to="/Home/Delete_Account" className="hover:text-blue-400">Delete Account</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="#" className="hover:text-blue-400">FAQs</Link></li>
            <li><Link to="/privacy" className="hover:text-blue-400">Privacy Policy</Link></li>
            <li><Link to="/Home/Term_condition" className="hover:text-blue-400">Terms & Conditions</Link></li>
            <li><Link to="/Home/Return_Policy" className="hover:text-blue-400">Return Policy</Link></li>
            <li><Link to="#" className="hover:text-blue-400">Help Center</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://www.facebook.com/lcrpay" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaFacebookF /></a>
            <a href="https://x.com/lcrpay" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="https://www.instagram.com/%20lcr.pay" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaInstagram /></a>
            <a href="https://linkedin.com/company/lcrpay" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} LCR Pay. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
