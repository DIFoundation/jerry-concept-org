
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Jerry Concept Organization</h3>
            <p className="text-gray-300 mb-4">
              Your trusted place for computer services and tech education.
            </p>
            <div className="flex gap-4">
              {/* Social media icons would go here */}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/training" className="text-gray-300 hover:text-white transition-colors">Training Programs</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-gray-300">
                <MapPin size={18} className="text-blue-300" /> 
                123 Tech Street, City Name
              </p>
              <p className="flex items-center gap-2 text-gray-300">
                <Phone size={18} className="text-blue-300" /> 
                +234 123 456 7890
              </p>
              <p className="flex items-center gap-2 text-gray-300">
                <Mail size={18} className="text-blue-300" /> 
                info@jerryconcept.com
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Jerry Concept Organization. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
