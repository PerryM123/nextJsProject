// libraries
import { useState, useEffect } from "react";
import { NextPage } from 'next'
// interfaces
import { IGameItem } from '../interfaces/IGameItem';
// style
import styles from '../styles/profile.module.scss';

interface ProfileState {
  selectedGame: string;
}

interface Props {
  gameList?: IGameItem[];
}

// TODO: NextPageって？？
const Profile: NextPage<Props> = ({ gameList = [] }) => {
  // state
  console.log('(state area) gameDataJson: ', gameList);
  const [gameData, setSelectedGame] = useState<ProfileState>({ selectedGame: 'game not selected'});
  
  const addNewGameToProfile = () => {
    console.log('addNewGameToProfile function was clicked');
    // ...gameDataは多分必要ない。なぜかというとstate一つしかない・・・ 
    setSelectedGame({...gameData, selectedGame: 'Toy Story'});
    console.log('gameData: ', gameData);
  }
  
  return (
    <div className={styles.profile}>
      <section>
        Add Game To Your List
        <button onClick={addNewGameToProfile}>Add Game</button>
        Current state: {gameData.selectedGame}
      </section>
      <section>
        <h2>Currently Playing</h2>
        <ul>
          
        </ul>
      </section>
      <section>
        <h2>Currently Playing</h2>
        <ul>
          
        </ul>
      </section>
      <section>
        <h2>Currently Playing</h2>
        <ul>
          
        </ul>
      </section>
      <section>
        <h2>Currently Playing</h2>
        <ul>
          
        </ul>
      </section>
    </div>
  )

  
}

export default Profile;