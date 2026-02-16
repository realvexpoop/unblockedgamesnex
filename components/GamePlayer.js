
import React, { useState, useEffect } from 'react';
import htm from 'htm';
import { ICONS } from '../constants.js';

const html = htm.bind(React.createElement);

const GamePlayer = ({ game, onBack, onToggleFavorite, isFavorite }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    const iframe = document.getElementById('game-frame');
    if (!isFullScreen && iframe) {
      if (iframe.requestFullscreen) iframe.requestFullscreen();
      else if (iframe.webkitRequestFullscreen) iframe.webkitRequestFullscreen();
      else if (iframe.msRequestFullscreen) iframe.msRequestFullscreen();
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  return html`
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <button 
          onClick=${onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
        >
          <div className="p-2 rounded-full bg-slate-800 group-hover:bg-slate-700">
            <${ICONS.Back} />
          </div>
          <span className="font-medium">Back to Games</span>
        </button>

        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <h2 className="font-outfit text-2xl font-bold text-white">${game.title}</h2>
            <p className="text-slate-400 text-sm">${game.category} • ${game.rating} Stars</p>
          </div>
          <button 
            onClick=${() => onToggleFavorite(game)}
            className="p-3 rounded-xl glass-effect hover:bg-slate-700/50 transition-colors"
          >
            <${ICONS.Heart} filled=${isFavorite} />
          </button>
        </div>
      </div>

      <div className="relative w-full aspect-video rounded-3xl overflow-hidden border-4 border-slate-800 shadow-2xl bg-black group">
        <iframe
          id="game-frame"
          src=${game.iframeUrl}
          className="w-full h-full border-none"
          title=${game.title}
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        />
        
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick=${toggleFullScreen}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full font-bold shadow-xl shadow-indigo-600/30 transition-all active:scale-95"
          >
            <${ICONS.Expand} />
            <span className="ml-2">FULL SCREEN</span>
          </button>
        </div>
      </div>

      <div className="glass-effect p-8 rounded-3xl">
        <h3 className="font-outfit text-xl font-bold text-white mb-4">About the Game</h3>
        <p className="text-slate-300 leading-relaxed mb-6">
          ${game.description} 
          <br /><br />
          Experience high-quality gaming directly in your browser with Nexus Games. 
          No downloads, no installations, just pure unblocked fun. This game is 
          cross-platform and works on desktop and mobile browsers.
        </p>
        <div className="flex flex-wrap gap-2">
          ${['Unblocked', game.category, 'Multiplayer', 'Web', 'Nexus'].map(tag => html`
            <span key=${tag} className="px-3 py-1 bg-slate-800 text-slate-400 rounded-lg text-xs font-bold uppercase tracking-widest border border-slate-700">
              #${tag}
            </span>
          `)}
        </div>
      </div>
    </div>
  `;
};

export default GamePlayer;
