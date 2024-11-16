import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Link } from "react-router-dom"; // Add this import
import logo from "../header/Ardo Cars.png";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header className="relative bg-white shadow-sm h-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-18">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <img src={logo} alt="Logo" className="w-20 h-14" />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-red-500 font-medium">
              HOME
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              CONTACT
            </Link>
            <button className="text-gray-600 hover:text-gray-900">
              <Search size={20} />
            </button>
          </nav>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsDrawerOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 w-64 bg-white">
            <div className="p-4">
              <div className="flex justify-end">
                <Link to="/">
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <X size={24} />
                  </button>
                </Link>
              </div>

              <nav className="mt-8 flex flex-col space-y-4">
                <Link to="/" className="text-red-500 font-medium px-2 py-1">
                  HOME
                </Link>
                <Link
                  to="/brands"
                  className="text-gray-600 hover:text-gray-900 font-medium px-2 py-1"
                >
                  BRAND INDEX
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-gray-900 font-medium px-2 py-1"
                >
                  CONTACT
                </Link>
                <button className="text-gray-600 hover:text-gray-900 flex items-center px-2 py-1">
                  <Search size={20} className="mr-2" />
                  Search
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
