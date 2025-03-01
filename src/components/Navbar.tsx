import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center">
            <button 
              className="mr-2 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600">Infinity<span className="text-emerald-500">Learn</span></span>
            </Link>
          </div>

          {/* Search Bar - Hidden on mobile unless expanded */}
          <div className={`${isSearchExpanded ? 'flex absolute left-0 right-0 top-0 bg-white p-3 shadow-md' : 'hidden md:flex'} flex-1 max-w-2xl mx-4`}>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search educational videos..."
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              {isSearchExpanded && (
                <button 
                  className="absolute right-3 top-2.5 md:hidden"
                  onClick={() => setIsSearchExpanded(false)}
                >
                  <X size={20} className="text-gray-500" />
                </button>
              )}
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center">
            <button 
              className="md:hidden mr-2"
              onClick={() => setIsSearchExpanded(true)}
            >
              <Search size={24} className="text-gray-700" />
            </button>
            <Link to="/notifications" className="p-2 text-gray-700 hover:bg-gray-100 rounded-full">
              <Bell size={24} />
            </Link>
            <Link to="/login" className="p-2 text-gray-700 hover:bg-gray-100 rounded-full ml-1">
              <User size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <nav className="container mx-auto px-4">
            <ul className="space-y-2">
              <li>
                <Link to="/" className="block py-2 px-4 hover:bg-gray-100 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/progress" className="block py-2 px-4 hover:bg-gray-100 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
                  My Progress
                </Link>
              </li>
              <li>
                <Link to="/login" className="block py-2 px-4 hover:bg-gray-100 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;