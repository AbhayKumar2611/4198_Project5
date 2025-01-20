import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png"; // Updated to use Logo.png

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg fixed top-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Happy Calories Logo"
            className="h-10 w-10 mr-3"
          />
          <span className="text-xl font-bold">Happy Calories</span>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-gray-700" : "hover:bg-red-700"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/scan"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-gray-700" : "hover:bg-gray-700"
              }`
            }
          >
            Scan QR Code
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-gray-700" : "hover:bg-gray-700"
              }`
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/inventory"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-gray-700" : "hover:bg-gray-700"
              }`
            }
          >
            Inventory
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-gray-700" : "hover:bg-gray-700"
              }`
            }
          >
            Settings
          </NavLink>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-800 shadow-lg flex flex-col items-start px-4 py-2 space-y-2 mt-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-gray-700" : "hover:bg-red-700"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/scan"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-gray-700" : "hover:bg-gray-700"
              }`
            }
          >
            Scan QR Code
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-gray-700" : "hover:bg-gray-700"
              }`
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/inventory"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-gray-700" : "hover:bg-gray-700"
              }`
            }
          >
            Inventory
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-gray-700" : "hover:bg-gray-700"
              }`
            }
          >
            Settings
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
