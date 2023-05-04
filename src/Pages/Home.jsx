import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
  return (
    <div className="bg-theme h-[100vh] flex items-center justify-center">
      <div className="rounded-lg w-[70%] h-[80%] grid grid-cols-4 overflow-hidden  shadow-2xl shadow-black">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
