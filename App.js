
import React, { useState, useEffect, useMemo } from 'react';
import htm from 'htm';
import { GAMES_DATA } from './constants.js';
import Header from './components/Header.js';
import GameCard from './components/GameCard.js';
import CategoryBar from './components/CategoryBar.js';
import GamePlayer from './components/GamePlayer.js';
import Footer from './components/Footer.js';

const html = htm.bind(React.createElement);

const App = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [category, setCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('nexus-favorites');
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse favorites');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('nexus-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const filteredGames = useMemo(() => {
    return GAMES_DATA.filter((game) => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = 
        category === 'All' || 
        (category === 'Favorites' ? favorites.includes(game.id) : game.category === category);
      return matchesSearch && matchesCategory;
    });
  }, [category, searchQuery, favorites]);

  const toggleFavorite = (e, game) => {
    if (e) e.stopPropagation();
    setFavorites(prev => 
      prev.includes(game.id) 
        ? prev.filter(id => id !== game.id) 
        : [...prev, game.id]
    );
  };

  const handleGoHome = () => {
    setSelectedGame(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return html`
    <div className="min-h-screen flex flex-col">
      <${Header} onSearch=${setSearchQuery} onGoHome=${handleGoHome} />
      
      <main className="flex-grow max-w-7xl mx-auto px-6 py-8 w-full">
        ${selectedGame ? html`
          <${GamePlayer} 
            game=${selectedGame} 
            onBack=${handleGoHome} 
            isFavorite=${favorites.includes(selectedGame.id)}
            onToggleFavorite=${(g) => toggleFavorite(null, g)}
          />
        ` : html`
          <div className="space-y-8 animate-in fade-in duration-700">
            <div className="relative rounded-3xl overflow-hidden h-[300px] md:h-[400px] bg-slate-800 flex items-center">
              <img 
                src="https://picsum.photos/seed/hero/1200/400" 
                className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
                alt="Banner"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
              <div className="relative z-10 px-8 md:px-16 space-y-4 max-w-2xl">
                <span className="bg-indigo-600/20 text-indigo-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-indigo-500/20">
                  New Update Available
                </span>
                <h2 className="text-4xl md:text-6xl font-black font-outfit leading-tight text-white">
                  PLAY WITHOUT <br />
                  <span className="text-indigo-500">LIMITS.</span>
                </h2>
                <p className="text-slate-300 text-lg font-medium leading-relaxed">
                  Join millions of players worldwide. Access hundreds of premium 
                  unblocked games right in your browser.
                </p>
                <div className="flex gap-4 pt-4">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-xl shadow-indigo-600/20 active:scale-95">
                    START PLAYING
                  </button>
                  <button className="glass-effect text-white font-bold px-8 py-3 rounded-xl transition-all hover:bg-slate-700/50 ml-4">
                    DISCOVER
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-outfit text-2xl font-bold text-white">Browse Games</h3>
                <span className="text-slate-500 text-sm font-medium">${filteredGames.length} Games Found</span>
              </div>
              
              <${CategoryBar} selected=${category} onSelect=${setCategory} />

              ${filteredGames.length > 0 ? html`
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  ${filteredGames.map((game) => html`
                    <${GameCard} 
                      key=${game.id} 
                      game=${game} 
                      isFavorite=${favorites.includes(game.id)}
                      onSelect=${setSelectedGame}
                      onToggleFavorite=${toggleFavorite}
                    />
                  `)}
                </div>
              ` : html`
                <div className="py-20 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-4 text-slate-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">No games found</h4>
                  <p className="text-slate-500 max-w-xs">We couldn't find any games matching your current filter or search criteria.</p>
                  <button 
                    onClick=${() => {setCategory('All'); setSearchQuery('');}}
                    className="mt-6 text-indigo-400 font-bold hover:text-indigo-300 transition-colors"
                  >
                    Clear all filters
                  </button>
                </div>
              `}
            </div>
          </div>
        `}
      </main>

      <${Footer} />
    </div>
  `;
};

export default App;
