
import React, { useState, useEffect } from 'react';
import htm from 'htm';
import { ICONS } from '../constants.js';

const html = htm.bind(React.createElement);

const GamePlayer = ({ game, onBack, onToggleFavorite, isFavorite }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const isEmerald = game.themeColor === 'emerald';

  const toggleFullScreen = () => {
    const iframe = document.getElementById('fr');
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

  const themeBtnClass = isEmerald ? 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/30' : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/30';
  const frameBorderClass = isEmerald ? 'border-emerald-500/50 shadow-emerald-500/10' : 'border-slate-800 shadow-2xl';

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

        <div className="flex items-center gap-4 text-right">
          <div className="flex flex-col items-end">
            <h2 className=${`font-outfit text-2xl font-black text-white uppercase ${isEmerald ? 'text-emerald-400' : ''}`}>${game.title}</h2>
            <p className="text-slate-400 text-sm font-bold uppercase tracking-wider">${game.category} • ${game.rating} Stars</p>
          </div>
          <button 
            onClick=${() => onToggleFavorite(game)}
            className="p-3 rounded-xl glass-effect hover:bg-slate-700/50 transition-colors"
          >
            <${ICONS.Heart} filled=${isFavorite} />
          </button>
        </div>
      </div>

      <div className=${`relative w-full aspect-video rounded-3xl overflow-hidden border-4 ${frameBorderClass} bg-black group`}>
        <iframe
          id="fr"
          src=${game.iframeUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          style=${{ display: 'block' }}
          title=${game.title}
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        />
        
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick=${toggleFullScreen}
            className=${`flex items-center gap-2 ${themeBtnClass} text-white px-5 py-2.5 rounded-full font-black uppercase tracking-widest shadow-xl transition-all active:scale-95`}
          >
            <${ICONS.Expand} />
            <span className="ml-2">FULL SCREEN</span>
          </button>
        </div>
      </div>

      <div className="glass-effect p-8 rounded-3xl border-l-4 border-emerald-500/30">
        <h3 className="font-outfit text-xl font-black text-white uppercase mb-4 tracking-wider">About the Game</h3>
        <p className="text-slate-300 leading-relaxed mb-6 font-medium">
          ${game.description} 
          <br /><br />
          Experience high-quality gaming directly in your browser with nex unblocked. 
          No downloads, no installations, just pure unblocked fun. This game is 
          cross-platform and works on desktop and mobile browsers.
        </p>
        <div className="flex flex-wrap gap-2">
          ${['Unblocked', game.category, 'Multiplayer', 'Web', 'nex'].map(tag => html`
            <span key=${tag} className=${`px-3 py-1 bg-slate-800 text-slate-400 rounded-lg text-[10px] font-black uppercase tracking-widest border ${isEmerald && tag === game.category ? 'border-emerald-500/50 text-emerald-400 bg-emerald-500/5' : 'border-slate-700'}`}>
              #${tag}
            </span>
          `)}
        </div>
      </div>
    </div>
  `;
};

export default GamePlayer;
