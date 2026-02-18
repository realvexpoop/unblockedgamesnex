import React from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

const Footer = () => {
  return html`
    <footer className="mt-20 border-t border-zinc-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-indigo-600 p-1.5 rounded-lg shadow-lg shadow-indigo-600/10">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
                <path d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22C11.79 22 11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2C12.21 2 12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-outfit text-lg font-black tracking-tight text-white uppercase">
                UNPLOCKED
              </span>
              <span className="font-outfit text-xs font-black tracking-[0.3em] text-indigo-400 uppercase">
                GAMES
              </span>
            </div>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
            The world's premier destination for high-quality unblocked gaming. 
            Experience the best titles without limits, directly in your browser.
          </p>
        </div>

        <div>
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">Quick Navigation</h4>
          <ul className="space-y-4 text-zinc-500 text-sm font-medium">
            <li><a href="#" className="hover:text-indigo-400 transition-colors uppercase text-[10px] tracking-widest">Popular Titles</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors uppercase text-[10px] tracking-widest">Recently Played</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors uppercase text-[10px] tracking-widest">Categories</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors uppercase text-[10px] tracking-widest">Leaderboards</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em]">
        <p>© 2024 UNPLOCKED GAMES. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6">
          <span>BUILT FOR THE GAMING COMMUNITY.</span>
        </div>
      </div>
    </footer>
  `;
};

export default Footer;