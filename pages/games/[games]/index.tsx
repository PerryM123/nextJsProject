import { useRouter } from "next/router";
import Header from "../../../components/Header";

// QUESTION: indexのままでいい？コンポーネント名が被らない？
export default function Index() {
  const router = useRouter();
  console.log('router.query: ', router.query.games );

  return (
    <>
      <Header />
      <p>{router.query.games}'s page</p>
      <ul>
        <li>gameTitle: {router.query.gameTitle}</li>
        <li>gameId: {router.query.gameId}</li>
        <li>status: {router.query.status}</li>
        <li>console: {router.query.console}</li>
        <li>imageUrl: {router.query.imageUrl}</li>
      </ul>
    </>
  )
}