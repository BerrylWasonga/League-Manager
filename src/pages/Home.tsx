import { Link } from 'react-router-dom';
import { Users, ClipboardCheck, Search as SearchIcon } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative bg-emerald-700 h-[500px] flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-emerald-900/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            League Registration & Attendance System
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Streamline your youth sports league management with our comprehensive registration and attendance tracking system.
          </p>
          <Link
            to="/registration"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Key Features
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Registration</h3>
            <p className="text-gray-600">
              Easy registration process for children across different age categories (U8 to U18) with automatic age validation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <ClipboardCheck className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Attendance</h3>
            <p className="text-gray-600">
              Track daily attendance efficiently with our user-friendly interface and prevent duplicate entries.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <SearchIcon className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Search</h3>
            <p className="text-gray-600">
              Quick and easy search functionality to find children or entire teams with detailed information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;