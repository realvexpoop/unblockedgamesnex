
import React from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

const Footer = () => {
  return html`
    <footer className="mt-20 border-t border-slate-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
                <path d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22C11.79 22 11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2C12.21 2 12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z" />
              </svg>
            </div>
            <h2 className="font-outfit text-xl font-bold tracking-tight text-white uppercase">
              nex <span className="text-indigo-400">unblocked</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
            The world's premier destination for high-quality unblocked games. 
            Play anytime, anywhere, on any device.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Links</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Popular Games</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Categories</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Leaderboard</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">New Releases</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
        <p>© 2024 nex unblocked. All rights reserved.</p>
        <div className="flex gap-6">
          <span>Built for the gaming community.</span>
        </div>
      </div>
    </footer>
  `;
};

export default Footer;
