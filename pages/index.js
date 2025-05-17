import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  const [gamesToday, setGamesToday] = useState([]);
  const [gamesTomorrow, setGamesTomorrow] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const dd = String(today.getDate()).padStart(2, '0');
      const todayStr = `${yyyy}/${mm}/${dd}`;

      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const mm2 = String(tomorrow.getMonth() + 1).padStart(2, '0');
      const dd2 = String(tomorrow.getDate()).padStart(2, '0');
      const tomorrowStr = `${yyyy}/${mm2}/${dd2}`;

      const resToday = await fetch(`https://data.ncaa.com/casablanca/scoreboard/lacrosse-men/d1/${todayStr}/scoreboard.json`);
      const resTomorrow = await fetch(`https://data.ncaa.com/casablanca/scoreboard/lacrosse-men/d1/${tomorrowStr}/scoreboard.json`);

      const dataToday = await resToday.json();
      const dataTomorrow = await resTomorrow.json();

      setGamesToday(dataToday.games.map(g => g.game));
      setGamesTomorrow(dataTomorrow.games.map(g => g.game));
    };

    fetchData();
  }, []);

  const renderGames = (games, label) => (
    <>
      <h2>{label}</h2>
      <div className="divider"></div>
      {games.map((game, index) => (
        <div key={index} className="game">
          <div>{game.home.names.short} {game.home.score || 0}</div>
          <div>{game.away.names.short} {game.away.score || 0}</div>
          <div>{game.gameState === 'pre' ? `Pre-game — ${game.startTime}` : `Q${game.currentPeriod} – ${game.contestClock}`}</div>
          <div className="divider"></div>
        </div>
      ))}
    </>
  );

  return (
    <>
      <Head>
        <title>JukeSports Scoreboard</title>
      </Head>
      <main>
        <h1>🏆 NCAA Lacrosse</h1>
        {renderGames(gamesToday, "Today")}
        {renderGames(gamesTomorrow, "Tomorrow")}
      </main>
    </>
  );
}
