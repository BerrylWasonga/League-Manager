import { Link } from 'react-router-dom';
import { Users, ClipboardCheck, Search as SearchIcon, Home, LogIn, UserPlus } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useAuthStore } from '../store/authStore';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuthStore();

  return (
    <nav className="bg-emerald-600 dark:bg-emerald-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Users className="h-8 w-8" />
            <span className="font-bold text-xl">League Manager</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-1 hover:bg-emerald-700 px-3 py-2 rounded-md">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="hover:bg-emerald-700 px-3 py-2 rounded-md">
                  Dashboard
                </Link>
                <Link to="/registration" className="flex items-center space-x-1 hover:bg-emerald-700 px-3 py-2 rounded-md">
                  <Users className="h-5 w-5" />
                  <span>Registration</span>
                </Link>
                <Link to="/attendance" className="flex items-center space-x-1 hover:bg-emerald-700 px-3 py-2 rounded-md">
                  <ClipboardCheck className="h-5 w-5" />
                  <span>Attendance</span>
                </Link>
                <Link to="/search" className="flex items-center space-x-1 hover:bg-emerald-700 px-3 py-2 rounded-md">
                  <SearchIcon className="h-5 w-5" />
                  <span>Search</span>
                </Link>
                <button
                  onClick={logout}
                  className="hover:bg-emerald-700 px-3 py-2 rounded-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="flex items-center space-x-1 hover:bg-emerald-700 px-3 py-2 rounded-md">
                  <LogIn className="h-5 w-5" />
                  <span>Login</span>
                </Link>
                <Link to="/signup" className="flex items-center space-x-1 hover:bg-emerald-700 px-3 py-2 rounded-md">
                  <UserPlus className="h-5 w-5" />
                  <span>Sign Up</span>
                </Link>
              </>
            )}
            
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;