import Head from 'next/head';
import '../styles/style.css';
import { Tweet } from 'react-tweet';

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
  return (
    <>
      <Head>
        <title>JukeSports - Live Lacrosse Scores</title>
        <meta name="description" content="Live scores, highlights, and updates from NCAA, PLL, and NLL lacrosse." />
      </Head>

      <header>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logos/jukesports_logo.png" alt="JukeSports Logo" />
          <h1>JukeSports</h1>
        </div>
        <nav>
          <a href="#">NCAA</a>
          <a href="#">PLL</a>
          <a href="#">NLL</a>
        </nav>
      </header>

      <main>
        <div className="grid">
          {games.map((game, index) => (
            <div className="card" key={index}>
              <div className="score-header">
                <div className="team">
                  {game.team1Logo && <img src={game.team1Logo} alt={game.team1} />}
                  <span>{game.team1}</span>
                </div>
                <div className="score">{game.score}</div>
                <div className="team" style={{ justifyContent: 'flex-end' }}>
                  {game.team2Logo && <img src={game.team2Logo} alt={game.team2} />}
                  <span>{game.team2}</span>
                </div>
              </div>
              <div className="network">{game.network}</div>
              <Tweet id={game.tweetId} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
