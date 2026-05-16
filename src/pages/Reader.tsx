import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Reader() {
  const { id } = useParams();
  const [language, setLanguage] = useState<'EN' | 'RU'>('EN');
  const [progress, setProgress] = useState(0);

  // Mock comic pages
  const pages = Array.from({ length: 5 }).map((_, i) => 
    `https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop&text=Page${i+1}`
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const totalScrollable = documentHeight - windowHeight;
      const currentProgress = (scrollPosition / totalScrollable) * 100;
      
      setProgress(Math.min(100, Math.max(0, currentProgress)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0a0e17] min-h-screen text-on-background font-sora">
      {/* Top Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-[#0a0e17] to-transparent p-6 flex justify-between items-center transition-transform duration-300">
        <div className="flex items-center space-x-4">
            <Link to={`/comic/${id}`} className="w-12 h-12 flex items-center justify-center rounded-full bg-[#181c25]/80 text-[#dfe2ef] backdrop-blur-md hover:bg-[#262a34] transition-colors">
                <span className="material-symbols-outlined">close</span>
            </Link>
            <div className="hidden md:block">
                <h1 className="font-bold text-lg text-[#dfe2ef]">Neon Genesis: Anthro</h1>
                <p className="text-sm text-[#b9c3ff]">Chapter 12: The Grid</p>
            </div>
        </div>

        <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="flex bg-[#181c25]/80 backdrop-blur-md rounded-full p-1 border border-[#454650]/30 shadow-lg">
                <button 
                  onClick={() => setLanguage('EN')}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${language === 'EN' ? 'bg-[#b9c3ff] text-[#031452]' : 'text-[#c6c5d1] hover:text-[#dfe2ef]'}`}
                >
                    EN
                </button>
                <button 
                  onClick={() => setLanguage('RU')}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${language === 'RU' ? 'bg-[#b9c3ff] text-[#031452]' : 'text-[#c6c5d1] hover:text-[#dfe2ef]'}`}
                >
                    RU
                </button>
            </div>
            
            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#181c25]/80 text-[#dfe2ef] backdrop-blur-md hover:bg-[#262a34] transition-colors">
                <span className="material-symbols-outlined">settings</span>
            </button>
        </div>
      </nav>

      {/* Comic Container */}
      <main className="max-w-3xl mx-auto pt-24 pb-32 px-4 flex flex-col space-y-4 relative">
          {/* Mock Language Notification */}
          {language === 'RU' && (
              <div className="text-center text-[#b9c3ff] mb-4 text-sm font-bold">
                  Переведено команды Furlio (translated by Furlio)
              </div>
          )}

          {pages.map((src, idx) => (
             <div key={idx} className="relative rounded-2xl overflow-hidden bg-[#181c25] min-h-[500px]">
                  <img src={src} alt={`Page ${idx + 1}`} className="w-full h-auto object-cover" />
             </div>
          ))}

          {/* End of Chapter Navigation */}
          <div className="mt-12 p-8 bg-[#181c25] rounded-3xl text-center border border-[#454650]/30 shadow-2xl">
              <span className="material-symbols-outlined text-4xl text-[#b9c3ff] mb-4">check_circle</span>
              <h2 className="text-2xl font-bold mb-2 text-[#dfe2ef]">Chapter 12 Finished</h2>
              <p className="text-[#c6c5d1] mb-8">What a cliffhanger! Are you ready for the next one?</p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="px-8 py-4 bg-[#262a34] text-[#dfe2ef] rounded-full font-bold hover:bg-[#31353f] transition-colors flex items-center justify-center space-x-2">
                      <span className="material-symbols-outlined">arrow_back</span>
                      <span>Previous</span>
                  </button>
                  <button className="px-8 py-4 bg-[#b9c3ff] text-[#031452] rounded-full font-bold hover:bg-[#dde1ff] transition-colors flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(185,195,255,0.3)]">
                      <span>Next Chapter</span>
                      <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
              </div>
          </div>
      </main>

      {/* Floating Progress Bar */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-11/12 max-w-md bg-[#181c25]/90 backdrop-blur-xl rounded-full p-4 border border-[#454650]/30 shadow-2xl flex items-center space-x-4 z-50 transition-transform duration-300">
          <div className="w-10 h-10 rounded-full bg-[#262a34] flex items-center justify-center text-[#c6c5d1] flex-shrink-0">
              <span className="material-symbols-outlined text-sm">unfold_more</span>
          </div>
          <div className="flex-1">
              <div className="flex justify-between text-[10px] font-bold text-[#c6c5d1] uppercase tracking-wider mb-2">
                  <span>Scrolling Progress</span>
                  <span className="text-[#b9c3ff]">{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-[#0a0e17] rounded-full h-1.5 overflow-hidden">
                  <div className="bg-[#b9c3ff] h-full rounded-full transition-all duration-100 ease-out" style={{ width: `${progress}%` }}></div>
              </div>
          </div>
      </div>
    </div>
  );
}
