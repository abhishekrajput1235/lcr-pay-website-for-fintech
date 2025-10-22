import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import logo from "../img/logo/LCRPAY_LOGO.png";
import DownloadButton from "../components/DownloadButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
     { name: "Services", path: "/Home/Services" },
    { name: "Contact", path: "/Home/Contact_Us" },
   
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="logo" className="h-12 w-12" />
            <span className="text-2xl font-bold text-[#5f259f] tracking-tight">
              LCR PAY
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-[#5f259f]"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Dropdown */}
            <div className="relative">
              <Link
                to='/recharge-utility-bills'
                className="flex items-center font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                Recharges & Bills
              </Link>

            </div>

            <DownloadButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-blue-600 transition"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-3">
          <Link
            to="/"
            onClick={toggleMenu}
            className={`font-medium text-gray-700 hover:text-blue-600 ${
              location.pathname === "/" ? "text-blue-600" : ""
            }`}
          >
            Home
          </Link>

          {/* Mobile Dropdown */}
          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer text-gray-700 hover:text-blue-600 font-medium">
              Recharges & Bills
              <FaChevronDown className="group-open:rotate-180 transition-transform" />
            </summary>
            <div className="ml-3 mt-2 space-y-2">
              <Link
                to="/electricity"
                onClick={toggleMenu}
                className="block text-gray-600 hover:text-blue-600"
              >
                Electricity
              </Link>
              <Link
                to="/water"
                onClick={toggleMenu}
                className="block text-gray-600 hover:text-blue-600"
              >
                Water
              </Link>
              <Link
                to="/gas"
                onClick={toggleMenu}
                className="block text-gray-600 hover:text-blue-600"
              >
                Gas
              </Link>
              <Link
                to="/broadband"
                onClick={toggleMenu}
                className="block text-gray-600 hover:text-blue-600"
              >
                Broadband
              </Link>
            </div>
          </details>

          {navLinks
            .filter((link) => link.name !== "Home")
            .map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={toggleMenu}
                className={`font-medium text-gray-700 hover:text-blue-600 ${
                  location.pathname === link.path ? "text-blue-600" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}

          {/* Mobile Download Button */}
          <DownloadButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
