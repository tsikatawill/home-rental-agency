import {
  AddProperty,
  CostShowcase,
  Footer,
  Header,
  Lifestyle,
  Properties,
  Testimonials,
} from "../components";

import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home Rental Agency</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <CostShowcase />
        <Properties />
        <Lifestyle />
        <AddProperty />
        <Testimonials />
      </main>

      <Footer />
    </>
  );
};

export default Home;
