import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="flex items-center bg-[#010d2e] h-12 p-2 justify-between text-blue-300">
      <span className=" text-lg text-blue-500 font-bold tracking-wide">
        C<span className="text-blue-800">Z</span>
      </span>
      <div className="flex gap-2 items-center ">
        <img
          src={currentUser.photoURL}
          alt=""
          className="bg-blue-50 h-6 w-6 rounded-full object-cover"
        />
        <span>{currentUser.displayName}</span>
        <button
          className="bg-blue-800 text-xs rounded-lg p-1"
          onClick={() => signOut(auth)}
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
