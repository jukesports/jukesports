
export default function Home() {
  const games = [
    {
      id: 1,
      team1: 'Notre Dame',
      team2: 'Ohio State',
      score1: 15,
      score2: 6,
      network: 'ESPNU',
      highlight: 'https://twitter.com/NDlacrosse/status/1921623820235837737'
    },
    {
      id: 2,
      team1: 'Maryland',
      team2: 'Air Force',
      score1: 13,
      score2: 5,
      network: 'ESPN+',
      highlight: 'https://twitter.com/TerpsMLax/status/1921664506893058144'
    },
    {
      id: 3,
      team1: 'Syracuse',
      team2: 'Harvard',
      score1: 13,
      score2: 12,
      network: 'ACC Network',
      highlight: 'https://twitter.com/CuseMLAX/status/1921711565444702461'
    },
    {
      id: 4,
      team1: 'Cornell',
      team2: 'UAlbany',
      score1: 15,
      score2: 6,
      network: 'ESPN+',
      highlight: 'https://twitter.com/LacrosseNetwork/status/1921736720363515918'
    }
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <h1 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}>🥍 JukeSports - Live Lacrosse Scores</h1>
      {games.map((game) => (
        <div key={game.id} style={{ backgroundColor: 'white', borderRadius: '10px', padding: '1.5rem', marginBottom: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <strong>{game.team1}</strong>
            <div style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>{game.score1} - {game.score2}</div>
            <strong>{game.team2}</strong>
          </div>
          <p style={{ marginTop: '0.5rem' }}><strong>Network:</strong> {game.network}</p>
          <div style={{ marginTop: '1rem' }}>
            <blockquote className="twitter-tweet">
              <a href={game.highlight}></a>
            </blockquote>
          </div>
        </div>
      ))}
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    </div>
  );
}

}
