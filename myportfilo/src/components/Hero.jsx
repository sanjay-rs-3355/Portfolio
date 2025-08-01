import React from 'react';
import Orb from './Particles';
import profileImage from '../assets/profile.jpg'; // use your image path

const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative w-[250px] h-[250px] rounded-full">
        <Orb width={250} height={250} />
        <img
          src={profileImage}
          alt="Profile"
          className="absolute inset-0 w-full h-full rounded-full z-10 object-cover border-4 border-white"
        />
      </div>
    </div>
  );
};

export default Hero;
