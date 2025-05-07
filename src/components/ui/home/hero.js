'use client';

import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <p className="text-sm sm:text-base">Performance in motion</p>
        <h1 className="text-2xl sm:text-4xl font-semibold mt-2">
          Soft Trims and NVH Solutions
        </h1>
        <p className="text-md sm:text-lg mt-2">for seamless rides</p>
      </div>
    </div>
  );
};

export default HeroSection;
