// libraries
import Link from "next/link"
// interfaces
// TODO: aliasを追加
import { IGameItem } from '../interfaces/IGameItem';
// style
// QUESTION: .modules.scssじゃないとダメ？
import styles from '../styles/header.module.scss';

export default function Header() {
  return (
    <ul className={styles.listOfLinks}>
      <li>
        <Link href="/">
          <a className={styles.headerLink}>home</a>
        </Link>
      </li>
      <li>
        <Link href="/perry">
          <a className={styles.headerLink}>perry</a>
        </Link>
      </li>
      <li>
        <Link href="/previousIndex">
          <a className={styles.headerLink}>previousIndex</a>
        </Link>
      </li>
      <li>
        <Link href="/profile">
          <a className={styles.headerLink}>profile</a>
        </Link>
      </li>
    </ul>
  )
}