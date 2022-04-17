// libraries
import { useState } from "react";
// style
import styles from '../styles/registerGameForm.module.scss';

interface State {
  gameName: string;
  console: string;
  status: string;
  image: File | null;
}

export default function RegisterGameForm() {
  const [state, setState] = useState<State>({
    gameName: '',
    console: '',
    status: '',
    image: null
  });

  const handleRegisterButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }

  const gameNameOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setState({...state, gameName: event.target.value})
  }

  const consoleOnChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setState({...state, console: event.target.value})
  }

  const statusOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setState({...state, status: event.target.value})
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (!event.target.files) return;
    setState({...state, image: event.target.files[0]})
  }
  return (
    <form>
        <div className={styles.formItem}>
          <label htmlFor="gameName" className={styles.formLabel}>Enter Game Name</label>
          <input type='text' name='gameName' value={state.gameName} onChange={gameNameOnChange} />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="selectConsole" className={styles.formLabel}>Select Console</label>
          <select name="selectConsole" onChange={consoleOnChange}>
            <option hidden>選択してください</option>
            <option value="ps1">PS1</option>
            <option value="ps2">PS2</option>
            <option value="ps3">PS3</option>
            <option value="ps4">PS4</option>
            <option value="SuperNintendo">Super Nintendo</option>
          </select>
        </div>
        <div className={styles.formItem}>
          <label htmlFor="selectStatus" className={styles.formLabel}>Select Status</label>
          <select name="selectStatus" onChange={statusOnChange}>
            <option hidden>選択してください</option>
            <option value="currentlyPlaying">Currently Playing</option>
            <option value="completedGames">Completed Games</option>
            <option value="backloggedGames">Backlogged Games</option>
            <option value="previouslyPlayedGames">Previously Played Games</option>
          </select>
        </div>
        <div className={styles.formItem}>
          <label htmlFor="selectGameImage" className={styles.formLabel}>Select Game Image</label>
          {
            state.image && <img src={URL.createObjectURL(state.image)} className={styles.previewImage} />
          }
          <input type='file' onChange={handleOnChange} name='selectGameImage' accept='image/jpeg, image/png' />
        </div>
        <div className={styles.formItem}>
          <button onClick={handleRegisterButton} className={styles.registerButton}>Register Game</button>
        </div>
      </form>
  )
}