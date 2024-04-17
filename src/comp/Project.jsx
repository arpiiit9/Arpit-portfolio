import React from 'react';

const ProjectSection = () => {
    // Define an array of your projects with titles, live links, and thumbnail URLs
    const projects = [
        {
            title: "Zoom Clone",
            liveLink: "https://zoom-clone-live-link.com",
            thumbnail:""

        },
        {
            title: "URL Shortener",
            liveLink: "https://url-shortener-live-link.com",
            // No thumbnail available
        },
        {
            title: "URL Shortener",
            liveLink: "https://url-shortener-live-link.com",
            // No thumbnail available
        },
        {
            title: "URL Shortener",
            liveLink: "https://url-shortener-live-link.com",
            // No thumbnail available
        },
        {
            title: "URL Shortener",
            liveLink: "https://url-shortener-live-link.com",
            // No thumbnail available
        },
        {
            title: "URL Shortener",
            liveLink: "https://url-shortener-live-link.com",
            // No thumbnail available
        },
        // Add more projects here
    ];

    return (
        <section className="bg-gray-800 text-white py-20">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Project cards */}
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                            {project.thumbnail ? (
                                <img src={project.thumbnail} alt={project.title} className="w-full" />
                            ) : (
                                <div className="bg-gray-700 h-48"></div>
                            )}
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg inline-block">Visit Live</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;
