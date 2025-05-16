
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const games = [
  {
    id: 1,
    team1: 'Notre Dame',
    team2: 'Ohio State',
    score1: 15,
    score2: 6,
    logo1: '/logos/notre_dame.png',
    logo2: '/logos/ohio_state.png',
    tweet: 'https://twitter.com/NDlacrosse/status/1921623820235837737'
  },
  {
    id: 2,
    team1: 'Maryland',
    team2: 'Air Force',
    score1: 13,
    score2: 5,
    logo1: '/logos/maryland.png',
    logo2: '/logos/air_force.png',
    tweet: 'https://twitter.com/TerpsMLax/status/1921664506893058144'
  },
  {
    id: 3,
    team1: 'Syracuse',
    team2: 'Harvard',
    score1: 13,
    score2: 12,
    logo1: '/logos/syracuse.png',
    logo2: '/logos/harvard.png',
    tweet: 'https://twitter.com/CuseMLAX/status/1921711565444702461'
  },
  {
    id: 4,
    team1: 'Cornell',
    team2: 'UAlbany',
    score1: 15,
    score2: 6,
    logo1: '/logos/cornell.png',
    logo2: '/logos/ualbany.png',
    tweet: 'https://twitter.com/LacrosseNetwork/status/1921736720363515918'
  }
]

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>JukeSports - Lacrosse Scores</title>
      </Head>
      <header className={styles.header}>
        <img src="/logos/jukesports_logo.png" alt="JukeSports Logo" className={styles.logo} />
        <nav>
          <a href="#">NCAA</a>
          <a href="#">PLL</a>
          <a href="#">NLL</a>
        </nav>
      </header>
      <main className={styles.grid}>
        {games.map((game) => (
          <div key={game.id} className={styles.card}>
            <div className={styles.scoreRow}>
              <div className={styles.team}>
                <img src={game.logo1} alt={game.team1} />
                <strong>{game.team1}</strong>
              </div>
              <div className={styles.score}>
                {game.score1} - {game.score2}
              </div>
              <div className={styles.team}>
                <strong>{game.team2}</strong>
                <img src={game.logo2} alt={game.team2} />
              </div>
            </div>
            <iframe
              title="Tweet"
              className={styles.tweet}
              src={`https://twitframe.com/show?url=${encodeURIComponent(game.tweet)}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </main>
    </div>
  )
}
