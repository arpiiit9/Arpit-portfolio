import React from 'react';

const ContactMe = () => {
  return (
    <section className="contact-me bg-gray-800 text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p>Feel free to reach out to me for any inquiries or collaborations!</p>
            <div className="social-icons mt-4 flex">
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="mr-4 hover:text-blue-500">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="mr-4 hover:text-blue-400">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="mr-4 hover:text-gray-700">
                <i className="fab fa-github fa-lg"></i>
              </a>
              {/* Add more social media icons as needed */}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap mt-4">
              <SocialMediaCard icon="fab fa-linkedin-in" username="@arpiiit9" />
              <SocialMediaCard icon="fab fa-twitter fa-lg" username="@arpiiit9" />
              <SocialMediaCard icon="fab fa-github fa-lg" username="@arpiiit9" />
              <SocialMediaCard icon="fab fa-youtube fa-lg" username="@arpiiit9" />
              <SocialMediaCard icon="fab fa-instagram fa-lg" username="@arpiiit9" />
              {/* Add more SocialMediaCard components with different icons and usernames as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SocialMediaCard = ({ icon, username }) => {
  return (
    <div className="social-media-card bg-gray-700 text-white rounded-lg p-4 m-2 flex items-center justify-center hover:bg-gray-600">
      <i className={icon}></i>
      <span className="ml-2">{username}</span>
    </div>
  );
}

export default ContactMe;
