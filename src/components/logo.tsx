import React from 'react';

export const Logo = () => {
  return (
    <div className="flex items-center gap-2 text-foreground">
        <img src="/images/logo.png" alt="Logo" className="h-[40px] w-auto" />
        <span className="font-bold text-xl hidden sm:inline-block">Digi Media Komunika</span>
    </div>
  );
};
