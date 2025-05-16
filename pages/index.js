
import Head from 'next/head';

const games = [
  {
    id: 1,
    team1: 'Notre Dame',
    logo1: '/logos/notre_dame.png',
    team2: 'Ohio State',
    logo2: '/logos/ohio_state.png',
    score1: 15,
    score2: 6,
    highlight: 'https://twitter.com/NDlacrosse/status/1921623820235837737'
  },
  {
    id: 2,
    team1: 'Maryland',
    logo1: '/logos/maryland.png',
    team2: 'Air Force',
    logo2: '/logos/air_force.png',
    score1: 13,
    score2: 5,
    highlight: 'https://twitter.com/TerpsMLax/status/1921664506893058144'
  },
  {
    id: 3,
    team1: 'Syracuse',
    logo1: '/logos/syracuse.png',
    team2: 'Harvard',
    logo2: '',
    score1: 13,
    score2: 12,
    highlight: 'https://twitter.com/CuseMLAX/status/1921711565444702461'
  },
  {
    id: 4,
    team1: 'Cornell',
    logo1: '/logos/cornell.png',
    team2: 'UAlbany',
    logo2: '/logos/ualbany.png',
    score1: 15,
    score2: 6,
    highlight: 'https://twitter.com/LacrosseNetwork/status/1921736720363515918'
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        <title>JukeSports</title>
      </Head>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px', backgroundColor: '#111', color: 'white', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/logos/jukesports_logo.png" alt="Juke Logo" style={{ height: 40 }} />
          <h2 style={{ margin: 0 }}>JukeSports</h2>
        </div>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>NCAA</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>PLL</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>NLL</a>
        </nav>
      </header>
      <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f2f2f2' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '20px' }}>
          {games.map((game) => (
            <div key={game.id} style={{ background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {game.logo1 && <img src={game.logo1} alt={game.team1} width="36" />}
                  <strong>{game.team1}</strong>
                </div>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{game.score1} - {game.score2}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <strong>{game.team2}</strong>
                  {game.logo2 && <img src={game.logo2} alt={game.team2} width="36" />}
                </div>
              </div>
              <div style={{ marginTop: '10px' }}>
                <blockquote className="twitter-tweet">
                  <a href={game.highlight}></a>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
