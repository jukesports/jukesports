
export default function Home() {
  const games = [
    {
      id: 1,
      team1: 'Notre Dame',
      team2: 'Ohio State',
      score1: 15,
      score2: 6,
      network: 'ESPNU',
      highlight: 'https://x.com/NDlacrosse/status/1921623820235837737'
    },
    {
      id: 2,
      team1: 'Maryland',
      team2: 'Air Force',
      score1: 13,
      score2: 5,
      network: 'ESPN+',
      highlight: 'https://x.com/TerpsMLax/status/1921664506893058144'
    },
    {
      id: 3,
      team1: 'Syracuse',
      team2: 'Harvard',
      score1: 13,
      score2: 12,
      network: 'ACC Network',
      highlight: 'https://x.com/CuseMLAX/status/1921711565444702461'
    },
    {
      id: 4,
      team1: 'Cornell',
      team2: 'UAlbany',
      score1: 15,
      score2: 6,
      network: 'ESPN+',
      highlight: 'https://x.com/LacrosseNetwork/status/1921736720363515918'
    }
  ];

  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem', background: '#111', color: '#fff' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🥍 JukeSports - Live Lacrosse Scores</h1>
      {games.map((game) => (
        <div key={game.id} style={{ marginBottom: '2rem', padding: '1rem', backgroundColor: '#222', borderRadius: '8px' }}>
          <h2>{game.team1} {game.score1} - {game.score2} {game.team2}</h2>
          <p><strong>Network:</strong> {game.network}</p>
          <p>🎥 Highlight:</p>
          <blockquote className="twitter-tweet">
            <a href={game.highlight}></a>
          </blockquote>
        </div>
      ))}
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    </div>
  );
}
