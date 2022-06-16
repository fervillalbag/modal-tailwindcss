import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="grid grid-cols-[280px,1fr] h-screen">
      <div className="bg-white"></div>
      <div className="bg-blue-200"></div>
    </div>
  );
};

export default Home;
