
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">CNMI Ports Authority</h3>
            <p className="text-gray-300 text-sm mb-4">
              Connecting the Commonwealth through efficient and reliable port operations across Saipan, Tinian, and Rota.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <div className="w-6 h-6 bg-blue-400 rounded"></div>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/board" className="text-gray-300 hover:text-white transition-colors">Board of Directors</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/procurement" className="text-gray-300 hover:text-white transition-colors">Procurement</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/tariff-rates" className="text-gray-300 hover:text-white transition-colors">Tariff Rates</Link></li>
              <li><Link to="/documents" className="text-gray-300 hover:text-white transition-colors">Documents</Link></li>
              <li><Link to="/regulations" className="text-gray-300 hover:text-white transition-colors">Regulations</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="text-gray-300 text-sm space-y-2">
              <p>P.O. Box 1055</p>
              <p>Saipan, MP 96950</p>
              <p>Phone: (670) 664-3200</p>
              <p>Fax: (670) 664-3210</p>
              <p>Email: info@cnmiports.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2024 Commonwealth of the Northern Mariana Islands Ports Authority. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
