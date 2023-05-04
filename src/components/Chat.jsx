import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="col-span-3 ">
      <div className="flex justify-between items-center p-1 bg-[#021347] h-12">
        <div className="flex items-center">
          <img
            src={data.user?.photoURL}
            alt=""
            className="w-8 h-8 rounded-full object-cover m-1"
          />
          <span className=" text-lg text-slate-300 font-medium">
            {data.user?.displayName}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <img src={Cam} alt="" className="h-6 cursor-pointer" />
          <img src={Add} alt="" className="h-6 cursor-pointer" />
          <img src={More} alt="" className="h-6 cursor-pointer" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
