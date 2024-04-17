/*import React from 'react';

const SkillsSection = () => {
  return (
    <section className="bg-gray-800 text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Languages</h3>
            <ul>
              <li>C/C++</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>TypeScript</li> 
              <li>Dart</li> 
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
              <li>Vite</li>
              <li>Firebase</li> 
              <li>MERN Stack</li>
              <li>JWT</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Tools & Libraries</h3>
            <ul>
              <li>Git</li>
              <li>Vercel</li> 
              <li>Material-UI (MUI)</li> 
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
              <li>React-Native</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;*/

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faServer, faGlobe } from '@fortawesome/free-solid-svg-icons'; // Import the icons you need

const SkillsSection = () => {
  return (
    <section className="bg-gray-800 text-white p-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Skill cards */}
          <SkillCard category="Languages" skills={[
            { name: 'C/C++', icon: faCode },
            { name: 'Java', icon: faCode },
            { name: 'JavaScript', icon: faCode },
            { name: 'Python', icon: faCode },
            { name: 'TypeScript', icon: faCode },
            { name: 'Dart', icon: faCode }
          ]} />
          <SkillCard category="Web Development" skills={[
            { name: 'React.js', icon: faGlobe },
            { name: 'Next.js', icon: faGlobe },
            { name: 'Express.js', icon: faGlobe },
            { name: 'Node.js', icon: faGlobe },
            { name: 'Socket.io', icon: faGlobe },
            { name: 'Vite', icon: faGlobe },
            { name: 'Firebase', icon: faGlobe },
            { name: 'MERN Stack', icon: faGlobe },
            { name: 'JWT', icon: faGlobe }
          ]} />
          <SkillCard category="Tools & Libraries" skills={[
            { name: 'Git', icon: faServer },
            { name: 'Vercel', icon: faServer },
            { name: 'Material-UI (MUI)', icon: faServer },
            { name: 'Redux', icon: faServer }
          ]} />
          <SkillCard category="Mobile Development" skills={[
            { name: 'Dart', icon: faDatabase },
            { name: 'Flutter', icon: faDatabase },
            { name: 'React-Native', icon: faDatabase }
          ]} />
        </div>
      </div>
    </section>
  );
}

const SkillCard = ({ category, skills }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">{category}</h3>
      <ul>
        {skills.map(skill => (
          <li key={skill.name}>
            <FontAwesomeIcon icon={skill.icon} className="text-gray-500 mr-2" />
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsSection;

