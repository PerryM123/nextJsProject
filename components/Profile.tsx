// libraries
import { useState, useEffect } from "react";
import { NextPage } from 'next'
// interfaces
import { IGameItem } from '../interfaces/IGameItem';
import { IUserProfile } from '../interfaces/IUserProfile';
// style
import styles from '../styles/profile.module.scss';

interface ProfileState {
  selectedGame: string;
}

interface Props {
  profileData?: IUserProfile;
}

// TODO: NextPageって？？
const Profile: NextPage<Props> = ({ profileData = {} }) => {
  console.log('(state area) profileData: ', profileData);
  // state
  const [gameData, setSelectedGame] = useState<ProfileState>({ selectedGame: 'game not selected'});
  
  const addNewGameToProfile = () => {
    console.log('addNewGameToProfile function was clicked');
    // ...gameDataは多分必要ない。なぜかというとstate一つしかない・・・ 
    setSelectedGame({...gameData, selectedGame: 'Toy Story'});
    console.log('gameData: ', gameData);
  }

  const displayTheData = (gameData: IGameItem[]) => {
    return (
      gameData.map((game: IGameItem, index: number) => 
        <li key={index}>{game.gameTitle}</li>
      )
    )
  }
  
  return (
    <div className={styles.profile}>
      <section>
        Add Game To Your List
        <button onClick={addNewGameToProfile}>Add Game</button>
        Current state: {gameData.selectedGame}
      </section>
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