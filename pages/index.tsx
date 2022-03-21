// TODO: コメント必須
import { NextPage, GetServerSideProps } from 'next'
// component
import Header from "../components/Header";
// interface

// QUSTION: return statement and then JSX? Or const it and then JSX??
// can't use export default for const variables???
const Index: NextPage = () => (
  <div>
    <Header />
    <p>this is2 default</p>
    </div>
);

export default Index;