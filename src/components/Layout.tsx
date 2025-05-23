// components/Layout.tsx
import React, { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-primary text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link href="/" className="cursor-pointer">
              Maret Rudin-Aulenbach
            </Link>
          </div>
          <div className="space-x-6">
            <Link 
              href="/" 
              className={`capitalize hover:text-accent ${
                router.pathname === '/' ? 'text-accent font-semibold' : ''
              }`}
            >
              Projects
            </Link>
            <Link 
              href="/about" 
              className={`capitalize hover:text-accent ${
                router.pathname === '/about' ? 'text-accent font-semibold' : ''
              }`}
            >
              About
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;