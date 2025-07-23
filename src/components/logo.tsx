import React from 'react';

export const Logo = () => {
  return (
    <div className="flex items-center gap-2 text-white">
        <img src="/images/logo.png" alt="Logo" className="h-[50px] w-auto invert brightness-0" />
        <span className="font-bold text-xl">Digi Media Komunika</span>
    </div>
  );
};
