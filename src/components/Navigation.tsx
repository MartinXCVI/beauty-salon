import type { JSX } from "react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const NavigationBar = (): JSX.Element => {
  
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <nav className="bg-[#fdf6f0] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Left menu */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Desktop menu */}
            <div className="hidden sm:flex space-x-6">
              <a href="/" className="text-gray-800 hover:text-pink-500">
                Home
              </a>
              <a href="/about" className="text-gray-800 hover:text-pink-500">
                About
              </a>
              <div className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="text-gray-800 hover:text-pink-500 focus:outline-none"
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                >
                  Services
                </button>
                {servicesOpen && (
                  <div
                    className="absolute mt-2 w-40 bg-white rounded-md shadow-lg z-10"
                    role="menu"
                  >
                    <a
                      href="/hair-styling"
                      className="block px-4 py-2 text-gray-700 hover:bg-pink-50"
                      role="menuitem"
                    >
                      Hair Styling
                    </a>
                    <a
                      href="/nails"
                      className="block px-4 py-2 text-gray-700 hover:bg-pink-50"
                      role="menuitem"
                    >
                      Nails
                    </a>
                    <a
                      href="/skin-care"
                      className="block px-4 py-2 text-gray-700 hover:bg-pink-50"
                      role="menuitem"
                    >
                      Skin Care
                    </a>
                  </div>
                )}
              </div>
              <a href="/contact" className="text-gray-800 hover:text-pink-500">
                Contact
              </a>
            </div>
          </div>

          {/* Center logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 sm:hidden md:block">
            <a href="/" className="text-xl font-semibold text-gray-800">
              <img
                src="/images/beauty-salon-logo.png"
                alt="Beauty salon logo"
                className="w-13"
                loading="lazy"
                title="Beauty salon logo"
                aria-label="Beauty salon logo"
              />
            </a>
          </div>

          {/* Right WhatsApp */}
          <div>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[36px] h-[36px] inline-flex justify-center items-center px-2 py-2 border border-transparent text-4xl font-medium rounded-full text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
              aria-label="Button for contacting us via WhatsApp"
              title="Click for contacting us via WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-2 bg-[#fdf6f0] border-t border-gray-200">
          <a href="/" className="block text-gray-800 py-1">
            Home
          </a>
          <a href="/about" className="block text-gray-800 py-1">
            About
          </a>
          <details className="group">
            <summary className="text-gray-800 cursor-pointer py-1">
              Services
            </summary>
            <div className="ml-4 mt-1 space-y-1">
              <a href="/hair-styling" className="block text-gray-700">
                Hair Styling
              </a>
              <a href="/nails" className="block text-gray-700">
                Nails
              </a>
              <a href="/skin-care" className="block text-gray-700">
                Skin Care
              </a>
            </div>
          </details>
          <a href="/contact" className="block text-gray-800 py-1">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default NavigationBar