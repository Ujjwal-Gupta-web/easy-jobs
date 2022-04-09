import React from "react";
import Navbar from "../components/Navbar";

export default function Login(){
  return (
    <>
      <div className="signup-page">
        <div className="upperbar bg-indigo-600">
          <div className="nav float-right p-[3.5rem] text-3xl font-encode text-white">
            <Navbar active="post_a_job" />
          </div>
          <h1 className="text-6xl text-white  shadow-2xl font-medium p-10 font-titan">
            {" "}
            Easy Jobs
          </h1>
        </div>

        <div className="signup-form text-left p-32 bg-white m-32 rounded-lg">
        <h1 className="ml-20 mb-5 text-[3rem] font-semibold text-indigo-600">
            {" "}
           Login
         <br />
           <span className="text-xl">Welcome Back !</span>
          </h1>
          <label className="text-xl ml-20 font-medium "> Email address</label>
          <input
            type="text"
            className="role shadow-2xl p-3 w-[20%] text-xl m-3 bg-white  outline-none border-2 rounded-xl"
          />
    

        

        <div className="location">
          <label className="text-xl ml-20 font-medium">  Password</label>
          <input
            type="text"
            className="location p-3 border-2 shadow-2xl w-[20%] text-xl m-5 bg-white outline-none rounded-xl"
          />
        </div>

        <button
          className="submit p-3 border-2 shadow-2xl w-[20%] text-xl hover:bg-[#c0c0c0] ml-20 bg-white outline-none rounded-xl "
          type="submit"

        >
          Submit
        </button>

    
      </div>
      </div>
    </>
  );
}
