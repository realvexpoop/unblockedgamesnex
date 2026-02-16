
import React, { useState, useEffect } from 'react';
import htm from 'htm';
import { ICONS } from '../constants.js';

const html = htm.bind(React.createElement);

const GamePlayer = ({ game, onBack, onToggleFavorite, isFavorite }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(game.iframeUrl);
  const [activeMirrorIndex, setActiveMirrorIndex] = useState(0);

  const isEmerald = game.themeColor === 'emerald';
  const isAmber = game.themeColor === 'amber';
  const isViolet = game.themeColor === 'violet';

  const toggleFullScreen = () => {
    const iframe = document.getElementById('fr');
    if (!isFullScreen && iframe) {
      if (iframe.requestFullscreen) iframe.requestFullscreen();
      else if (iframe.webkitRequestFullscreen) iframe.webkitRequestFullscreen();
      else if (iframe.msRequestFullscreen) iframe.msRequestFullscreen();
    }
  };

  const handleCloak = () => {
    const win = window.open('about:blank', '_blank');
    if (!win) {
      alert("Pop-up blocked! Please allow pop-ups to use Cloak Mode.");
      return;
    }
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    win.document.body.style.backgroundColor = '#000';
    const iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.src = currentUrl;
    win.document.body.appendChild(iframe);
  };

  const switchMirror = (index) => {
    if (game.mirrors && game.mirrors[index]) {
      setCurrentUrl(game.mirrors[index].url);
      setActiveMirrorIndex(index);
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  let themeBtnClass = 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/30';
  let frameBorderClass = 'border-slate-800 shadow-2xl';
  let titleColorClass = '';
  let infoBorderClass = 'border-slate-800';
  let accentColorClass = 'bg-indigo-500';

  if (isEmerald) {
    themeBtnClass = 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/30';
    frameBorderClass = 'border-emerald-500/50 shadow-emerald-500/10';
    titleColorClass = 'text-emerald-400';
    infoBorderClass = 'border-emerald-500/30';
    accentColorClass = 'bg-emerald-500';
  } else if (isAmber) {
    themeBtnClass = 'bg-amber-500 hover:bg-amber-600 shadow-amber-500/30';
    frameBorderClass = 'border-amber-500/50 shadow-amber-500/10';
    titleColorClass = 'text-amber-400';
    infoBorderClass = 'border-amber-500/30';
    accentColorClass = 'bg-amber-500';
  } else if (isViolet) {
    themeBtnClass = 'bg-violet-500 hover:bg-violet-600 shadow-violet-500/30';
    frameBorderClass = 'border-violet-500/50 shadow-violet-500/10';
    titleColorClass = 'text-violet-400';
    infoBorderClass = 'border-violet-500/30';
    accentColorClass = 'bg-violet-500';
  }

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
            <h2 className=${`font-outfit text-2xl font-black text-white uppercase ${titleColorClass}`}>${game.title}</h2>
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

      <div className=${`relative w-full aspect-video rounded-3xl overflow-hidden border-4 ${frameBorderClass} bg-black group shadow-2xl`}>
        <iframe
          id="fr"
          key=${currentUrl}
          src=${currentUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          style=${{ display: 'block' }}
          title=${game.title}
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        />
        
        <div className="absolute bottom-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick=${handleCloak}
            title="Open in about:blank tab (Harder to block)"
            className="flex items-center gap-2 bg-zinc-800/90 hover:bg-zinc-700 text-white px-5 py-2.5 rounded-full font-black uppercase tracking-widest shadow-xl transition-all active:scale-95 border border-zinc-600/50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            <span className="ml-2">CLOAK MODE</span>
          </button>
          
          <button 
            onClick=${toggleFullScreen}
            className=${`flex items-center gap-2 ${themeBtnClass} text-white px-5 py-2.5 rounded-full font-black uppercase tracking-widest shadow-xl transition-all active:scale-95`}
          >
            <${ICONS.Expand} />
            <span className="ml-2">FULL SCREEN</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between glass-effect p-4 rounded-2xl border border-zinc-800/50">
        <div className="flex items-center gap-3">
          <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest px-2">Select Server:</span>
          <div className="flex gap-2">
            ${game.mirrors && game.mirrors.map((mirror, idx) => html`
              <button 
                key=${idx}
                onClick=${() => switchMirror(idx)}
                className=${`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all border ${activeMirrorIndex === idx ? `${accentColorClass} border-transparent text-white shadow-lg` : 'bg-zinc-800/50 border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500'}`}
              >
                ${mirror.name}
              </button>
            `)}
          </div>
        </div>
        <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-bold uppercase tracking-widest bg-zinc-900/50 px-3 py-1.5 rounded-lg border border-zinc-800">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          Status: Online
        </div>
      </div>

      <div className=${`glass-effect p-8 rounded-3xl border-l-4 ${infoBorderClass}`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
          <div>
            <h3 className="font-outfit text-xl font-black text-white uppercase mb-2 tracking-wider">About the Game</h3>
            <p className="text-slate-300 leading-relaxed font-medium">
              ${game.description} 
            </p>
          </div>
          <div className="shrink-0 bg-amber-500/10 border border-amber-500/20 p-4 rounded-2xl max-w-xs">
            <p className="text-amber-500 text-[10px] font-black uppercase tracking-[0.15em] mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              Blocked by School?
            </p>
            <p className="text-zinc-400 text-xs leading-tight">
              Switch between <strong className="text-zinc-200 uppercase">Servers</strong> or use <strong className="text-zinc-200">CLOAK MODE</strong>. The Google Proxy (Server 1) is designed to bypass most filters.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          ${['Unblocked', game.category, 'Multiplayer', 'Web', 'nex'].map(tag => {
            const isActiveTag = (isEmerald && tag === game.category) || (isAmber && tag === game.category) || (isViolet && tag === game.category);
            const activeTagClass = isEmerald ? 'border-emerald-500/50 text-emerald-400 bg-emerald-500/5' : 
                                   isAmber ? 'border-amber-500/50 text-amber-400 bg-amber-500/5' :
                                   'border-violet-500/50 text-violet-400 bg-violet-500/5';
            
            return html`
              <span key=${tag} className=${`px-3 py-1 bg-slate-800 text-slate-400 rounded-lg text-[10px] font-black uppercase tracking-widest border ${isActiveTag ? activeTagClass : 'border-slate-700'}`}>
                #${tag}
              </span>
            `;
          })}
        </div>
      </div>
    </div>
  `;
};

export default GamePlayer;
