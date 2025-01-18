import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Navigation Links */}
        <div className="flex space-x-4">
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
          {/* Optional Sections */}
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
    </nav>
  );
};

export default Navbar;
