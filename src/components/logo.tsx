import React from 'react';

const LogoIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 68 78"
        fill="currentColor"
        {...props}
    >
        <path d="M67.5 19.887a4.6 4.6 0 00-2.3-3.98l-29.5-17.03a4.6 4.6 0 00-4.6 0L1.6 15.907a4.6 4.6 0 00-2.3 3.98v34.06a4.6 4.6 0 002.3 3.98l29.5 17.03a4.6 4.6 0 004.6 0l29.5-17.03a4.6 4.6 0 002.3-3.98V19.887z M32.8 65.987l-22-12.7v-25.4l22 12.7v25.4z m4.6-27.4l-22-12.7 22-12.7 22 12.7-22 12.7z m0 27.4l22-12.7v-25.4l-22 12.7v25.4z" />
    </svg>
);

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
 <img src="/images/logo.png" alt="Logo" className="h-[80px] w-auto" />
    </div>
  );
};
