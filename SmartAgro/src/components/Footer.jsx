import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white" aria-labelledby="footer-heading">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 id="footer-heading" className="sr-only">
          SmartAgro footer
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          <section aria-labelledby="footer-brand-heading">
            <h3 id="footer-brand-heading" className="text-2xl font-bold text-green-300">
              SmartAgro     
            </h3>
            <p className="mt-4 text-gray-300">
              Empowering farmers with crop insights, seasonal guidance, and modern agricultural knowledge.
            </p>
          </section>

          <nav aria-labelledby="footer-links-heading">
            <h3 id="footer-links-heading" className="text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/home" className="hover:text-green-300 focus-visible:outline-green-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cropguide" className="hover:text-green-300 focus-visible:outline-green-300">
                  Crops
                </Link>
              </li>
              <li>
                <Link to="/purchase" className="hover:text-green-300 focus-visible:outline-green-300">
                  Purchase
                </Link>
              </li>
            </ul>
          </nav>

          <section aria-labelledby="footer-services-heading">
            <h3 id="footer-services-heading" className="text-lg font-semibold mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>Crop Information</li>
              <li>Seasonal Guidance</li>
              <li>Farming Tips</li>
              <li>Weather Insights</li>
            </ul>
          </section>

          <address className="not-italic" aria-labelledby="footer-contact-heading">
            <h3 id="footer-contact-heading" className="text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <p className="text-gray-300">
              <a href="mailto:support@smartagro.com" className="hover:text-green-300 focus-visible:outline-green-300">
                support@smartagro.com
              </a>
            </p>
            <p className="text-gray-300 mt-2">
              <a href="tel:+919412632757" className="hover:text-green-300 focus-visible:outline-green-300">
                +91 94126 32757
              </a>
            </p>
          </address>
        </div>

        <p className="border-t border-green-700 mt-10 pt-6 text-center text-gray-300">
          &copy; {new Date().getFullYear()} SmartAgro. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
