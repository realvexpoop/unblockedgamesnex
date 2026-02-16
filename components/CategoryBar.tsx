
import React from 'react';

const CategoryBar = ({ selected, onSelect }) => {
  const categories = ['All', 'Action', 'Puzzle', 'Sports', 'Arcade', 'Strategy', 'Favorites'];

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all duration-300 border ${
            selected === cat
              ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20'
              : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white hover:border-slate-500'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
