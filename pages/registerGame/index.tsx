import { useRouter } from "next/router";
import Header from "../../components/Header";
import RegisterGameForm from "../../components/RegisterGameForm";

export default function Index() {
  return (
    <>
      <Header />
      <RegisterGameForm />
    </>
  )
}