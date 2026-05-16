import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Detail() {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Back Button */}
      <Link to="/" className="inline-flex items-center space-x-2 text-on-surface-variant hover:text-primary transition-colors mb-8">
        <span className="material-symbols-outlined text-sm">arrow_back</span>
        <span className="text-sm font-bold uppercase tracking-wider">Back to Library</span>
      </Link>

      <div className="flex flex-col md:flex-row gap-12 mb-16">
        {/* Cover Image */}
        <div className="w-full md:w-1/3 flex-shrink-0">
          <div className="relative aspect-[2/3] rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2694&auto=format&fit=crop" alt="Cover" className="w-full h-full object-cover" />
            <div className="absolute top-4 right-4 px-3 py-1 bg-surface-container-highest/80 backdrop-blur-md border border-outline/30 rounded-lg flex items-center space-x-2">
               <span className="w-2 h-2 rounded-full bg-error"></span>
               <span className="text-[10px] font-bold text-on-surface uppercase tracking-wider">NSFW</span>
            </div>
            {/* Reading Progress Overlay (If reading) */}
            <div className="absolute bottom-0 left-0 w-full bg-surface-container-highest/90 backdrop-blur-md p-4 border-t border-outline/30">
                <div className="flex justify-between text-xs font-bold text-on-surface uppercase tracking-wider mb-2">
                    <span>Reading: Ch. 12</span>
                    <span className="text-primary">75%</span>
                </div>
                <div className="w-full bg-surface-container-low rounded-full h-1.5">
                    <div className="bg-primary h-1.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-headline-xl font-bold text-on-surface mb-2">Neon Genesis: Anthro</h1>
          <p className="text-xl text-primary font-medium mb-6">by Kiba Wolf</p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-4 py-2 bg-surface-container-high text-on-surface rounded-xl font-medium text-sm flex items-center space-x-2">
              <span className="material-symbols-outlined text-sm">visibility</span>
              <span>1.2M Reads</span>
            </span>
            <span className="px-4 py-2 bg-surface-container-high text-on-surface rounded-xl font-medium text-sm flex items-center space-x-2">
              <span className="material-symbols-outlined text-sm text-tertiary">star</span>
              <span>4.9 (12k Rating)</span>
            </span>
            <span className="px-4 py-2 bg-surface-container-high text-on-surface rounded-xl font-medium text-sm flex items-center space-x-2">
              <span className="material-symbols-outlined text-sm text-error">favorite</span>
              <span>850k Favorites</span>
            </span>
          </div>

          <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
            In the year 2099, the line between organic and synthetic has blurred. Detective Rexx is brought in to solve a series of mysterious disappearances in the underground synth-ring. As he digs deeper, he uncovers a conspiracy that threatens the very fabric of Neo-Canis.
          </p>

          <div className="mb-8">
            <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-3">Tags & Tropes</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-surface-container text-on-surface-variant text-xs font-bold uppercase py-1.5 px-3 rounded-lg border border-outline-variant/30">Sci-Fi</span>
              <span className="bg-surface-container text-on-surface-variant text-xs font-bold uppercase py-1.5 px-3 rounded-lg border border-outline-variant/30">Cyberpunk</span>
              <span className="bg-surface-container text-on-surface-variant text-xs font-bold uppercase py-1.5 px-3 rounded-lg border border-outline-variant/30">Mystery</span>
              <span className="bg-surface-container text-on-surface-variant text-xs font-bold uppercase py-1.5 px-3 rounded-lg border border-outline-variant/30">Enemies to Lovers</span>
              <span className="bg-error-container text-on-error-container text-xs font-bold uppercase py-1.5 px-3 rounded-lg">Explicit Action</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/read/1" className="flex items-center space-x-2 bg-primary text-on-primary px-8 py-4 rounded-full font-bold hover:bg-primary-fixed transition-colors text-lg">
              <span className="material-symbols-outlined">play_arrow</span>
              <span>Continue Reading</span>
            </Link>
            <button className="flex items-center space-x-2 bg-surface-container-high text-on-surface px-8 py-4 rounded-full font-bold hover:bg-surface-container-highest transition-colors text-lg">
              <span className="material-symbols-outlined">bookmark_add</span>
              <span>Save</span>
            </button>
            <button className="w-14 h-14 flex items-center justify-center bg-surface-container-high text-on-surface rounded-full hover:bg-surface-container-highest transition-colors">
              <span className="material-symbols-outlined">share</span>
            </button>
          </div>
        </div>
      </div>

      {/* Chapters */}
      <section>
        <h2 className="text-2xl font-headline-md font-bold text-on-surface mb-6">Chapters (45)</h2>
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
             <div key={i} className="flex items-center justify-between p-4 bg-surface-container rounded-2xl hover:bg-surface-container-high transition-colors cursor-pointer group">
               <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl font-bold ${i === 0 ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-on-surface-variant'}`}>
                     {45 - i}
                  </div>
                  <div>
                     <h4 className={`font-bold ${i === 0 ? 'text-primary' : 'text-on-surface'} group-hover:text-primary transition-colors`}>
                        Chapter {45 - i}: The Truth
                     </h4>
                     <p className="text-sm text-on-surface-variant">Aug 14, 2024</p>
                  </div>
               </div>
               <div className="flex items-center space-x-4">
                  <span className="px-3 py-1 bg-surface-dim text-on-surface-variant text-[10px] font-bold uppercase rounded-md border border-outline-variant/30 flexitems-center space-x-1">
                     <span className="material-symbols-outlined text-[12px] mr-1">translate</span>
                     EN / RU
                  </span>
                  <Link to={`/read/${45 - i}`} className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-highest text-on-surface group-hover:bg-primary group-hover:text-on-primary transition-colors">
                     <span className="material-symbols-outlined text-sm">play_arrow</span>
                  </Link>
               </div>
             </div>
          ))}
        </div>
        <button className="w-full py-4 mt-4 bg-surface-container text-on-surface font-bold rounded-2xl hover:bg-surface-container-high transition-colors">
          Load More Chapters
        </button>
      </section>
    </div>
  );
}
