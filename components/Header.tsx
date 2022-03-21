// components
import Link from "next/link"
// style
// QUESTION: .modules.scssじゃないとダメ？
import styles from '../styles/header.module.scss';

export default function Header() {
  // TODO: Interfaceフォルダーディレクトリを作るべき？？？
  interface GameItem {
    gameTitle: string;
    gameId: string;
    status: string;
    console: string;
    imageUrl: string;
  }

  const fakeJson: GameItem[] = [
    {
      gameTitle: 'Megaman 8',
      gameId: 'megaman8',
      status: 'played',
      console: 'playstation',
      imageUrl: '/images/playstation/games/megaman8.png'
    },
    {
      gameTitle: 'Megaman 2',
      gameId: 'megaman2',
      status: 'completed',
      console: 'Nintendo',
      imageUrl: '/images/playstation/games/megaman2.png'
    },
    {
      gameTitle: 'Cuphead',
      gameId: 'cuphead',
      status: 'Playing Now',
      console: 'Playstation 4',
      imageUrl: '/images/playstation/games/cuphead.png'
    },
    {
      gameTitle: 'Persona 4',
      gameId: 'persona4',
      status: 'backlog',
      console: 'Playstation 2',
      imageUrl: '/images/playstation-2/games/persona4.png'
    },
    {
      gameTitle: 'Resident Evil: RE Remake',
      gameId: 'resident-evil-remake',
      status: 'playing now',
      console: 'Playstation 4',
      imageUrl: '/images/playstation-4/games/resident-evil-re-remake.png'
    },
  ];
  
  return (
    <ul>
      <li>
        <Link href="/">
          <a className={styles.headerLink}>home</a>
        </Link>
      </li>
      <li>
        <Link href="/perry">
          <a className={styles.headerLink}>perry</a>
        </Link>
      </li>
      <li>
        <Link href="/previousIndex">
          <a className={styles.headerLink}>previousIndex</a>
        </Link>
      </li>

      <h3>List of Available games</h3>
      {fakeJson.map((game, index) => {
        return (
          <li key={index}>
            <Link
              as={`/games/${game.gameId}`} 
              href="/games/[games]/"
            >
              <a className={styles.headerLink}>{game.gameTitle}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  )
}