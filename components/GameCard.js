
import React from 'react';
import htm from 'htm';
import { ICONS } from '../constants.js';

const html = htm.bind(React.createElement);

const GameCard = ({ game, isFavorite, onSelect, onToggleFavorite }) => {
  const isEmerald = game.themeColor === 'emerald';
  const tagColorClass = isEmerald ? 'bg-emerald-500 shadow-lg shadow-emerald-500/40' : 'bg-indigo-600';
  const borderHoverClass = isEmerald ? 'hover:border-emerald-500' : 'hover:border-indigo-500/50';
  const shadowHoverClass = isEmerald ? 'hover:shadow-emerald-500/20' : 'hover:shadow-indigo-500/10';
  const textHoverClass = isEmerald ? 'group-hover:text-emerald-400' : 'group-hover:text-indigo-400';
  const btnHoverClass = isEmerald ? 'hover:bg-emerald-500 shadow-emerald-500/20' : 'hover:bg-indigo-600';

  return html`
    <div 
      className=${`group relative bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 ${borderHoverClass} transition-all duration-300 hover:shadow-2xl ${shadowHoverClass} cursor-pointer flex flex-col h-full`}
      onClick=${() => onSelect(game)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src=${game.thumbnail} 
          alt=${game.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
        
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
          <div className="flex items-center gap-1 text-slate-400 text-sm">
            <${ICONS.Star} filled=${true} />
            <span className="font-medium">${game.rating}</span>
          </div>
        </div>
        <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed mb-4">
          ${game.description}
        </p>
        <div className="mt-auto">
          <button className=${`w-full py-2.5 bg-slate-700/50 ${btnHoverClass} text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all`}>
            PLAY NOW
          </button>
        </div>
      </div>
    </div>
  `;
};

export default GameCard;
