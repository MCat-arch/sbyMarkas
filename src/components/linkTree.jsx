import React from 'react';
import image from "../assets/cat.jpg"


const LinkTree = () => {
  const links = [
    { id: 1, label: "Bio", link: "https://helloworld-mcat-archs-projects.vercel.app/" },
    { id: 2, label: "GitHub", link: "https://github.com/MCat-arch" },
    { id: 3, label: "Instagram", link: "https://www.instagram.com" }
  ];

  return (
    <div className="container">
        <div className='div-center'>
  <div className="card shadow-lg align-items-center" style={{ maxWidth: "400px", width: "100%" }}>
    {/* Profile Section */}
    <div className="card-body text-center">
      <img
        src={image}
        alt="Profile"
        className="rounded-circle img-thumbnail mb-3"
        style={{ width: "150px", height: "150px", objectFit: "cover" }}
      />
      <h1 className="card-title fs-4 fw-bold">Khoerunnisa Utami</h1>
      <p className="card-text text-muted">
        Hey there! Sup
      </p>

      {/* Links Section */}
      <div className="links-section mt-4">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark btn-lg w-100 mb-2"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </div>
  </div>
</div>


  
  );
};

export default LinkTree;