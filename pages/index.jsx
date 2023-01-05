import Head from "next/head";
import { Header } from "../components";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home Rental Agency</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </>
  );
};

export default Home;
