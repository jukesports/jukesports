import Head from 'next/head'
import '../styles/styles.css'
import { useEffect, useState } from 'react'

const GAME_IDS = ['590696', '590697']

const LOGOS = {
  cornell: '/logos/cornell.png',
  richmond: '/logos/richmond.png',
  syracuse: '/logos/syracuse.png',
  princeton: '/logos/princeton.png',
}

export default function Home() {
  const [games, setGames] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://data.ncaa.com/casablanca/scoreboard/lacrosse-men/d1/2025/05/17/scoreboard.json')
        const data = await res.json()
        const filtered = data.games.filter(g => GAME_IDS.includes(g.game.gameID))
        setGames(filtered)
      } catch (err) {
        console.error(err)
      }
    }

    fetchData()
    const interval = setInterval(fetchData, 15000)
    return () => clearInterval(interval)
  }, [])

  const formatGame = (gameData) => {
    const g = gameData.game
    const home = g.home.names.short
    const away = g.away.names.short
    const homeScore = g.home.score || '0'
    const awayScore = g.away.score || '0'
    const clock = g.contestClock || ''
    const period = g.currentPeriod || ''
    const gameState = g.gameState
    const start = g.startTime || ''
    const homeLogo = LOGOS[g.home.names.seo] || ''
    const awayLogo = LOGOS[g.away.names.seo] || ''

    return (
      `<div class="game">
        <div class="team">
          ${awayLogo ? `<img src="${awayLogo}" class="logo"/>` : ''} ${away} ${awayScore}
        </div>
        <div class="team">
          ${homeLogo ? `<img src="${homeLogo}" class="logo"/>` : ''} ${home} ${homeScore}
        </div>
        <div class="status">
          ${gameState === 'pre' ? `Pre-game – ${start}` : `${period} — ${clock}`}
        </div>
      </div>`
    )
  }

  return (
    <div className="container">
      <Head>
        <title>🏆 NCAA Lacrosse</title>
      </Head>
      <h1>🏆 NCAA Lacrosse</h1>
      <h2>Quarterfinals – May 17</h2>
      <div dangerouslySetInnerHTML={{ __html: games.map(formatGame).join('<hr/>') }} />
    </div>
  )
}
