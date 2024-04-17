import React from 'react';

const Education = () => {
  return (
    <section className="bg-gray-800 text-white p-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Education</h2>

        {/* Bachelor's Degree */}
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg p-6 flex justify-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-2">Bachelor of Technology in Computer Science and Engineering</h3>
            <p className="text-gray-400 mb-1">Sudhila Devi Bansal College of Technology, Indore, India</p>
            <p className="text-gray-400 mb-1">Year of Graduation: 2025</p>
            <p className="text-gray-400">Thesis: Developed an application using machine learning and Python to prevent road accidents due to driver drowsiness. Implemented a drowsiness detection system that alerts the driver when they are sleepy.</p>
          </div>
        </div>

        {/* Add more education entries here if needed */}
      </div>
    </section>
  );
}

export default Education;
