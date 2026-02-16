
import React from 'react';
import htm from 'htm';
import { ICONS } from '../constants.js';

const html = htm.bind(React.createElement);

const Header = ({ onSearch, onGoHome }) => {
  return html`
    <header className="sticky top-0 z-50 glass-effect border-b border-slate-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick=${onGoHome}
        >
          <div className="bg-indigo-600 p-2 rounded-xl group-hover:bg-indigo-500 transition-colors duration-300">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
              <path d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22C11.79 22 11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2C12.21 2 12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z" />
            </svg>
          </div>
          <h1 className="font-outfit text-2xl font-bold tracking-tight text-white uppercase">
            nex <span className="text-indigo-400">unblocked</span>
          </h1>
        </div>

        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <${ICONS.Search} />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-slate-700 rounded-full leading-5 bg-slate-900/50 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 sm:text-sm"
            placeholder="Search for games..."
            onChange=${(e) => onSearch(e.target.value)}
          />
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button onClick=${onGoHome} className="hover:text-indigo-400 transition-colors">Games</button>
        </div>
      </div>
    </header>
  `;
};

export default Header;
