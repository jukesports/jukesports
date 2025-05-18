import Head from 'next/head';
import '../styles/styles.css';

export async function getServerSideProps() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const date = String(today.getDate()).padStart(2, '0');
  const tomorrow = String(today.getDate() + 1).padStart(2, '0');

  const todayUrl = `https://data.ncaa.com/casablanca/scoreboard/lacrosse-men/d1/${year}/${month}/${date}/scoreboard.json`;
  const tomorrowUrl = `https://data.ncaa.com/casablanca/scoreboard/lacrosse-men/d1/${year}/${month}/${tomorrow}/scoreboard.json`;

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
    props: { todayGames, tomorrowGames },
  };
}

const teamLogos = {
  cornell: "/logos/cornell.png",
  richmond: "/logos/richmond.png",
  syracuse: "/logos/syracuse.png",
  princeton: "/logos/princeton.png",
  "notre-dame": "/logos/notre_dame.png",
  "penn-st": "/logos/pride.png",
  georgetown: "/logos/georgetown.png",
  maryland: "/logos/maryland.png"
};

export default function Home({ todayGames, tomorrowGames }) {
  const renderGame = (game) => (
    <div className="game-card" key={game.gameID}>
      <div className="team-row">
        <img src={teamLogos[game.home.names.seo]} alt={game.home.names.short} />
        <span>{game.home.names.short}</span>
        <strong>{game.home.score || 0}</strong>
      </div>
      <div className="team-row">
        <img src={teamLogos[game.away.names.seo]} alt={game.away.names.short} />
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
        {todayGames.map(renderGame)}
        <h2>Tomorrow</h2>
        {tomorrowGames.map(renderGame)}
      </main>
    </>
  );
}
