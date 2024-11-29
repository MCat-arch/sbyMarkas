import React from 'react';


const LinkTree = () => {
  const links = [
    { id: 1, label: "Bio", link: "https://helloworld-mcat-archs-projects.vercel.app/" },
    { id: 2, label: "GitHub", link: "https://github.com/MCat-arch" },
    { id: 3, label: "Instagram", link: "https://www.instagram.com" }
  ];

  return (
    <div className="linktree-container">
      <div className="card">
        {/* Profile Section */}
        <div className="profile-section">
          <img
            src="./src/assets/cat.jpg"
            alt="Profile"
            className="profile-img"
          />
          <h1 className="profile-name">Khoerunnisa Utami</h1>
          <p className="profile-bio">
            Short bio about yourself or your projects. Showcase your personality here!
          </p>
        </div>

        {/* Links Section */}
        <div className="links-section">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkTree;
