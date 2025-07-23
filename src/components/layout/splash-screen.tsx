
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Logo } from '../logo';

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Timer untuk menyembunyikan splash screen setelah 5 detik
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // 5000 milidetik = 5 detik

    const video = videoRef.current;
    if (video) {
        // Memastikan video diputar
        video.play().catch(error => {
            console.error("Video autoplay was prevented:", error);
            // Jika video diblokir, tetap sembunyikan setelah 5 detik
        });
    }

    return () => {
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
