import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 w-full">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl">Job Portal</div>

        {/* Hamburger Icon - Visible on Small Screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none focus:ring-0"
          >
            ☰
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 text-white">
          <a
            href="/"
            className="hover:scale-125 transition-transform duration-100"
          >
            Home
          </a>
          <a
            href="/login"
            className="hover:scale-125 transition-transform duration-100"
          >
            Login
          </a>
          <a
            href="/register"
            className="hover:scale-125 transition-transform duration-100"
          >
            Register
          </a>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="flex flex-col mt-2 gap-2 text-white md:hidden">
          <a
            href="/"
            className="hover:scale-105 transition-transform duration-200"
          >
            Home
          </a>
          <a
            href="/login"
            className="hover:scale-105 transition-transform duration-200"
          >
            Login
          </a>
          <a
            href="/register"
            className="hover:scale-105 transition-transform duration-200"
          >
            Register
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
