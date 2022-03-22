// libraries
import { useState, useEffect } from "react";
import { NextPage } from 'next'
// style
import styles from '../styles/addgame.module.scss';

type GameCategories = 
  "CurrentlyPlaying" |  
  "CompletedGames" |  
  "BackloggedGames" |  
  "PreviouslyPlayedGames";

interface Props {

}

interface ProfileState {
  selectedGame: string;
}

const Profile: NextPage<Props> = () => {
  // state
  const [gameData, setSelectedGame] = useState<ProfileState>({ selectedGame: 'game not selected'});
  const [selectedCategory, setCategory] = useState();
  
  const categoryClicked = (category: GameCategories) => {
  // const categoryClicked: MouseEventHandler<HTMLButtonElement> = (category: GameCategories) => {

    console.log('category is: ', category);
  }
  
  const addNewGameToProfile = () => {
    console.log('addNewGameToProfile function was clicked');
    // ...gameDataは多分必要ない。なぜかというとstate一つしかない・・・ 
    setSelectedGame({...gameData, selectedGame: 'Toy Story'});
    console.log('gameData: ', gameData);
  }

  return (
    <section>
      <h2>Add Game To Your List</h2>
      <ul>
        <li><button onClick={() => categoryClicked("CurrentlyPlaying")}>currentlyPlaying</button></li>
        <li><button onClick={() => categoryClicked("CompletedGames")}>completedGames</button></li>
        <li><button onClick={() => categoryClicked("BackloggedGames")}>backloggedGames</button></li>
        <li><button onClick={() => categoryClicked("PreviouslyPlayedGames")}>previouslyPlayedGames</button></li>
      </ul>
      <button onClick={addNewGameToProfile}>Add Game</button>
      Current state: {gameData.selectedGame}
    </section>
  );
}

export default Profile;