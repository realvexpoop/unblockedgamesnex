
import React from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

export const GAMES_DATA = [
  {
    id: 'slope-1',
    title: 'Slope',
    category: 'Action',
    thumbnail: 'https://play-lh.googleusercontent.com/FFrKIqKVpB9HMpaaF0HUc5Sza5W2sM8GFZGfkddU39xPcKCa4BYXQghoWVGlQGpaAA=w526-h296-rw',
    iframeUrl: 'https://kdata1.com/2020/05/slope/',
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
    description: 'The perfect game for the armchair quarterback. Manage your team, call the plays, and lead your franchise to the ultimate prize in this retro-styled NFL experience.',
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
  `
};
