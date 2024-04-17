import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Freelance Developer",
      company: "Hao Cafe",
      description: "Developed a React application for Hao Cafe, including an order system to streamline their marketing efforts.",
      startDate: "January 2023",
      endDate: "Present",
      liveLink: "https://hao-cafe.vercel.app/"
    }
  ];

  return (
    <section className="bg-gray-800 text-white p-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
              <p className="text-gray-400 mb-2">{experience.company}</p>
              <p className="mb-4">{experience.description}</p>
              <p className="text-gray-400">{experience.startDate} - {experience.endDate}</p>
              {experience.liveLink && (
                <a href={experience.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">View Project</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
