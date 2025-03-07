import { Link } from 'react-router-dom';
import { Users, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-emerald-800 dark:bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Users className="h-6 w-6" />
              <span className="font-bold text-lg">League Manager</span>
            </div>
            <p className="text-emerald-100">
              Streamline your youth sports league management with our comprehensive system.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-emerald-100 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/registration" className="text-emerald-100 hover:text-white">Registration</Link>
              </li>
              <li>
                <Link to="/attendance" className="text-emerald-100 hover:text-white">Attendance</Link>
              </li>
              <li>
                <Link to="/search" className="text-emerald-100 hover:text-white">Search</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>ryanbyrone47@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+254-719-174-450</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Ngong, Kenya</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-emerald-100 mb-4">
              Subscribe to our newsletter for updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md w-full text-gray-900"
              />
              <button
                type="submit"
                className="bg-emerald-600 px-4 py-2 rounded-r-md hover:bg-emerald-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-emerald-700 mt-8 pt-8 text-center text-emerald-100">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved. Design by BECHIMP Distribution by JumaWebHub</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;