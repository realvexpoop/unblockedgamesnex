
import React from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

export const GAMES_DATA = [
  {
    id: 'slope-v3',
    title: 'Slope',
    category: 'Action',
    thumbnail: 'https://play-lh.googleusercontent.com/FFrKIqKVpB9HMpaaF0HUc5Sza5W2sM8GFZGfkddU39xPcKCa4BYXQghoWVGlQGpaAA=w526-h296-rw',
    // Using an active Google Proxy source
    iframeUrl: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/bobydob/slope@master/slope.xml',
    mirrors: [
      { name: 'Server 1 (Google Proxy)', url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/bobydob/slope@master/slope.xml' },
      { name: 'Server 2 (Static)', url: 'https://kdata1.com/2020/05/slope/' },
      { name: 'Server 3 (Direct)', url: 'https://slopegame.online/slope.embed' }
    ],
    description: 'The ultimate speed game! Drive a ball down an infinite neon slope. Simple to play, hard to master.',
    rating: 4.9,
    themeColor: 'emerald'
  },
  {
    id: '1v1-lol-v3',
    title: '1v1.LOL',
    category: 'Action',
    thumbnail: 'https://play-lh.googleusercontent.com/vH_fNia99Ias_jU2-DAs9jT4qE7N8X4Y9k-C9f6P=w526-h296-rw',
    iframeUrl: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1921/id@main/1v1.xml',
    mirrors: [
      { name: 'Server 1 (Stealth)', url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1921/id@main/1v1.xml' },
      { name: 'Server 2 (Direct)', url: 'https://1v1.lol' }
    ],
    description: 'Build and shoot in this competitive 3D battle royale. Practice your mechanics and outplay your opponents.',
    rating: 4.8,
    themeColor: 'violet'
  },
  {
    id: 'subway-surfers-v3',
    title: 'Subway Surfers',
    category: 'Arcade',
    thumbnail: 'https://play-lh.googleusercontent.com/T0_8y2_8y2_8y2_8y2_8y2_8y2_8y2_8y2_8y2_8y2_8y2_8y2_8y2=w526-h296-rw',
    iframeUrl: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1921/id@main/ss.xml',
    mirrors: [
      { name: 'Google Server', url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1921/id@main/ss.xml' },
      { name: 'Mirror B', url: 'https://d3ca45s3v70m8n.cloudfront.net/games/subway-surfers/index.html' }
    ],
    description: 'Dash as fast as you can! Dodge the oncoming trains and escape from the grumpy Inspector.',
    rating: 4.7,
    themeColor: 'emerald'
  },
  {
    id: 'retro-bowl-v3',
    title: 'Retro Bowl',
    category: 'Sports',
    thumbnail: 'https://play-lh.googleusercontent.com/6_2_8y2_8y2_8y2_8y2_8y2_8y2_8y2_8y2_8y2_8y2_8y2_8y2_8y2=w526-h296-rw',
    iframeUrl: 'https://game316009.konggames.com/gamez/0031/6009/live/index.html',
    mirrors: [
      { name: 'Main (High Speed)', url: 'https://game316009.konggames.com/gamez/0031/6009/live/index.html' },
      { name: 'Mirror (Bypass)', url: 'https://cdn.jsdelivr.net/gh/677061/retro-bowl@main/index.html' }
    ],
    description: 'Retro-style American football management. Lead your team to victory in this addictive pixel-art sports sim.',
    rating: 4.8,
    themeColor: 'amber'
  }
];

export const ICONS = {
  Search: () => html`
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
  `,
  Star: ({ filled }) => html`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill=${filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=${filled ? "text-yellow-400" : ""}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
  `,
  Heart: ({ filled }) => html`
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill=${filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=${filled ? "text-red-500" : ""}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
  `,
  Expand: () => html`
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 3 6 6M9 21l-6-6M21 3v6h-6M3 21v-6h6M21 3l-9 9M3 21l9-9"/></svg>
  `,
  Back: () => html`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
  `,
  Refresh: () => html`
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
  `
};
