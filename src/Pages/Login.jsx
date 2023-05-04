import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

// import Bg from "./Background.svg";
const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <>
      <div className=" bg-image h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="clip-path  absolute w-auto h-auto flex items-center justify-center p-2 right-[30%]">
          <div className="  bg-slate-200 rounded-xl py-5 px-16 flex flex-col gap-3 items-center w-[400px]  z-20">
            <span className=" text-2xl text-blue-500 font-bold tracking-wide">
              Convo<span className="text-blue-800">Zone</span>
            </span>
            <span className="text-sm text-blue-600 font-normal tracking-wide">
              Enter Chat
            </span>
            <form onSubmit={submit} className="flex flex-col gap-4 w-[120%]">
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
              <button className="signbtn">Sign In</button>
              {err && <span>Something went wrong</span>}
            </form>
            <p className="text-sm">
              Don't have an account?{" "}
              <span className="text-blue-700 cursor-pointer active:text-xs transition-all">
                <Link to="/register">Register</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
