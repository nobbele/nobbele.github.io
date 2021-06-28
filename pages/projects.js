import styles from './Projects.module.css'
import Header from "../components/Header"
import ContentWrapper from '../components/ContentWrapper'
import Project from '../components/Project'

const games = [
  {
    title: "Lunar Lander Remake",
    description: "A game for the 2019 Polyrealm Game Jam.",
    thumbnail: "https://img.itch.zone/aW1nLzE5MjA1NDcucG5n/315x250%23c/2TQFWd.png",
    link: "https://thejayduck.itch.io/lunar-lander-remake",
  },
  {
    title: "Treasured Memories",
    description: "A visual novel that I wrote the story for.",
    thumbnail: "https://img.itch.zone/aW1nLzQ4OTE3MDIucG5n/315x250%23c/2PAjSP.png",
    link: "https://thejayduck.itch.io/treasured-memories",
  },
  {
    title: "Shogi Client",
    description: "Shogi game for a school assignment.",
    thumbnail: "https://raw.githubusercontent.com/nobbele/ShogiClient/main/Content/Shogi%20Logo.png",
    link: "https://github.com/nobbele/ShogiClient",
  },
]

const websites = [
  {
    title: "Personal Website",
    description: "This website!",
    links: [
      {
        name: "Live",
        url: "https://nobbele.dev/"
      },
      {
        name: "GitHub",
        url: "https://github.com/nobbele/nobbele.github.io"
      }
    ],
  },
  {
    title: "Novel Tracker",
    description: "(Light) Novel tracking and database.",
    thumbnail: "https://raw.githubusercontent.com/thejayduck/lightnoveltracker/main/public/book.png",
    links: [
      {
        name: "Live",
        url: "https://lightnoveltracker.herokuapp.com/"
      },
      {
        name: "GitHub",
        url: "https://github.com/thejayduck/lightnoveltracker"
      }
    ],
  }
]

const softwares = [
  {
    title: "NS Engine",
    description: "Visual Novel Engine.",
    thumbnail: "https://raw.githubusercontent.com/nobbele/ns-engine/master/icon.png",
    link: "https://github.com/nobbele/ns-engine",
  },
  {
    title: "osr2mp4-rs",
    description: "Render osu! replay files (.osr) to mp4.",
    link: "https://github.com/nobbele/ns-engine",
  },
  {
    title: "ggez",
    description: "I am currently one of the maintainers of ggez!",
    thumbnail: "https://raw.githubusercontent.com/ggez/ggez/master/docs/ggez-logo-maroon-full.svg",
    link: "https://github.com/ggez/ggez",
  },
  {
    title: "AntiPVP",
    description: "Minecraft Spigot plugin to disable pvp damage while allowing hits.",
    link: "https://github.com/nobbele/AntiPVP",
  },
  {
    title: "CreeperGriefManipulator",
    description: "Minecraft Spigot plugin to nerf creeper griefing on terrain.",
    link: "https://github.com/nobbele/CreeperGriefManipulator",
  }
]

export default function Projects() {
  return (<>
    <Header />
    <ContentWrapper>
      <h1>Projects</h1>
      <h2>Games</h2>
      <ul className={styles.projectList}>
        {games.map(game => (
          <li key={game.title} className={styles.projectEntry}><Project project={game} /></li>
        ))}
      </ul>
      <h2>Websites</h2>
      <ul className={styles.projectList}>
        {websites.map(website => (
          <li key={website.title} className={styles.projectEntry}><Project project={website} /></li>
        ))}
      </ul>
      <h2>Software</h2>
      <ul className={styles.projectList}>
        {softwares.map(software => (
          <li key={software.title} className={styles.projectEntry}><Project project={software} /></li>
        ))}
      </ul>
    </ContentWrapper>
  </>)
}