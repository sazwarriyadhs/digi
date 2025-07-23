
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Logo } from '../logo';

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      setIsVisible(false);
    };

    video.addEventListener('ended', handleVideoEnd);

    // Fallback timer in case the 'ended' event doesn't fire
    const timer = setTimeout(() => {
        setIsVisible(false);
    }, (video.duration || 5) * 1000); // Defaults to 5 seconds if duration is not available

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`splash-screen ${!isVisible ? 'hidden' : ''}`}>
      <video
        ref={videoRef}
        autoPlay
        muted
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
