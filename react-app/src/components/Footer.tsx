import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-gray-900/50 backdrop-blur-md text-gray-300 border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Origen
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Empowering students and professionals with cutting-edge training and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-cyan-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm hover:text-cyan-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm hover:text-cyan-400 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/resources" className="text-sm hover:text-cyan-400 transition-colors">
                  Learning Resources
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm hover:text-cyan-400 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-cyan-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-sm">123 Education Street, Tech City, TC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm">info@origen.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Origen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

