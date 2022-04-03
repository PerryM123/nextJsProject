// libraries
import { useState, useEffect } from "react";
import { NextPage } from 'next'
// interface
import { GameCategories } from './../interfaces/GameCategories'
// style
import styles from '../styles/addgame.module.scss';

interface Props {
  addGame(valueFromInput: string, category: GameCategories): void
}

interface ProfileState {
  selectedGame: string;
}

// QUESTION: え、componentsだとpropsでいいの？
const Profile: NextPage<Props> = (props) => {
  // state
  // TODO: make a state object instead of doing it all individually
  const [gameInputValue, setGameInputValue] = useState<string>('');
  const [currentlyPlayingIsActive, setCurrentlyPlayingIsActive] = useState<boolean>(true);
  const [completedGamesIsActive, setCompletedGamesIsActive] = useState<boolean>(false);
  const [backloggedGamesIsActive, setBackloggedGamesIsActive] = useState<boolean>(false);
  const [previouslyPlayedGamesIsActive, setPreviouslyPlayedGamesIsActive] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  const categoryClicked = (category: GameCategories) => {
    // reset the button active states
    setCurrentlyPlayingIsActive(false);
    setCompletedGamesIsActive(false);
    setBackloggedGamesIsActive(false);
    setPreviouslyPlayedGamesIsActive(false);

    if (category === "CurrentlyPlaying") {
      setCurrentlyPlayingIsActive(true);
    }
    else if (category === "CompletedGames") {
      setCompletedGamesIsActive(true);
    }
    else if (category === "BackloggedGames") {
      setBackloggedGamesIsActive(true);
    }
    else if (category === "PreviouslyPlayedGames") {
      setPreviouslyPlayedGamesIsActive(true);
    }
  }
  
  const addNewGameToProfile = () => {
    if (gameInputValue.length === 0) {
      setError(true);
      return;
    }
    if (currentlyPlayingIsActive) {
      props.addGame(gameInputValue, "CurrentlyPlaying");
    }
    if (completedGamesIsActive) {
      props.addGame(gameInputValue, "CompletedGames");
    }
    if (backloggedGamesIsActive) {
      props.addGame(gameInputValue, "BackloggedGames");
    }
    if (previouslyPlayedGamesIsActive) {
      props.addGame(gameInputValue, "PreviouslyPlayedGames");
    }
    setGameInputValue('');
    setError(false);
  }

  const updateGameInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGameInputValue(event.target.value);
    setError(false);
  }

  return (
    <section>
      <h2>Add Game To Your List</h2>
      <ul>
        <li><button className={ currentlyPlayingIsActive === true ? styles.isActive : ''} onClick={() => categoryClicked("CurrentlyPlaying")}>currentlyPlaying</button></li>
        <li><button className={ completedGamesIsActive === true ? styles.isActive : ''} onClick={() => categoryClicked("CompletedGames")}>completedGames</button></li>
        <li><button className={ backloggedGamesIsActive === true ? styles.isActive : ''} onClick={() => categoryClicked("BackloggedGames")}>backloggedGames</button></li>
        <li><button className={ previouslyPlayedGamesIsActive === true ? styles.isActive : ''} onClick={() => categoryClicked("PreviouslyPlayedGames")}>previouslyPlayedGames</button></li>
      </ul>
      <div>
        <input type="text" value={gameInputValue} placeholder="Add Game Here" onChange={updateGameInputValue} />
      </div>
      {
        isError && <p className={styles.errorMessage}>Error! Please add a name!</p>
      }
      <button onClick={addNewGameToProfile}>Add Game</button>
    </section>
  );
}

export default Profile;