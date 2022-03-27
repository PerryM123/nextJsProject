// libraries
import { NextPage } from 'next'
import Link from "next/link";
// interfaces
import { IGameItem } from '../interfaces/IGameItem';
// style
import styles from '../styles/profile.module.scss';

interface Props {
  gameList: IGameItem[];
}

const Profile: NextPage<Props> = ({gameList}) => {
  const displayTheData = (gameData: IGameItem[]) => {
    return (
      gameData.map((game: IGameItem, index: number) => 
        <li key={index} className={styles.listItem}>
          <Link 
            as={`/games/${game.gameId}`} 
            href="/games/[games]/"
          >
            <a className={styles.gameLink}>{game.gameTitle}</a>
          </Link>
        </li>
      )
    )
  }
  return (
    <section className={styles.gameSection}>
      <h2 className={styles.profileTitle}>Currently Playing</h2>
      <ul className={styles.gameList}>
        {
          gameList.length ? displayTheData(gameList) : 'no data'
        }
      </ul>
    </section>
  ) 
}

export default Profile;