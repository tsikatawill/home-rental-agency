import { Hero, Navbar } from "../components";

export const Header = () => {
  return (
    <header
      className="h-[700px] -tracking-[1px]"
      style={{
        background:
          "linear-gradient(200.44deg, rgba(0, 0, 0, 0.0001) 16.41%, rgba(0, 0, 0, 0.51) 77.16%), url(/images/header-bg.jpg)",
      }}
    >
      <Navbar />
      <Hero />
    </header>
  );
};
