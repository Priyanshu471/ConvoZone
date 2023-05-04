import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate;
  // <div className="bg-image flex justify-end items-center h-[100vh]">
  //   <div className=" absolute w-[350px] bg-white h-[400px] rounded-3xl clip-path1 flex justify-center items-center flex-col gap-16 right-[30%]">
  //     <span className=" text-4xl text-blue-500 hover:text-blue-800 font-bold tracking-wide">
  //       Convo<span className="text-blue-800 hover:text-blue-500">Zone</span>
  //     </span>
  //     <div className="w-[100%] flex justify-start flex-col items-center">
  //       <button className="normal-signin ">
  //         <Link to="/login">Sign in</Link>
  //       </button>
  //       <div className="line">Don't have an Account?</div>
  //       <button className="create-account">
  //         <Link to="/register">Create Account</Link>
  //       </button>
  //     </div>
  //   </div>
  // </div>
  return (
    <div className=" bg-image flex justify-center items-center h-[100vh]">
      <div class="card clip-path1 w-[350px] ml-10">
        <div class="heading">
          <span className=" text-4xl text-blue-500 hover:text-blue-800 font-bold tracking-wide">
            Convo
            <span className="text-blue-800 hover:text-blue-500">Zone</span>
          </span>
        </div>
        <div class="details">Connect and chat with ease, anytime, anywhere</div>
        <button className="btn1">
          <Link to="/login">Sign in</Link>
        </button>
        <div className="line">Don't have an Account?</div>
        <button className="btn2">
          <Link to="/register">Create Account</Link>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
