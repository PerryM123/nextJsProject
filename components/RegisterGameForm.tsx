// libraries
import { useState } from "react";
// style
import styles from '../styles/registerGameForm.module.scss';

export default function RegisterGameForm() {
  const [image, setImage] = useState<File | null>(null);

  const handleRegisterButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log('handleRegisterButton was clicked: event: ', event);
  }

  const handleOnChange = (event: any): any => {
    setImage(event.target?.files[0])
  }
  return (
    <form>
        <div className={styles.formItem}>
          <label htmlFor="gameName" className={styles.formLabel}>Enter Game Name</label>
          <input type='text' name='gameName' />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="selectConsole" className={styles.formLabel}>Select Console</label>
          <select name="selectConsole">
            <option value="ps1">PS1</option>
            <option value="ps2">PS2</option>
            <option value="ps3">PS3</option>
            <option value="ps4">PS4</option>
            <option value="SuperNintendo">Super Nintendo</option>
          </select>
        </div>
        <div className={styles.formItem}>
          <label htmlFor="selectStatus" className={styles.formLabel}>Select Status</label>
          <select name="selectStatus">
            <option value="currentlyPlaying">Currently Playing</option>
            <option value="completedGames">Completed Games</option>
            <option value="backloggedGames">Backlogged Games</option>
            <option value="previouslyPlayedGames">Previously Played Games</option>
          </select>
        </div>
        <div className={styles.formItem}>
          <label htmlFor="selectGameImage" className={styles.formLabel}>Select Game Image</label>
          {
            image && <img src={URL.createObjectURL(image)} className={styles.previewImage} />
          }
          <input type='file' onChange={handleOnChange} name='selectGameImage' accept='image/jpeg, image/png' />
        </div>
        <div className={styles.formItem}>
          <button onClick={handleRegisterButton} className={styles.registerButton}>Register Game</button>
        </div>
      </form>
  )
}