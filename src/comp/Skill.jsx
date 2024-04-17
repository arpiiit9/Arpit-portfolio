import React from 'react';

const SkillsSection = () => {
  return (
    <section className="bg-gray-800 text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Skill cards */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Languages</h3>
            <ul>
              <li>C/C++</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>TypeScript</li> {/* Added TypeScript */}
              <li>Dart</li> {/* Added Dart */}
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Web Development</h3>
            <ul>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>Socket.io</li>
              <li>Vite</li> {/* Added Vite */}
              <li>Firebase</li> {/* Added Firebase */}
              <li>MERN Stack</li>
              <li>JWT</li> {/* Added JWT */}
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Tools & Libraries</h3>
            <ul>
              <li>Git</li> {/* Added Git */}
              <li>Vercel</li> {/* Added Vercel */}
              <li>Material-UI (MUI)</li> {/* Added MUI */}
              <li>Redux</li>
              <li>Firebase</li>
              <li>JWT</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Mobile Development</h3>
            <ul>
              <li>Dart</li>
              <li>Flutter</li>
              <li>React-Native</li>{/* Added Flutter */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
