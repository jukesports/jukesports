import Image from 'next/image';

export default function Home() {
  const games = [
    {
      id: 1,
      team1: 'Notre Dame',
      logo1: '/logos/notre_dame.png',
      team2: 'Ohio State',
      logo2: '/logos/ohio_state.png',
      score1: 15,
      score2: 6,
      network: 'ESPNU',
      highlight: 'https://x.com/NDlacrosse/status/1921623820235837737'
    },
    {
      id: 2,
      team1: 'Maryland',
      logo1: '/logos/maryland.png',
      team2: 'Air Force',
      logo2: '/logos/air_force.png',
      score1: 13,
      score2: 5,
      network: 'ESPN+',
      highlight: 'https://x.com/TerpsMLax/status/1921664506893058144'
    },
    {
      id: 3,
      team1: 'Syracuse',
      logo1: '/logos/syracuse.png',
      team2: 'Harvard',
      logo2: '/logos/harvard.png',
      score1: 13,
      score2: 12,
      network: 'ACC Network',
      highlight: 'https://x.com/CuseMLAX/status/1921711565444702461'
    },
    {
      id: 4,
      team1: 'Cornell',
      logo1: '/logos/cornell.png',
      team2: 'UAlbany',
      logo2: '/logos/ualbany.png',
      score1: 15,
      score2: 6,
      network: 'ESPN+',
      highlight: 'https://x.com/LacrosseNetwork/status/1921736720363515918'
    }
  ];

  return (
    <div style={{ fontFamily: 'Arial', padding: '1rem', background: '#f4f4f4', color: '#000' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🥍 JukeSports - Live Lacrosse Scores</h1>
      {games.map((game) => (
        <div key={game.id} style={{ marginBottom: '2rem', padding: '1rem', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Image src={game.logo1} alt={game.team1} width={40} height={40} />
              <strong>{game.team1}</strong>
            </div>
            <div style={{ fontSize: '1.25rem' }}>{game.score1} - {game.score2}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <strong>{game.team2}</strong>
              <Image src={game.logo2} alt={game.team2} width={40} height={40} />
            </div>
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
