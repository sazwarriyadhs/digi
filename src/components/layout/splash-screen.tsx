
'use client';

import React, { useState, useEffect } from 'react';
import { Logo } from '../logo';

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the splash screen after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`splash-screen ${!isVisible ? 'hidden' : ''}`}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="splash-video"
      >
        <source src="/videos/digimedia.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 splash-logo">
        <Logo />
      </div>
    </div>
  );
}
