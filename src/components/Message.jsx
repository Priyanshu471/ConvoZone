import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    // flex gap-5 mb-5
    <div
      ref={ref}
      className={`flex gap-5 mb-5 ${
        message.senderId === currentUser.uid && "sender"
      }`}
    >
      <div className="flex flex-col text-gray-400 font-light mt-2 ">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="">Just now</span>
      </div>
      <div className="max-w-[80%] flex flex-col gap-2 messagecontent">
        <p className="bg-[#01638a] p-2 text-slate-300 rounded-t-xl rounded-br-xl max-w-max">
          {message.text}
        </p>
        {message.image && (
          <img src={message.image} alt="" className="w-[30%]" />
        )}
      </div>
    </div>
  );
};

export default Message;
