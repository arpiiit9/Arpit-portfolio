import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center font-poppins">
        <div className="text-xl font-bold">
          <a href="#" className="text-white">My Portfolio</a>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#skills" className="text-white hover:text-gray-300">Skills</a></li>
            <li><a href="#projects" className="text-white hover:text-gray-300">Projects</a></li>
            <li><a href="#about" className="text-white hover:text-gray-300">About</a></li>
            <li><a href="#github" className="text-white hover:text-gray-300">GitHub</a></li>
            <li><a href="#home" className="text-white hover:text-gray-300">Home</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
