
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
        <title>JukeSports</title>
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </Head>
      <header style={{
        background: '#111',
        padding: '12px 24px',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/logos/jukesports_logo.png" alt="JukeSports" style={{ height: 48 }} />
          <h1 style={{ fontSize: '1.75rem', margin: 0 }}>JukeSports</h1>
        </div>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>NCAA</a>
          <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>PLL</a>
          <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>NLL</a>
        </nav>
      </header>
      <main style={{
        backgroundColor: '#f1f1f1',
        padding: '20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '20px',
        fontFamily: 'Arial, sans-serif'
      }}>
        {games.map((game) => (
          <div key={game.id} style={{
            background: '#fff',
            borderRadius: '10px',
            padding: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={game.logo1} alt={game.team1} width="36" height="36" />
                <span style={{ fontWeight: 'bold' }}>{game.team1}</span>
              </div>
              <div style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>{game.score1} - {game.score2}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontWeight: 'bold' }}>{game.team2}</span>
                {game.logo2 && <img src={game.logo2} alt={game.team2} width="36" height="36" />}
              </div>
            </div>
            <div>
              <blockquote className="twitter-tweet">
                <a href={game.highlight}></a>
              </blockquote>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}

