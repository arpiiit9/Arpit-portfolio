import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white p-20 flex flex-col md:flex-row items-center">
      {/* Left side content */}
      <div className="md:w-1/2 p-4">
        <h1 className="text-4xl md:text-6xl font-bold">Hey, I'm Arpit</h1>
        <p className="text-lg md:text-xl mt-4">and I'm a developer</p>
        {/* "Contact Me" button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-6 md:mt-8 rounded-lg">Contact Me</button>
      </div>
      {/* Right side content (example image) */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        {/* Example image */}
        <img src="https://i.postimg.cc/vm0yHLcK/0da128bad84144d48e158bf3524dc2fd.jpg" alt="Example Image" className="w-24 md:w-[200px] h-24 md:h-[200px] rounded-full shadow-l" />
      </div>
    </section>
  );
}

export default HeroSection;
