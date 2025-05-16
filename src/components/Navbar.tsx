import React from 'react';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => (
  <nav className="bg-primary text-white shadow-md">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div
        className="text-2xl font-bold cursor-pointer"
        onClick={() => setActivePage('projects')}
      >
        Maret Rudin-Aulenbach
      </div>
      <div className="space-x-6">
        {['projects', 'about'].map(page => (
          <button
            key={page}
            onClick={() => setActivePage(page)}
            className={`capitalize hover:text-accent ${
              activePage === page ? 'text-accent font-semibold' : ''
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  </nav>
);

export default Navbar;