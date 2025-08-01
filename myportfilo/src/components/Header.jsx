import React from 'react';
import profile from '/sanjay.jpg';
import ParticlesBackground from './Particles';

function Header() {
  return (
    <header>
      <ParticlesBackground />
      <div className="overlay">
        <img src={profile} alt="Profile" className="profile-pic" />
        <h1 className="highlight">
          Hi, I'm <span>Sanjay</span>
        </h1>
        <p className="tagline">A passionate Developer and Tech Enthusiast</p>
        <a href="#contact" className="cta-button">Contact Me</a>
      </div>
    </header>
  );
}

export default Header;
