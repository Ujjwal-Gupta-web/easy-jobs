import React from "react";
import Navbar from "../components/Navbar";
import {Link} from 'react-router-dom'
import {useState} from "react"

export default function Login(){


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = async (e) => {
        e.preventDefault();

        

        setEmail('');
        setPassword('');

    }



  return (
    <>
      <div className="signup-page">
        <div className="upperbar bg-indigo-600">
          <div className="nav float-right p-[3.5rem] text-3xl font-encode text-white">
            <Navbar active="post_a_job" />
          </div>
          <Link to="/">
        <h1 className="text-6xl text-white  shadow-2xl font-medium p-10 font-titan">
          {" "}
          Easy Jobs
        </h1>
        </Link>
        </div>

        <div className="signup-form text-left p-32 bg-white m-32 rounded-lg">
        <h1 className="ml-20 mb-5 text-[3rem] font-semibold text-indigo-600">
            {" "}
           Login
         <br />
           <span className="text-xl">Welcome Back !</span>
          </h1>
          <label className="text-xl ml-20 font-medium mt-5"> Email address</label>
          <br />
          <input
            type="text"
            value={email}
            onChange={((e)=>{setEmail(e.target.value)})}
            className="role shadow-2xl p-3 w-[20%] text-xl ml-20 bg-white  outline-none border-2 rounded-xl"
          />
    

        

        <div className="location mt-5">
          <label className="text-xl ml-20 font-medium">  Password</label>
          <br/>
          <input
            type="password"
            value={password}
            onChange={((e)=>setPassword(e.target.value))}
            className="location p-3 border-2 shadow-2xl w-[20%] text-xl  ml-20 bg-white outline-none rounded-xl"
          />
        </div>


        <div className="jobtype mt-5">
          <label className="jobtype ml-20 text-xl font-medium ">
            User Type{" "}
          </label>
          <br />
          <select className="job-type shadow-2xl p-3 w-[20%] text-xl border-2 ml-20 mb-10 bg-white outline-none rounded-xl">
            <option value="1">Applicant</option>
            <option value="1">Recruiter</option>
          </select>
        </div>

        <button
          className="submit p-3 border-2 shadow-2xl w-[20%] text-xl hover:bg-[#c0c0c0] ml-20  bg-white outline-none rounded-xl "
          type="submit"
          onClick={handleChange}

        >
          Submit
        </button>

    
      </div>
      </div>
    </>
  );
}
