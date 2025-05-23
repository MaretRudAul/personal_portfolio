import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
  const router = useRouter();
  
  return (
    <nav className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/" className="cursor-pointer">
            Maret Rudin-Aulenbach
          </Link>
        </div>
        <div className="space-x-6">
          {[
            { name: 'projects', path: '/' },
            { name: 'about', path: '/about' }
          ].map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              className={`capitalize hover:text-accent ${
                (path === '/' && (router.pathname === '/' || router.pathname === '/projects')) || 
                router.pathname === path 
                  ? 'text-accent font-semibold' 
                  : ''
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;