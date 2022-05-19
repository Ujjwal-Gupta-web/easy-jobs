import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';


export default function Navbar({ active }) {

    const navigate=useNavigate();


  let className_jobs = "m-3 p-2 rounded";
  let className_post_a_job = "m-3 p-2 rounded";
  let className_login = "m-3 p-2 rounded";
  let className_dashboard = "m-3 p-2 rounded";

  if (active === "jobs") {
    className_jobs += " text-blue-300";
  } else if (active === "post_a_job") {
    className_post_a_job += " text-blue-300";
  } else if (active === "login" || active=="signup") {
    className_login += " text-blue-300";
  } else if (active === "dashboard") {
    className_dashboard += " text-blue-300";
  }

    return (

        <>
            <div className="nav flex">

                {
                    (localStorage.getItem("applicant_token"))
                    ?
                    <div><Link className={className_jobs} to="/jobs">Jobs</Link></div>
                    :
                    (localStorage.getItem("recruiter_token"))?<Link className={className_post_a_job} to="/postjob">Post a Job</Link>
                    :
                    <>
                    <div><Link className={className_jobs} to="/jobs">Jobs</Link></div>
                    <div><Link className={className_post_a_job} to="/postjob">Post a Job</Link></div>
                    </>
                }
                
                
                {/* <Link className={className_post_a_job} onMouseEnter={sound_alert} to="/postjob">Post a Job</Link> */}
                {
                    (localStorage.getItem("applicant_token") || localStorage.getItem("recruiter_token")) ?
                        (localStorage.getItem("applicant_token") ?
                            <>
                                <div><Link className={className_dashboard} to="/applicant/dashboard" >Dashboard</Link></div>
                                <div onClick={() => { localStorage.removeItem("applicant_token"); navigate("/"); }}><span style={{cursor:"pointer"}} className={className_login}>Logout</span></div>
                            </>
                            : <>
                                <div><Link className={className_dashboard} to="/recruiter/dashboard" >Dashboard</Link></div>
                                <div onClick={() => { localStorage.removeItem("recruiter_token"); navigate("/"); }}><span style={{cursor:"pointer"}} className={className_login} >Logout</span></div>
                            </>
                        )
                        :
                        <div><Link className={className_login} to="/login">Login/Signup</Link></div>
                }
            </div>
        </>

    )
}

