import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const newArrivals = [
    { id: 1, title: 'Neon Genesis: Anthro', author: 'Kiba Wolf', tags: ['Sci-Fi', 'Action', 'Mecha'], src: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2694&auto=format&fit=crop' },
    { id: 2, title: 'Tavern of the Damned', author: 'Red Tail', tags: ['Fantasy', 'Dark'], src: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=2670&auto=format&fit=crop' },
    { id: 3, title: 'Cyberpaws 2077', author: 'Glitch Fox', tags: ['Cyberpunk', 'NSFW'], src: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2670&auto=format&fit=crop' },
    { id: 4, title: 'Wild West Woofs', author: 'Sheriff Bark', tags: ['Western', 'Comedy'], src: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=2688&auto=format&fit=crop' },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero / Featured */}
      <section className="mb-20">
        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=2574&auto=format&fit=crop" 
            alt="Featured Comic" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-2/3">
            <span className="inline-block px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md">Exclusive</span>
            <h1 className="text-4xl md:text-5xl font-headline-xl font-bold text-on-surface mb-4 leading-tight">The Luminous Silence</h1>
            <p className="text-lg text-on-surface-variant mb-8 line-clamp-2 md:line-clamp-3">In a dystopian future where synth-furries are hunted, one lone wolf discovers a frequency that could change everything. A cyberpunk epic about identity and resistance.</p>
            
            <div className="flex items-center space-x-4">
              <Link to="/read/featured" className="flex items-center space-x-2 bg-primary text-on-primary px-6 md:px-8 py-3 rounded-full font-bold hover:bg-primary-fixed transition-colors">
                <span className="material-symbols-outlined">menu_book</span>
                <span>Read Chapter 1</span>
              </Link>
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container/80 text-on-surface hover:bg-surface-container-high transition-colors backdrop-blur-md">
                <span className="material-symbols-outlined">bookmark_add</span>
              </button>
            </div>
          </div>
          
          <div className="absolute top-6 right-6 px-3 py-1 bg-surface-container-highest/80 backdrop-blur-md border border-outline/30 rounded-lg flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-error"></span>
            <span className="text-xs font-bold text-on-surface uppercase tracking-wider">NSFW Filter: Active</span>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-headline-md font-bold text-on-surface">New Arrivals</h2>
          <a href="#" className="text-primary hover:text-primary-fixed text-sm font-bold flex items-center space-x-1">
            <span>View All</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {newArrivals.map((comic) => (
            <Link key={comic.id} to={`/comic/${comic.id}`} className="group cursor-pointer">
              <div className="relative aspect-[2/3] rounded-2xl overflow-hidden mb-4 bg-surface-container-high">
                <img 
                  src={comic.src} 
                  alt={comic.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
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
                {comic.tags.slice(0, 2).map((tag, idx) => (
                  <span key={idx} className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${tag === 'NSFW' ? 'bg-error-container text-on-error-container' : 'bg-surface-container-high text-on-surface-variant'}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
