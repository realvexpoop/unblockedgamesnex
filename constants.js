
import React from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

export const GAMES_DATA = [
  {
    id: '1',
    title: '2048 Classic',
    category: 'Puzzle',
    thumbnail: 'https://picsum.photos/seed/2048/400/300',
    iframeUrl: 'https://play2048.co/',
    description: 'Join the numbers and get to the 2048 tile!',
    rating: 4.8
  },
  {
    id: '2',
    title: 'Doodle Jump',
    category: 'Arcade',
    thumbnail: 'https://picsum.photos/seed/doodle/400/300',
    iframeUrl: 'https://doodlejump.io/',
    description: 'Jump your way to the top in this classic arcade experience.',
    rating: 4.5
  },
  {
    id: '3',
    title: 'Geometry Dash',
    category: 'Action',
    thumbnail: 'https://picsum.photos/seed/geometry/400/300',
    iframeUrl: 'https://geometrydash.io/',
    description: 'Rhythm-based action platforming with challenging levels.',
    rating: 4.9
  },
  {
    id: '4',
    title: 'Basketball Stars',
    category: 'Sports',
    thumbnail: 'https://picsum.photos/seed/basket/400/300',
    iframeUrl: 'https://basketballstars.io/',
    description: 'Show off your skills in the most competitive basketball game.',
    rating: 4.7
  },
  {
    id: '5',
    title: 'Moto X3M',
    category: 'Action',
    thumbnail: 'https://picsum.photos/seed/moto/400/300',
    iframeUrl: 'https://motox3m.co/',
    description: 'Master bike stunts and dodge deadly obstacles.',
    rating: 4.6
  },
  {
    id: '6',
    title: 'Cookie Clicker',
    category: 'Strategy',
    thumbnail: 'https://picsum.photos/seed/cookie/400/300',
    iframeUrl: 'https://orteil.dashnet.org/cookieclicker/',
    description: 'The ultimate idle game. Bake cookies and rule the world.',
    rating: 4.8
  },
  {
    id: '7',
    title: 'Cut the Rope',
    category: 'Puzzle',
    thumbnail: 'https://picsum.photos/seed/rope/400/300',
    iframeUrl: 'https://cuttherope.net/',
    description: 'Feed Om Nom with candy by cutting the right ropes.',
    rating: 4.4
  },
  {
    id: '8',
    title: 'Subway Surfers',
    category: 'Arcade',
    thumbnail: 'https://picsum.photos/seed/subway/400/300',
    iframeUrl: 'https://subwaysurfers.com/',
    description: 'Dash as fast as you can! Dodge the oncoming trains!',
    rating: 4.7
  },
  {
    id: '9',
    title: 'Chess Online',
    category: 'Strategy',
    thumbnail: 'https://picsum.photos/seed/chess/400/300',
    iframeUrl: 'https://lichess.org/embed',
    description: 'Play the game of kings against opponents or bots.',
    rating: 4.9
  },
  {
    id: '10',
    title: 'Snake.io',
    category: 'Arcade',
    thumbnail: 'https://picsum.photos/seed/snake/400/300',
    iframeUrl: 'https://snake.io/',
    description: 'Slither through the arena and grow as large as possible.',
    rating: 4.3
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
