import Head from "next/head";
import Home from "../components/Home/Home";

interface Props {}

const HomePage = (props: Props) => {
  return (
    <>
      <Head>
        <title>Alonso Gil Pérez</title>
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
