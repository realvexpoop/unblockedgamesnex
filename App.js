
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
    <div className="min-h-screen flex flex-col bg-[#121212]">
      <${Header} onSearch=${setSearchQuery} onGoHome=${handleGoHome} />
      
      <main className="flex-grow max-w-7xl mx-auto px-6 py-12 w-full">
        ${selectedGame ? html`
          <${GamePlayer} 
            game=${selectedGame} 
            onBack=${handleGoHome} 
            isFavorite=${favorites.includes(selectedGame.id)}
            onToggleFavorite=${(g) => toggleFavorite(null, g)}
          />
        ` : html`
          <div className="space-y-12 animate-in fade-in duration-700">
            <div id="browse-section" className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h3 className="font-outfit text-4xl font-black text-white uppercase tracking-tighter">Explore Library</h3>
                  <p className="text-zinc-500 font-bold uppercase text-xs tracking-[0.2em] mt-1">Directly in your browser</p>
                </div>
                <span className="bg-zinc-800/50 text-zinc-400 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest border border-zinc-700/50">
                  ${filteredGames.length} Titles Available
                </span>
              </div>
              
              <${CategoryBar} selected=${category} onSelect=${setCategory} />

              ${filteredGames.length > 0 ? html`
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
                <div className="py-24 flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-zinc-800/50 rounded-full flex items-center justify-center mb-6 text-zinc-600 border border-zinc-700/50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  </div>
                  <h4 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">Game Not Found</h4>
                  <p className="text-zinc-500 max-w-xs font-medium">We couldn't find any games matching those filters.</p>
                  <button 
                    onClick=${() => {setCategory('All'); setSearchQuery('');}}
                    className="mt-8 bg-indigo-600/10 text-indigo-400 px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-indigo-600/20 transition-all"
                  >
                    Reset Library
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
