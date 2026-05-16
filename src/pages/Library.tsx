import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function Library() {
  const { user, login } = useAuth();
  const [activeTab, setActiveTab] = useState('Reading Now');

  const tabs = ['Reading Now', 'Favorites', 'History', 'Downloaded'];

  const readingNow = [
    { id: 1, title: 'Neon Genesis: Anthro', chapter: 'Chapter 12', progress: '75%', src: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2694&auto=format&fit=crop' },
    { id: 3, title: 'Cyberpaws 2077', chapter: 'Chapter 4', progress: '30%', src: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2670&auto=format&fit=crop' },
  ];

  if (!user) {
    return (
      <div className="container mx-auto px-6 py-24 flex flex-col items-center justify-center text-center">
        <span className="material-symbols-outlined text-6xl text-primary mb-4 opacity-50">library_books</span>
        <h2 className="text-3xl font-headline-lg font-bold text-on-surface mb-4">Your Library Awaits</h2>
        <p className="text-on-surface-variant mb-8 max-w-md">Login with Discord to save your reading progress, bookmark favorites, and sync across all your devices.</p>
        <button 
          onClick={login}
          className="flex items-center space-x-2 bg-primary text-on-primary px-8 py-3 rounded-full font-bold hover:bg-primary-fixed transition-colors"
        >
          <span className="material-symbols-outlined text-lg">login</span>
          <span>Discord Login</span>
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      {/* User Profile Area */}
      <div className="flex items-center space-x-6 mb-12">
        <img 
            src={user.photoURL || "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"} 
            alt="Avatar" 
            className="w-24 h-24 rounded-full ring-4 ring-primary object-cover"
        />
        <div>
          <h1 className="text-3xl font-headline-lg font-bold text-on-surface mb-1">{user.displayName || 'Reader'}</h1>
          <p className="text-on-surface-variant flex items-center space-x-2">
            <span className="material-symbols-outlined text-sm">mail</span>
            <span>{user.email}</span>
          </p>
        </div>
      </div>

      {/* Library Tabs */}
      <div className="flex space-x-8 border-b border-outline-variant/30 mb-8 overflow-x-auto hide-scrollbar">
        {tabs.map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 font-medium transition-colors whitespace-nowrap ${
              activeTab === tab 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Area */}
      {activeTab === 'Reading Now' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {readingNow.map((comic) => (
             <div key={comic.id} className="group relative aspect-[16/9] rounded-2xl overflow-hidden cursor-pointer">
              <img src={comic.src} alt={comic.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
              
              <div className="absolute top-4 right-4 bg-surface/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-on-surface">
                {comic.chapter}
              </div>
              
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-bold text-on-surface mb-2 truncate group-hover:text-primary transition-colors">{comic.title}</h3>
                
                <div className="w-full bg-surface-container-high rounded-full h-1.5 mb-1">
                  <div className="bg-primary h-1.5 rounded-full" style={{ width: comic.progress }}></div>
                </div>
                <div className="flex justify-between text-[10px] uppercase font-bold text-on-surface-variant tracking-wider">
                  <span>Progress</span>
                  <span>{comic.progress}</span>
                </div>
              </div>

              {/* Resume Button Overlay */}
              <div className="absolute inset-0 bg-surface/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <Link to={`/read/${comic.id}`} className="bg-primary text-on-primary px-6 py-2 rounded-full font-bold flex items-center space-x-2 transform scale-95 group-hover:scale-100 transition-all">
                  <span className="material-symbols-outlined text-sm">play_arrow</span>
                  <span>Resume</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
