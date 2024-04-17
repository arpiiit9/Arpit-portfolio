import React from 'react';
import './About.css'; // Import the CSS file for styling

const AboutMe = () => {
  return (
    <section className="about-me-container bg-gray-800 text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="about-me-content">
          <p>👋 Hey there! I'm Arpit Trivedi, a passionate full-stack developer with a knack for crafting robust web applications. 💻</p>
          <p>🌟 I specialize in utilizing a diverse stack of technologies including MongoDB, React.js, Next.js, Tailwind CSS, SCSS, Node.js, Express.js, and Django to build dynamic and performant web solutions. 💡</p>
          <p>🚀 My journey in software development began with a fascination for building things that not only look great but also work flawlessly. From tinkering with simple scripts to architecting complex systems, I've always been drawn to the art and science of coding. 🔧</p>
          <p>🔍 You'll find a variety of projects in my repository, each showcasing my proficiency in building end-to-end solutions using the latest tools and technologies. From e-commerce platforms to social networking apps, I'm passionate about solving real-world problems through innovative software solutions. 🛠️</p>
          <p>💬 I actively contribute to open-source projects and communities, believing in the power of collaboration and knowledge sharing. Whether it's fixing bugs, adding features, or helping fellow developers, I'm always eager to make a positive impact on the tech community. 🌐</p>
          <p>📧🔗🐦 Let's connect and collaborate! Feel free to reach out to me via email, LinkedIn, or Twitter. I'm always open to new opportunities, collaborations, and engaging discussions. 🚀</p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
