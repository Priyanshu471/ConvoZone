import React, { useState } from "react";
import Dp from "../img/dp.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import {
  ref,
  getStorageuploadBytesResumable,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const submit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="bg-image h-[100vh] flex items-center justify-center">
      <div className="clip-path w-auto h-auto flex items-center justify-center p-2 absolute right-[30%]">
        <div className=" bg-slate-200 rounded-lg py-5 px-16 flex flex-col gap-3 items-center w-[400px]">
          <span className=" text-2xl text-blue-500 font-bold tracking-wide">
            Convo<span className="text-blue-800">Zone</span>
          </span>
          <span className="text-sm text-blue-600 font-normal tracking-wide">
            Create Account
          </span>
          <form onSubmit={submit} className="flex flex-col gap-4 w-[120%]">
            <div className="inputbox">
              <input required="required" type="text" />
              <span>Username</span>
              <i></i>
            </div>
            <div className="inputbox">
              <input required="required" type="text" />
              <span>Email</span>
              <i></i>
            </div>
            <div className="inputbox">
              <input required="required" type="password" maxLength={6} />
              <span>Password</span>
              <i></i>
            </div>
            <input
              type="file"
              id="file"
              name="Dp"
              required
              className="border-none"
              style={{ display: "none" }}
            />
            <label
              htmlFor="file"
              className="flex items-center cursor-pointer gap-1"
            >
              <img src={Dp} alt="" className=" w-6" />
              <span className="text-blue-800 text-sm">Add Display Picture</span>
            </label>
            <button disabled={loading} className="signbtn">
              Sign Up
            </button>
            {loading && "Uploading and compressing the image please wait..."}
            {err && <span>Something went wrong!!</span>}
          </form>
          <p className="text-sm">
            Already have an account?{" "}
            <span className="text-blue-700 cursor-pointer active:text-xs transition-all">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
