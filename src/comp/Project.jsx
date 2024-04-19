import React from 'react';
import { useEffect ,useRef } from 'react';``
const ProjectSection = () => {
    // Define an array of your projects with titles, live links, and thumbnail URLs
    const projects = [
        {
            title: "Zoom Clone",
            liveLink: "https://zoom-clone-live-link.com",
            

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

    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        let animationFrame;

        const animateProjects = () => {
            if (container.scrollLeft >= container.scrollWidth - container.offsetWidth) {
                container.scrollLeft = 2;
            } else {
                container.scrollLeft += 0.5; // Adjust the speed of scrolling here
            }
            animationFrame = requestAnimationFrame(animateProjects);
        };

        container.addEventListener('mouseenter', () => cancelAnimationFrame(animationFrame));
        container.addEventListener('mouseleave', () => {
            animationFrame = requestAnimationFrame(animateProjects);
        });

        animationFrame = requestAnimationFrame(animateProjects);

        return () => cancelAnimationFrame(animationFrame);
    }, []);

    return (
        <section className="bg-gray-800 text-white py-20">
            <div className="container mx-auto overflow-x-hidden" ref={containerRef}>
                <h2 className="text-3xl font-bold mb-8">Projects</h2>
                <div className="flex gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className=" w-[400px] bg-gray-900 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
                            {project.thumbnail ? (
                                <img src={project.thumbnail} alt={project.title} className="w-full" />
                            ) : (
                                <div className="bg-gray-700 w h-48"></div>
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