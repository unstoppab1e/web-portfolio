import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-4 text-center font-mono">        
        <p className="text-sm dark:text-[#A1A1AA]">
            &copy; {new Date().getFullYear()} - Temirbekov Abdirakhym. All rights reserved.
        </p>
    </footer>
  );
};

export default Footer;