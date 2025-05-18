import Head from 'next/head';

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
  const renderGame = (game, index) => (
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
      {index === 0 && (
        <><blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">MATT TRAYNOR IS UNCONSCIOUS.<br/><br/>PENN STATE TIES IT.<a href="https://twitter.com/PennStateMLAX?ref_src=twsrc%5Etfw">@PennStateMLAX</a> IS ROLLING. <a href="https://t.co/sAWxkbuavx">pic.twitter.com/sAWxkbuavx</a></p>&mdash; USA Lacrosse Magazine (@USALacrosseMag) <a href="https://twitter.com/USALacrosseMag/status/1924162897304789187?ref_src=twsrc%5Etfw">May 18, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></>
      )}
    </div>
  );

  return (
    <>
      <Head><title>JukeSports</title></Head>
      <main>
        <h1>🏆 NCAA Lacrosse</h1>
        <h2>Today</h2>
        {todayGames.length > 0 ? todayGames.map((game, index) => renderGame(game, index)) : <p>No games today.</p>}
        <h2>Tomorrow</h2>
        {tomorrowGames.length > 0 ? tomorrowGames.map(renderGame) : <p>No games tomorrow.</p>}
      </main>
    </>
  );
}