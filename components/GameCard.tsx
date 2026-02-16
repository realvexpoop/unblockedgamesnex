
import React from 'react';
import { ICONS } from '../constants';

// Add any type to props to allow standard React props like 'key' when this component is used in a map function
const GameCard = ({ game, isFavorite, onSelect, onToggleFavorite }: any) => {
  return (
    <div 
      className="group relative bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 cursor-pointer flex flex-col h-full"
      onClick={() => onSelect(game)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={game.thumbnail} 
          alt={game.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
        
        <button 
          className={`absolute top-3 right-3 p-2 rounded-full glass-effect transition-all transform active:scale-90 ${isFavorite ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
          onClick={(e) => onToggleFavorite(e, game)}
        >
          <ICONS.Heart filled={isFavorite} />
        </button>

        <div className="absolute bottom-3 left-3 bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
          {game.category}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-outfit font-bold text-lg text-white group-hover:text-indigo-400 transition-colors truncate">
            {game.title}
          </h3>
          <div className="flex items-center gap-1 text-slate-400 text-sm">
            <ICONS.Star filled={true} />
            <span className="font-medium">{game.rating}</span>
          </div>
        </div>
        <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed mb-4">
          {game.description}
        </p>
        <div className="mt-auto">
          <button className="w-full py-2 bg-slate-700/50 hover:bg-indigo-600 text-white text-sm font-semibold rounded-lg transition-colors group-hover:shadow-lg group-hover:shadow-indigo-600/20">
            PLAY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
