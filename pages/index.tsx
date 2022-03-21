// TODO: コメント必須
import { NextPage } from 'next'
// component
import Header from "../components/Header";

interface TestProps {
  name: string;
}

interface TestResponse {
  name: string;
}

// QUSTION: return statement and then JSX? Or const it and then JSX??
// can't use export default for const variables???
const Index: NextPage<TestProps> = ({ name }) => (
  <div>
    <Header />
    {name}
    <p>this is2 default</p>
    </div>
);

Index.getInitialProps = async (ctx: any) => {
  // visiting the index page directly runs getInitialProps on the server and not on the client
  // source: https://stackoverflow.com/a/54877769
  console.log('getInitialProps');
  console.log('ctx: ', ctx);
  // TODO: setup env file one dat
  const res = await fetch('http://localhost:3000/api/hello');
  const json: TestResponse = await res.json();
  console.log('json: ', json);
  const name: string = json.name;
  console.log('name: ', name);
  return {name}
}

export default Index;