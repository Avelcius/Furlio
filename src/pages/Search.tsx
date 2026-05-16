import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Search() {
  const [activeTab, setActiveTab] = useState('Tropes');

  const tabs = ['Tropes', 'Atmosphere', 'Dynamics', 'Species', 'NSFW Filters'];
  
  const tropes = [
    { name: 'Enemies to Lovers', count: '1.2k', active: true },
    { name: 'Found Family', count: '850', active: false },
    { name: 'Cyberpunk', count: '420', active: false },
    { name: 'Post-Apocalyptic', count: '630', active: false },
    { name: 'Slice of Life', count: '2.1k', active: false },
    { name: 'Magic Academy', count: '310', active: false },
    { name: 'Space Opera', count: '180', active: false },
    { name: 'Mystery', count: '540', active: false },
  ];

  const results = [
    { id: 1, title: 'Neon Genesis: Anthro', author: 'Kiba Wolf', tags: ['Sci-Fi', 'Action'], src: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2694&auto=format&fit=crop' },
    { id: 2, title: 'Blade Runner: Tails', author: 'Nexus 6', tags: ['Cyberpunk', 'Mystery'], src: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2670&auto=format&fit=crop' },
    { id: 3, title: 'Alloy & Bone', author: 'TechPriest', tags: ['Sci-Fi', 'Drama'], src: 'https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=2626&auto=format&fit=crop' },
    { id: 4, title: 'Synthetic Seoul', author: 'K-Pop Fox', tags: ['Cyberpunk', 'Action'], src: 'https://images.unsplash.com/photo-1518558356942-c368ff617781?q=80&w=2670&auto=format&fit=crop' },
  ];

  return (
    <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
      {/* Sidebar - Smart Search Filters */}
      <aside className="w-full md:w-1/4 flex-shrink-0">
        <h1 className="text-3xl font-headline-lg font-bold text-on-surface mb-8">Smart Search</h1>
        
        {/* Search Input */}
        <div className="relative mb-8">
          <input 
            type="text" 
            placeholder="Search comics, authors, or tags..." 
            className="w-full bg-surface-container-high border border-outline-variant/30 text-on-surface rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-on-surface-variant/50"
          />
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
        </div>

        {/* Filter Categories Tabs */}
        <div className="flex overflow-x-auto md:flex-col space-x-2 md:space-x-0 md:space-y-2 mb-8 pb-2 md:pb-0 hide-scrollbar">
          {tabs.map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-colors whitespace-nowrap ${
                activeTab === tab 
                  ? 'bg-primary-container/20 text-primary' 
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
            >
              <span>{tab}</span>
              {activeTab === tab && <span className="material-symbols-outlined text-sm">chevron_right</span>}
            </button>
          ))}
        </div>

        {/* Dynamic Filter Area Based on Tab */}
        <div className="bg-surface-container rounded-2xl p-6">
          <h3 className="font-bold text-on-surface mb-4">Explore by {activeTab}</h3>
          <div className="flex flex-wrap gap-2">
            {tropes.map((trope, idx) => (
              <button 
                key={idx}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center space-x-1 ${
                  trope.active 
                    ? 'bg-primary text-on-primary' 
                    : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface border border-outline-variant/30'
                }`}
              >
                <span>{trope.name}</span>
                <span className={`text-[10px] ${trope.active ? 'text-on-primary/80' : 'text-on-surface-variant/50'}`}>{trope.count}</span>
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content - Results */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <span className="text-on-surface-variant">Active Filters:</span>
            <span className="px-3 py-1 bg-primary-container/20 text-primary border border-primary/30 rounded-full text-xs font-bold flex items-center space-x-1">
              <span>Enemies to Lovers</span>
              <button className="material-symbols-outlined text-[14px] hover:text-primary-fixed">close</button>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-on-surface-variant">42 Results</span>
            <button className="flex items-center space-x-1 text-sm font-medium text-on-surface hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-sm">sort</span>
              <span>Sort by Popularity</span>
            </button>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {results.map((comic) => (
            <Link key={comic.id} to={`/comic/${comic.id}`} className="group cursor-pointer">
              <div className="relative aspect-[2/3] rounded-2xl overflow-hidden mb-4 bg-surface-container-high">
                <img src={comic.src} alt={comic.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80"></div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-8 h-8 rounded-full bg-surface/80 text-on-surface flex items-center justify-center backdrop-blur-md hover:text-primary">
                    <span className="material-symbols-outlined text-sm">bookmark_add</span>
                  </button>
                </div>
              </div>
              <h3 className="font-bold text-on-surface mb-1 truncate group-hover:text-primary transition-colors">{comic.title}</h3>
              <p className="text-sm text-on-surface-variant mb-2">{comic.author}</p>
              <div className="flex space-x-2">
                {comic.tags.map((tag, idx) => (
                  <span key={idx} className="bg-surface-container-high text-on-surface-variant text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
