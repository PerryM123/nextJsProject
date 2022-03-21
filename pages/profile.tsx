// lib
import { NextPage, GetServerSideProps } from 'next'
// components
import Header from "../components/Header";
import Profile from "../components/Profile";
// interfaces
import { IGameItem } from '../interfaces/IGameItem';

interface GameListResponse {
  gameList: IGameItem[];
}

interface Props {
  gameList?: IGameItem[];
}

const ProfilePage = (props: Props) => {
  console.log('profilePage: props.gameList: ', props.gameList);
  return (
    <>
      <Header />
      <Profile gameList={props.gameList}/>
    </>
  )
}

// その他: getInitialPropsとgetServerSidePropsを同時に使えない。フロントでAPIを呼び出すか裏側で直接にSELECTしたりするかひとつ選ぶ必要あるみたい
// visiting the index page directly runs getInitialProps on the server and not on the client
// source: https://stackoverflow.com/a/54877769
export const getServerSideProps: GetServerSideProps = async (context) => {
  // QUESTION: ここでデータベース直接にSELECTしたりする？？？
  // APIやDBからのデータ取得処理などを記載

  console.log('getServerSideProps: context: ', context);
  // TODO: setup env file one dat
  // TODO: annoying when the port changes, I have to change that port name here too...
  const res = await fetch('http://localhost:3000/api/gameList');
  // TODO: ↑↑↑↑ indexページを開くたびにAPIが呼び出されてしまうので下のURLで解決できるかも
  // https://stackoverflow.com/a/67452646
  const gameDataJson: GameListResponse = await res.json();
  console.log('res is: ', res);
  console.log('gameDataJson is: ', gameDataJson);

  return {
    // ページコンポーネントに渡すpropsだとprops属性名じゃないといけない？？？
    props: {
      gameList: gameDataJson.gameList
    }
  };
};

export default ProfilePage;