// libraries
import { useState, useEffect } from "react";
import { NextPage } from 'next'
// interfaces
import { IGameItem } from '../interfaces/IGameItem';
import { IUserProfile } from '../interfaces/IUserProfile';
// components
import AddGame from './AddGame';
// style
import styles from '../styles/profile.module.scss';
import Link from "next/link";

interface Props {
  profileData?: IUserProfile;
}

// TODO: NextPageって？？
const Profile: NextPage<Props> = ({ profileData = {} }) => {
  console.log('(state area) profileData: ', profileData);

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
      <AddGame />
      <section className={styles.gameSection}>
        <h2 className={styles.profileTitle}>currentlyPlaying</h2>
        <ul className={styles.gameList}>
          {
            profileData.currentlyPlaying?.length ? displayTheData(profileData.currentlyPlaying) : 'no data'
          }
        </ul>
      </section>
      <section className={styles.gameSection}>
        <h2 className={styles.profileTitle}>completedGames</h2>
        <ul className={styles.gameList}>
          {
            profileData.completedGames?.length ? displayTheData(profileData.completedGames) : 'no data'
          }
        </ul>
      </section>
      <section className={styles.gameSection}>
        <h2 className={styles.profileTitle}>backloggedGames</h2>
        <ul className={styles.gameList}>
          {
            profileData.backloggedGames?.length ? displayTheData(profileData.backloggedGames) : 'no data'
          }
        </ul>
      </section>
      <section className={styles.gameSection}>
        <h2 className={styles.profileTitle}>previouslyPlayedGames</h2>
        <ul className={styles.gameList}>
          {
            profileData.previouslyPlayedGames?.length ? displayTheData(profileData.previouslyPlayedGames) : 'no data'
          }
        </ul>
      </section>
    </div>
  )

  
}

export default Profile;