import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Layout({ children }: { children?: React.ReactNode }) {
  const { user, login, logout } = useAuth();
  const location = useLocation();

  const navLinks = [
    { name: 'Discover', path: '/' },
    { name: 'Search', path: '/search' },
    { name: 'My Library', path: '/library' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background font-sora">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-outline-variant/30 sticky top-0 bg-surface/80 backdrop-blur-md z-50">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-2">
            <span className="material-symbols-outlined text-primary text-3xl">auto_stories</span>
            <span className="font-headline-lg font-bold text-xl tracking-tight text-primary">Furlio</span>
          </Link>
          <div className="hidden md:flex space-x-6 text-sm font-medium relative top-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`pb-2 transition-colors ${
                    isActive 
                      ? 'text-primary border-b-2 border-primary' 
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-2xl">search</span>
          </button>

          {user ? (
            <div className="flex items-center space-x-3 group relative cursor-pointer" onClick={logout}>
              <img 
                src={user.photoURL || "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"} 
                alt="Avatar" 
                className="w-9 h-9 rounded-full ring-2 ring-primary-container object-cover"
              />
            </div>
          ) : (
            <button 
              onClick={login}
              className="flex items-center space-x-2 bg-primary-container/20 hover:bg-primary-container/40 text-primary px-4 py-2 rounded-full font-medium transition-colors text-sm"
            >
              <span className="material-symbols-outlined text-lg">login</span>
              <span>Discord Login</span>
            </button>
          )}
        </div>
      </nav>

      <main className="flex-1 flex flex-col">
        {children || <React.Fragment />}
      </main>

      <footer className="border-t border-outline-variant/30 py-8 mt-12 bg-surface-container-lowest">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-on-surface-variant">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="material-symbols-outlined text-xl">pets</span>
            <span>Made with paws for the fandom.</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-primary transition-colors">Rules</a>
            <a href="#" className="hover:text-primary transition-colors">DMCA</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
