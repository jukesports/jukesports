import Head from "next/head";
import Image from "next/image";
import "./../styles.css";

const games = [
  {
    team1: "Notre Dame",
    team2: "Ohio State",
    score1: 15,
    score2: 6,
    logo1: "/logos/notre_dame.png",
    logo2: "/logos/ohio_state.png",
    tweetEmbed:
      "https://twitframe.com/show?url=https://twitter.com/NDlacrosse/status/1790112108947259834",
  },
  {
    team1: "Maryland",
    team2: "Air Force",
    score1: 13,
    score2: 5,
    logo1: "/logos/maryland.png",
    logo2: "/logos/air_force.png",
    tweetEmbed:
      "https://twitframe.com/show?url=https://twitter.com/TerpsMLax/status/1790105563134319031",
  },
  {
    team1: "Syracuse",
    team2: "Harvard",
    score1: 13,
    score2: 12,
    logo1: "/logos/syracuse.png",
    logo2: "/logos/harvard.png",
    tweetEmbed:
      "https://twitframe.com/show?url=https://twitter.com/CuseMLAX/status/1790117442162305326",
  },
  {
    team1: "Cornell",
    team2: "UAlbany",
    score1: 15,
    score2: 6,
    logo1: "/logos/cornell.png",
    logo2: "/logos/ualbany.png",
    tweetEmbed:
      "https://twitframe.com/show?url=https://twitter.com/LacrosseNetwork/status/1790142160351709394",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>JukeSports - Live Lacrosse Scores</title>
        <meta name="description" content="Live NCAA Lacrosse Scores + Highlights" />
        <link rel="icon" href="/logos/jukesports_logo.png" />
      </Head>
      <header className="header">
        <div className="logo-bar">
          <Image src="/logos/jukesports_logo.png" alt="JukeSports" width={35} height={35} />
          <h1>JukeSports</h1>
        </div>
        <nav>
          <a href="#">NCAA</a>
          <a href="#">PLL</a>
          <a href="#">NLL</a>
        </nav>
      </header>
      <main className="score-grid">
        {games.map((game, idx) => (
          <div key={idx} className="score-card">
            <div className="teams">
              <div className="team">
                <Image src={game.logo1} alt={game.team1} width={25} height={25} />
                <span>{game.team1}</span>
              </div>
              <div className="score">
                {game.score1} - {game.score2}
              </div>
              <div className="team">
                <span>{game.team2}</span>
                <Image src={game.logo2} alt={game.team2} width={25} height={25} />
              </div>
            </div>
            <iframe
              className="tweet"
              src={game.tweetEmbed}
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </main>
    </>
  );
}
