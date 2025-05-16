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
  return (
    <div className="container">
      <Head>
        <title>JukeSports - Live Lacrosse Scores</title>
        <meta name="description" content="Live NCAA and PLL Lacrosse Scores" />
      </Head>

      <header className="header">
        <img src="/logos/jukesports_logo.png" alt="JukeSports Logo" className="logo" />
        <h1 className="title">JukeSports</h1>
        <nav className="nav">
          <a href="#">NCAA</a>
          <a href="#">PLL</a>
          <a href="#">NLL</a>
        </nav>
      </header>

      <main className="grid">
        {games.map((game, index) => (
          <div key={index} className="game-card">
            <div className="game-header">
              <div className="team">
                {game.team1Logo && <img src={game.team1Logo} alt={game.team1} className="team-logo" />}
                <span>{game.team1}</span>
              </div>
              <div className="score">{game.score}</div>
              <div className="team">
                {game.team2Logo && <img src={game.team2Logo} alt={game.team2} className="team-logo" />}
                <span>{game.team2}</span>
              </div>
            </div>
            <div className="network">Network: {game.network}</div>
            <blockquote className="twitter-tweet">
              <a href={`https://twitter.com/i/status/${game.tweetId}`}></a>
            </blockquote>
          </div>
        ))}
      </main>

      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    </div>
  );
}
