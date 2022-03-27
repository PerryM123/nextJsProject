// libraries
import { useState } from "react";
import { NextPage } from 'next'
// interfaces
import { IGameItem } from '../interfaces/IGameItem';
import { IUserProfile } from '../interfaces/IUserProfile';
import { GameCategories } from './../interfaces/GameCategories'
// components
import AddGame from './AddGame';
// style
import styles from '../styles/profile.module.scss';
import Link from "next/link";

interface Props {
  profileData: IUserProfile;
}

// TODO: NextPageって？？
const Profile: NextPage<Props> = ({profileData}) => {
  // QUESTION: こんな使い方でいいかな
  const [currentlyPlaying, setCurrentlyPlaying] = useState<IGameItem[]>(profileData.currentlyPlaying);
  const [completedGames, setCompletedGames] = useState<IGameItem[]>(profileData.completedGames);
  const [backloggedGames, setBackloggedGames] = useState<IGameItem[]>(profileData.backloggedGames);
  const [previouslyPlayedGames, setPreviouslyPlayedGames] = useState<IGameItem[]>(profileData.previouslyPlayedGames);

  const addGame = (valueFromInput: string, category: GameCategories): void => {
    const newList: IGameItem[] = [];
    const gameToBeAdded: IGameItem = {
      gameTitle: valueFromInput,
      gameId: 'megaman88',
      status: 'played',
      console: valueFromInput,
      imageUrl: '/images/playstation/games/megaman8.png'
    };
    if (category === "CurrentlyPlaying") {
      setCurrentlyPlaying(state => [...state, gameToBeAdded]);
    }
    else if (category === "CompletedGames") {
      setCompletedGames(state => [...state, gameToBeAdded]);
    }
    else if (category === "BackloggedGames") {
      setBackloggedGames(state => [...state, gameToBeAdded]);
    }
    else if (category === "PreviouslyPlayedGames") {
      setPreviouslyPlayedGames(state => [...state, gameToBeAdded]);
    }
  }

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
    <div className={styles.profile}>
      <AddGame addGame={addGame} />
      <section className={styles.gameSection}>
        <h2 className={styles.profileTitle}>Currently Playing</h2>
        <ul className={styles.gameList}>
          {
            currentlyPlaying.length ? displayTheData(currentlyPlaying) : 'no data'
          }
        </ul>
      </section>
      <section className={styles.gameSection}>
        <h2 className={styles.profileTitle}>Completed Games</h2>
        <ul className={styles.gameList}>
          {
            completedGames.length ? displayTheData(completedGames) : 'no data'
          }
        </ul>
      </section>
      <section className={styles.gameSection}>
        <h2 className={styles.profileTitle}>Backlogged Games</h2>
        <ul className={styles.gameList}>
          {
            backloggedGames.length ? displayTheData(backloggedGames) : 'no data'
          }
        </ul>
      </section>
      <section className={styles.gameSection}>
        <h2 className={styles.profileTitle}>Previously PlayedGames</h2>
        <ul className={styles.gameList}>
          {
            previouslyPlayedGames.length ? displayTheData(previouslyPlayedGames) : 'no data'
          }
        </ul>
      </section>
    </div>
  ) 
}

export default Profile;