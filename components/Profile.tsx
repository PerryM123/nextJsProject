// libraries
import { useState } from "react";
import { NextPage } from 'next'
// interfaces
import { IGameItem } from '../interfaces/IGameItem';
import { IUserProfile } from '../interfaces/IUserProfile';
import { GameCategories } from './../interfaces/GameCategories'
// components
import AddGame from './AddGame';
import GameCategoryDisplay from './GameCategoryDisplay';
// style
import styles from '../styles/profile.module.scss';

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
  return (
    <div className={styles.profile}>
      <AddGame addGame={addGame} />
      <div className={styles.gameListSection}>
        <div className="currentlyPlayingSection">
          <GameCategoryDisplay gameList={currentlyPlaying} gameCategoryName="Currently Playing" />
        </div>
        <div className="completedGamesSection">
          <GameCategoryDisplay gameList={completedGames} gameCategoryName="Completed Games"/>
        </div>
        <div className="backloggedGamesSection">
          <GameCategoryDisplay gameList={backloggedGames} gameCategoryName="Backlogged Games"/>
        </div>
        <div className="previouslyPlayedGamesSection">
          <GameCategoryDisplay gameList={previouslyPlayedGames} gameCategoryName="Previously Played" />
        </div>
      </div>
    </div>
  ) 
}

export default Profile;