import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const searchUser = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };
  const enter = (e) => {
    e.code === "Enter" && searchUser();
  };

  const selection = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setUser(null);
    setUsername("");
  };
  return (
    <div className="bg-[#071747] border-b border-gray-600">
      <div className="p-2">
        <input
          type="text"
          className="bg-transparent text-slate-200 outline-none placeholder:text-gray-600"
          placeholder="Search..."
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={enter}
          value={username}
        />
      </div>
      {err && <span className="text-white">User not found!!</span>}
      {user && (
        <div
          className=" p-2 flex items-center gap-2 cursor-pointer text-slate-100 hover:bg-[#020e33]"
          onClick={selection}
        >
          <img
            src={user.photoURL}
            alt=""
            className="w-12 h-12 rounded-full object-cover "
          />
          <div className="">
            <span className="font-semibold text-lg">{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
