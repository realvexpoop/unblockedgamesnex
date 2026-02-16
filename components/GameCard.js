
import React from 'react';
import htm from 'htm';
import { ICONS } from '../constants.js';

const html = htm.bind(React.createElement);

const GameCard = ({ game, isFavorite, onSelect, onToggleFavorite }) => {
  const isEmerald = game.themeColor === 'emerald';
  const isAmber = game.themeColor === 'amber';
  const isViolet = game.themeColor === 'violet';
  
  let tagColorClass = 'bg-indigo-600';
  let borderHoverClass = 'hover:border-indigo-500/50';
  let shadowHoverClass = 'hover:shadow-indigo-500/10';
  let textHoverClass = 'group-hover:text-indigo-400';
  let btnHoverClass = 'hover:bg-indigo-600';

  if (isEmerald) {
    tagColorClass = 'bg-emerald-500 shadow-lg shadow-emerald-500/40';
    borderHoverClass = 'hover:border-emerald-500';
    shadowHoverClass = 'hover:shadow-emerald-500/20';
    textHoverClass = 'group-hover:text-emerald-400';
    btnHoverClass = 'hover:bg-emerald-500 shadow-emerald-500/20';
  } else if (isAmber) {
    tagColorClass = 'bg-amber-500 shadow-lg shadow-amber-500/40';
    borderHoverClass = 'hover:border-amber-500';
    shadowHoverClass = 'hover:shadow-amber-500/20';
    textHoverClass = 'group-hover:text-amber-400';
    btnHoverClass = 'hover:bg-amber-500 shadow-amber-500/20';
  } else if (isViolet) {
    tagColorClass = 'bg-violet-500 shadow-lg shadow-violet-500/40';
    borderHoverClass = 'hover:border-violet-500';
    shadowHoverClass = 'hover:shadow-violet-500/20';
    textHoverClass = 'group-hover:text-violet-400';
    btnHoverClass = 'hover:bg-violet-500 shadow-violet-500/20';
  }

  return html`
    <div 
      className=${`group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-zinc-800/50 ${borderHoverClass} transition-all duration-300 hover:shadow-2xl ${shadowHoverClass} cursor-pointer flex flex-col h-full`}
      onClick=${() => onSelect(game)}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#121212]">
        <img 
          src=${game.thumbnail} 
          alt=${game.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError=${(e) => { e.target.src = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60"></div>
        
        <button 
          className=${`absolute top-3 right-3 p-2 rounded-full glass-effect transition-all transform active:scale-90 ${isFavorite ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
          onClick=${(e) => onToggleFavorite(e, game)}
        >
          <${ICONS.Heart} filled=${isFavorite} />
        </button>

        <div className=${`absolute bottom-3 left-3 ${tagColorClass} text-white text-[11px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest transition-all duration-300`}>
          ${game.category}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className=${`font-outfit font-bold text-lg text-white ${textHoverClass} transition-colors truncate uppercase`}>
            ${game.title}
          </h3>
          <div className="flex items-center gap-1 text-zinc-500 text-sm">
            <${ICONS.Star} filled=${true} />
            <span className="font-medium">${game.rating}</span>
          </div>
        </div>
        <p className="text-zinc-500 text-xs line-clamp-2 leading-relaxed mb-4">
          ${game.description}
        </p>
        <div className="mt-auto">
          <button className=${`w-full py-2.5 bg-zinc-800/50 ${btnHoverClass} text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all`}>
            PLAY NOW
          </button>
        </div>
      </div>
    </div>
  `;
};

export default GameCard;
