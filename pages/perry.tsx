import Header from "../components/Header";
// TODO: ページズよりコンポーネントにstylesがあるべきかな
import styles from '../styles/perry.module.scss';

export default function Perry() {
  return (
    <>
      <Header />
      <p>My <span className={styles.dude}>name</span> is Perry</p>
    </>
  )
}
