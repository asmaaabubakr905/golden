import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import logo from '../assets/WhatsAppImage2025-07-04at00.56.28_e95a1a63.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10  rounded-full flex items-center justify-center">
              <img src={logo} alt="Golden Phoenix Tours Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-xl font-bold">GOLDEN PHOENIX</div>
                <div className="text-sm text-gray-300">TOURS & TRAVEL</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Discover the wonders of Egypt with Golden Phoenix Tours. We offer carefully curated 
              experiences across Cairo, Alexandria, Luxor, Aswan, and beyond. Your journey to 
              ancient civilizations starts here.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1BqnbCHoTA/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/golden_phoenix_tours"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/tours" className="text-gray-300 hover:text-white transition-colors">Tours</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="http://wa.me/201507000720" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Book Now</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300">Aswan, Egypt</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300">+20 150 700 0720</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300">info@goldenphoenix.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center text-gray-400 text-sm">
            © 2024 Golden Phoenix Tours. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;