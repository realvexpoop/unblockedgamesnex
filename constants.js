
import React from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

export const GAMES_DATA = [
  {
    id: 'slope-1',
    title: 'Slope',
    category: 'Action',
    thumbnail: 'https://play-lh.googleusercontent.com/FFrKIqKVpB9HMpaaF0HUc5Sza5W2sM8GFZGfkddU39xPcKCa4BYXQghoWVGlQGpaAA=w526-h296-rw',
    // Using Google Proxy by default
    iframeUrl: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/r33drichards/r33drichards.github.io@master/slope/slope.xml',
    mirrors: [
      { name: 'Google Server (Best)', url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/r33drichards/r33drichards.github.io@master/slope/slope.xml' },
      { name: 'Mirror 1', url: 'https://kdata1.com/2020/05/slope/' },
      { name: 'Mirror 2', url: 'https://slopegame.online/slope.embed' }
    ],
    description: 'Drive your ball down a series of slopes, avoiding obstacles and trying to reach the furthest distance possible in this high-speed neon adventure.',
    rating: 4.9,
    themeColor: 'emerald'
  },
  {
    id: 'retro-bowl',
    title: 'Retro Bowl',
    category: 'Sports',
    thumbnail: 'https://www.apple.com/newsroom/images/2024/08/apple-arcade-launches-three-new-games-in-september-including-nfl-retro-bowl-25/article/Apple-Arcade-hero_big.jpg.large.jpg',
    iframeUrl: 'https://game316009.konggames.com/gamez/0031/6009/live/index.html',
    mirrors: [
      { name: 'Main Server', url: 'https://game316009.konggames.com/gamez/0031/6009/live/index.html' },
      { name: 'Mirror 1', url: 'https://retrobowl.me/game/index.html' }
    ],
    description: 'The perfect game for the armchair quarterback. Manage your team, call the plays, and lead your franchise to the ultimate prize in this retro-styled NFL experience.',
    rating: 4.8,
    themeColor: 'amber'
  },
  {
    id: 'block-blast',
    title: 'Block Blast',
    category: 'Puzzle',
    thumbnail: 'https://play-lh.googleusercontent.com/83p545A7D2S6T7M-fG8I_J-k9T6V-u4B8v0H-Z-X=w526-h296-rw',
    iframeUrl: 'https://d11jzht7mj96rr.cloudfront.net/games/2024/unity3/block-blast/index-gg.html',
    mirrors: [
      { name: 'High-Speed', url: 'https://d11jzht7mj96rr.cloudfront.net/games/2024/unity3/block-blast/index-gg.html' },
      { name: 'Static Mirror', url: 'https://block-blast.github.io/' }
    ],
    description: 'An addictive block puzzle game that challenges your spatial logic. Fill rows and columns with colorful blocks to clear them and score big in this endless puzzle experience.',
    rating: 4.7,
    themeColor: 'indigo'
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
  `
};
