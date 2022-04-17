// libraries
import { useState } from "react";
// style
import styles from '../styles/registerGameForm.module.scss';

interface State {
  gameName: string;
  consoleName: string;
  status: string;
  image: File | null;
  registratonError: boolean;
  isLoading: boolean;
  isPostError: boolean;
  isPostSuccessful: boolean;
}

const defaultState: State = {
  gameName: '',
  consoleName: '',
  status: '',
  image: null,
  registratonError: false,
  isLoading: false,
  isPostError: false,
  isPostSuccessful: false
};

export default function RegisterGameForm() {
  const [state, setState] = useState<State>(defaultState);

  const handleRegisterButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setState({...state, isLoading: true});
    // TODO: remove setTimeout and API POST CALL here
    setTimeout(() => {
      if (
        state.gameName.length > 0 &&
        state.consoleName.length > 0 &&
        state.status.length > 0 &&
        state.image
      ) {
        setState({...state, registratonError: false, isLoading: false, isPostError: false, isPostSuccessful: false});
        sendToDatabase();
      } else {
        setState({...state, registratonError: true, isLoading: false, isPostError: false, isPostSuccessful: false});
      }
    }, 2000)
  }

  const sendToDatabase = () => {
    // TODO: 仮のコードとconsole.logをなくし、firebaseに接続するように修正
    console.log('sent to database');
    const apiPostCallWasSuccessful: boolean = true;
    if (apiPostCallWasSuccessful) {
      console.log('api Post Call Was Successful');
      resetInput();
    } else {
      console.log('show error message');
      setState(({...state, isPostError: true}));
    }
  }

  const resetInput = () => {
    setState({
      gameName: defaultState.gameName,
      consoleName: defaultState.consoleName,
      status: defaultState.status,
      image: defaultState.image,
      registratonError: defaultState.registratonError,
      isLoading: defaultState.isLoading,
      isPostError: defaultState.isPostError,
      isPostSuccessful: true
    });
  }

  const gameNameOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setState({...state, gameName: event.target.value, registratonError: false, isPostSuccessful: false});
  }

  const consoleOnChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setState({...state, consoleName: event.target.value, registratonError: false, isPostSuccessful: false});
  }

  const statusOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setState({...state, status: event.target.value, registratonError: false, isPostSuccessful: false});
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (!event.target.files) return;
    setState({...state, image: event.target.files[0], registratonError: false, isPostSuccessful: false});
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
          {
            state.isLoading && <p>LOADING!!!!</p>
          }
          {
            state.isPostError && <p>There was a post error. Please try again at another time.</p>
          }
          {
            state.isPostSuccessful && <p className={styles.successMessage}>Game Registration was successful</p>
          }
          {
            state.registratonError && <p className={styles.registerErrorMessage}>There's an imcomplete item. Please check and complete the form</p>
          }
          <button onClick={handleRegisterButton} disabled={state.isLoading} className={styles.registerButton}>Register Game</button>
        </div>
      </form>
  )
}