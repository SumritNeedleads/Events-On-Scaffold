
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">EVENTS ON</h1>
                <p className="text-sm text-gray-300">SCAFFOLD</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for safe and reliable scaffolding solutions in Hyderabad. 
              We provide premium scaffolding rental services for events, construction, and 
              industrial projects with uncompromising safety standards.
            </p>
            
            <div className="flex items-center space-x-2 text-gray-300">
              <Clock className="w-5 h-5 text-accent" />
              <span>Available 24/7 for Emergency Support</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-accent transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-accent group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="pt-4 border-t border-gray-700">
              <h4 className="font-semibold text-white mb-3">Our Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Aluminium Scaffolding</li>
                <li>• Cuplock Scaffolding</li>
                <li>• Ringlock Scaffolding</li>
              </ul>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Contact Us</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Address</h4>
                  <p className="text-gray-300 text-sm">
                    {/* MN Scaffolding Services<br />
                    Hyderabad, Telangana<br />
                    India - 500001 */}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Phone</h4>
                  <a 
                    href="tel:+919958273993" 
                    className="text-gray-300 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    +91 9958273993
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <a 
                    href="mailto:eventsonscaffold@gmail.com" 
                    className="text-gray-300 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    eventsonscaffold@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link to="/contact" className="w-full block text-center text-lg bg-accent text-white py-3 px-6 rounded-lg hover:bg-[#5d5d5d] transition-colors duration-300 font-medium">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-gray-700 bg-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 NEEDLEADS TECHNOLOGY. All Rights Reserved.
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-accent transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-accent transition-colors duration-300">
                Safety Guidelines
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
