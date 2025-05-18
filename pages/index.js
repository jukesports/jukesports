import Head from 'next/head';
import '../styles/styles.css';

export async function getServerSideProps() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const date = String(today.getDate()).padStart(2, '0');

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const tMonth = String(tomorrow.getMonth() + 1).padStart(2, '0');
  const tDate = String(tomorrow.getDate()).padStart(2, '0');

  const todayUrl = `https://data.ncaa.com/casablanca/scoreboard/lacrosse-men/d1/${year}/${month}/${date}/scoreboard.json`;
  const tomorrowUrl = `https://data.ncaa.com/casablanca/scoreboard/lacrosse-men/d1/${year}/${tMonth}/${tDate}/scoreboard.json`;

  const fetchScores = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data.games.map(g => g.game);
    } catch {
      return [];
    }
  };

  const todayGames = await fetchScores(todayUrl);
  const tomorrowGames = await fetchScores(tomorrowUrl);

  return {
    props: { todayGames, tomorrowGames }
  };
}

export default function Home({ todayGames, tomorrowGames }) {
  const renderGame = (game) => (
    <div className="game-card" key={game.gameID}>
      <div className="team-row">
        <span>{game.home.names.short}</span>
        <strong>{game.home.score || 0}</strong>
      </div>
      <div className="team-row">
        <span>{game.away.names.short}</span>
        <strong>{game.away.score || 0}</strong>
      </div>
      <p className="status">{game.finalMessage || `Pre-game — ${game.startTime}`}</p>
    </div>
  );

  return (
    <>
      <Head><title>JukeSports</title></Head>
      <main>
        <h1>🏆 NCAA Lacrosse</h1>
        <h2>Today</h2>
        {todayGames.length > 0 ? todayGames.map(renderGame) : <p>No games today.</p>}
        <h2>Tomorrow</h2>
        {tomorrowGames.length > 0 ? tomorrowGames.map(renderGame) : <p>No games tomorrow.</p>}
      </main>
    </>
  );
}
