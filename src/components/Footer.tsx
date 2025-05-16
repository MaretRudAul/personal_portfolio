import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-primary text-white py-4">
    <div className="container mx-auto text-center">
      © {new Date().getFullYear()} Maret Rudin-Aulenbach. All rights reserved.
    </div>
  </footer>
);

export default Footer;