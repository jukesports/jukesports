import Head from 'next/head';
import '../styles.css';

const games = [
  {
    team1: 'Notre Dame',
    team1Logo: '/logos/notre_dame.png',
    score: '15 - 6',
    team2: 'Ohio State',
    team2Logo: '/logos/ohio_state.png',
    network: 'ESPNU',
    tweetId: '1790118864084642112',
  },
  {
    team1: 'Maryland',
    team1Logo: '/logos/maryland.png',
    score: '13 - 5',
    team2: 'Air Force',
    team2Logo: '/logos/air_force.png',
    network: 'ESPN+',
    tweetId: '1790119051477358802',
  },
  {
    team1: 'Syracuse',
    team1Logo: '/logos/syracuse.png',
    score: '13 - 12',
    team2: 'Harvard',
    team2Logo: '',
    network: 'ACC Network',
    tweetId: '1790119117885065444',
  },
  {
    team1: 'Cornell',
    team1Logo: '/logos/cornell.png',
    score: '15 - 6',
    team2: 'UAlbany',
    team2Logo: '/logos/ualbany.png',
    network: 'ESPN+',
    tweetId: '1790119207558257064',
  },
];

export default function Home() {
