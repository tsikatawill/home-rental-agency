import { CostShowcase, Header } from "../components";

import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home Rental Agency</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <CostShowcase />
    </>
  );
};

export default Home;
