import React from 'react';
import htm from 'htm';
import { ICONS } from '../constants.js';

const html = htm.bind(React.createElement);

const Header = ({ onSearch, onGoHome, isMasked, onToggleMask }) => {
  const handlePanic = () => {
    window.location.href = 'https://classroom.google.com';
  };

  return html`
    <header className="sticky top-0 z-50 glass-effect border-b border-zinc-800/50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick=${onGoHome}
        >
          <div className="bg-indigo-600 p-2 rounded-xl group-hover:bg-indigo-500 transition-colors duration-300 shadow-lg shadow-indigo-600/20">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
              <path d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22C11.79 22 11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2C12.21 2 12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-outfit text-xl font-black tracking-tight text-white uppercase">
              UNPLOCKED
            </span>
            <span className="font-outfit text-sm font-black tracking-[0.3em] text-indigo-400 uppercase">
              GAMES
            </span>
          </div>
        </div>

        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
            <${ICONS.Search} />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-zinc-800 rounded-full leading-5 bg-[#1a1a1a] text-zinc-200 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-300 sm:text-sm"
            placeholder="Search for games..."
            onChange=${(e) => onSearch(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick=${onToggleMask}
            title="Cloak Tab (Disguise as Google Drive)"
            className=${`p-2.5 rounded-xl border transition-all ${isMasked ? 'bg-green-500/20 border-green-500 text-green-500' : 'bg-zinc-800/50 border-zinc-700 text-zinc-400 hover:text-white'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
          
          <button 
            onClick=${handlePanic}
            title="Panic Button (Instant Redirect)"
            className="bg-red-500 hover:bg-red-600 text-white p-2.5 rounded-xl transition-all shadow-lg shadow-red-500/20 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>

          <div className="hidden lg:block w-[1px] h-6 bg-zinc-800 mx-1"></div>

          <button onClick=${onGoHome} className="hidden md:block hover:text-white transition-colors uppercase tracking-widest text-[10px] font-black text-zinc-400">Library</button>
        </div>
      </div>
    </header>
  `;
};

export default Header;