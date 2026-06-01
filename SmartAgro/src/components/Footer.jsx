import React from "react";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaTwitter,
//   FaLinkedin,
// } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">

          {/* Brand */} 
          <div>
            <h2 className="text-2xl font-bold text-green-300">
              SmartAgro
            </h2>
            <p className="mt-4 text-gray-300">
              Empowering farmers with crop insights, seasonal guidance,
              and modern agricultural knowledge.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/" className="hover:text-green-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/cropguide" className="hover:text-green-300">
                  Crops
                </a>
              </li>
              {/* <li>
                <a href="/seasons" className="hover:text-green-300">
                  Crop Seasons
                </a>
              </li> */}
              <li>
                <a href="/purchase" className="hover:text-green-300">
                  Purchase
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>Crop Information</li>
              <li>Seasonal Guidance</li>
              <li>Farming Tips</li>
              <li>Weather Insights</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <p className="text-gray-300">
              support@smartagro.com
            </p>
            <p className="text-gray-300 mt-2">
              +91 94126 32757
            </p>
{/* 
            <div className="flex gap-4 mt-5 text-xl">
              <a href="#" className="hover:text-green-300">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-green-300">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-green-300">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-green-300">
                <FaLinkedin />
              </a>
            </div> */}
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-green-700 mt-10 pt-6 text-center text-gray-300">
          © {new Date().getFullYear()} SmartAgro. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;  