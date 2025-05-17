// deploy trigger
import Head from 'next/head';
import '../styles/styles.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://data.ncaa.com/casablanca/scoreboard/lacrosse-men/d1/2025/05/17/scoreboard.json');
      const data = await res.json();
      setGames(data.games.map(g => g.game));
    };
    fetchData();
    const interval = setInterval(fetchData, 15000);
    return () => clearInterval(interval);
  }, []);

  const logo = (team) => `/logos/${team.toLowerCase().replace(/[^a-z]/g, '_')}.png`;

  return (
    <div className="container">
      <Head>
        <title>JukeSports — Live NCAA Lacrosse</title>
      </Head>
      <h1>🏆 NCAA Quarterfinals</h1>
      <hr />
      {games.map((game, idx) => (
        <div key={idx} className="gameBlock">
          <div className="teamRow">
            <img src={logo(game.home.names.short)} className="logo" />
            <span>{game.home.names.short}</span>
            <span className="score">{game.home.score || 0}</span>
          </div>
          <div className="teamRow">
            <img src={logo(game.away.names.short)} className="logo" />
            <span>{game.away.names.short}</span>
            <span className="score">{game.away.score || 0}</span>
          </div>
          <div className="metaRow">
            {game.gameState === 'live'
              ? `Q${game.currentPeriod.slice(0, 1)} – ${game.contestClock}`
              : game.gameState === 'pre'
              ? `Pre-game – ${game.startTime}`
              : `Final`}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

