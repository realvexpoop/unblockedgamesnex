import React from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

export const GAMES_DATA = [
  {
    id: 'gun-spin',
    title: 'Gun Spin',
    category: 'Action',
    thumbnail: 'https://img.gamedistribution.com/50d154abb6c5483b847cbeea848e73ff-512x512.jpeg',
    iframeUrl: 'https://html5.gamedistribution.com/rvvASMiM/50d154abb6c5483b847cbeea848e73ff/index.html?gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL2h0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tLzUwZDE1NGFiYjZjNTQ4M2I4NDdjYmVlYTg0OGU3M2ZmLyIsInBhcmVudERvbWFpbiI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidG9wRG9tYWluIjoiaHRtbDUuZ2FtZWRpc3RyaWJ1dGlvbi5jb20iLCJoYXNJbXByZXNzaW9uIjp0cnVlLCJsb2FkZXJFbmFibGVkIjp0cnVlLCJob3N0IjoiaHRtbDUuZ2FtZWRpc3RyaWJ1dGlvbi5jb20iLCJ2ZXJzaW9uIjoiMS41LjE4In0%253D',
    mirrors: [
      { name: 'Server 1 (Requested)', url: 'https://html5.gamedistribution.com/rvvASMiM/50d154abb6c5483b847cbeea848e73ff/index.html?gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL2h0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tLzUwZDE1NGFiYjZjNTQ4M2I4NDdjYmVlYTg0OGU3M2ZmLyIsInBhcmVudERvbWFpbiI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidG9wRG9tYWluIjoiaHRtbDUuZ2FtZWRpc3RyaWJ1dGlvbi5jb20iLCJoYXNJbXByZXNzaW9uIjp0cnVlLCJsb2FkZXJFbmFibGVkIjp0cnVlLCJob3N0IjoiaHRtbDUuZ2FtZWRpc3RyaWJ1dGlvbi5jb20iLCJ2ZXJzaW9uIjoiMS41LjE4In0%253D' }
    ],
    description: 'Shoot your gun to spin it and travel as far as possible! Upgrade your weapon and reach new milestones in this addictive arcade shooter.',
    rating: 4.8,
    themeColor: 'amber'
  },
  {
    id: 'slope-v4',
    title: 'Slope',
    category: 'Action',
    thumbnail: 'https://play-lh.googleusercontent.com/FFrKIqKVpB9HMpaaF0HUc5Sza5W2sM8GFZGfkddU39xPcKCa4BYXQghoWVGlQGpaAA=w526-h296-rw',
    iframeUrl: 'https://kdata1.com/2020/05/slope/',
    mirrors: [
      { name: 'Server 1 (Stable)', url: 'https://kdata1.com/2020/05/slope/' },
      { name: 'Server 2 (Bypass)', url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/r33drichards/r33drichards.github.io@master/slope/slope.xml' }
    ],
    description: 'The ultimate speed game! Drive a ball down an infinite neon slope. Simple to play, hard to master.',
    rating: 4.9,
    themeColor: 'emerald'
  },
  {
    id: '1v1-lol-v4',
    title: '1v1.LOL',
    category: 'Action',
    thumbnail: 'https://play-lh.googleusercontent.com/vH_fNia99Ias_jU2-DAs9jT4qE7N8X4Y9k-C9f6P=w526-h296-rw',
    iframeUrl: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/r33drichards/r33drichards.github.io@master/1v1-lol/1v1-lol.xml',
    mirrors: [
      { name: 'Server 1 (Proxy)', url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/r33drichards/r33drichards.github.io@master/1v1-lol/1v1-lol.xml' },
      { name: 'Server 2 (Direct)', url: 'https://1v1.lol' }
    ],
    description: 'Build and shoot in this competitive 3D battle royale. Practice your mechanics and outplay your opponents.',
    rating: 4.8,
    themeColor: 'violet'
  },
  {
    id: 'subway-surfers-v4',
    title: 'Subway Surfers',
    category: 'Arcade',
    thumbnail: 'https://play-lh.googleusercontent.com/T0_8y2_8y2_8y2_8y2_8y2_8y2_8y2_8y2_8y2_8y2_8y2_8y2_8y2=w526-h296-rw',
    iframeUrl: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/r33drichards/r33drichards.github.io@master/subway-surfers/subway-surfers.xml',
    mirrors: [
      { name: 'Server 1 (Stealth)', url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/r33drichards/r33drichards.github.io@master/subway-surfers/subway-surfers.xml' },
      { name: 'Server 2 (Cdn)', url: 'https://d3ca45s3v70m8n.cloudfront.net/games/subway-surfers/index.html' }
    ],
    description: 'Dash as fast as you can! Dodge the oncoming trains and escape from the grumpy Inspector.',
    rating: 4.7,
    themeColor: 'emerald'
  },
  {
    id: 'retro-bowl-v4',
    title: 'Retro Bowl',
    category: 'Sports',
    thumbnail: 'https://play-lh.googleusercontent.com/6_2_8y2_8y2_8y2_8y2_8y2_8y2_8y2_8y2_8y2_8y2_8y2_8y2_8y2=w526-h296-rw',
    iframeUrl: 'https://game316009.konggames.com/gamez/0031/6009/live/index.html',
    mirrors: [
      { name: 'Server 1 (Kong)', url: 'https://game316009.konggames.com/gamez/0031/6009/live/index.html' },
      { name: 'Server 2 (Stealth)', url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/r33drichards/r33drichards.github.io@master/retro-bowl/retro-bowl.xml' }
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
