// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Tailwind React App</h1>
        <ul className="flex space-x-4">
          <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Home</li>
          <li className="text-gray-700 hover:text-blue-500 cursor-pointer">About</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
