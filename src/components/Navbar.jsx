import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm shadow-md">
      {/* 🔴 PASTE YOUR NAVBAR JSX HERE (unchanged) */}
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-800">
          <span className="text-orange-600">D</span>eveloper
          <span className="text-orange-600">&</span>Engineer
        </div>

        {/* Desktop Menu */}
        <div className="space-x-6 hidden md:flex">
          <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
          <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
          <a href="#skills" className="text-gray-700 hover:text-blue-600 font-medium">Skills</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3 shadow-md animate-fadeIn">
          <a href="#home" className="block text-gray-700 hover:text-blue-600 font-medium">Home</a>
          <a href="#services" className="block text-gray-700 hover:text-blue-600 font-medium">Services</a>
          <a href="#skills" className="block text-gray-700 hover:text-blue-600 font-medium">Skills</a>
          <a href="#contact" className="block text-gray-700 hover:text-blue-600 font-medium">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;