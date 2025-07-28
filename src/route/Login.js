import React from 'react'

import '../css/login.css';


import {auth , provider} from "../data/back.js"
import {signInWithPopup} from "firebase/auth"
import { useNavigate } from 'react-router-dom';

import Dupnav from '../component/Dupnav';

const Login = ({setIsAuth}) => {
    let navigate = useNavigate();


    const Signe = () => {
        signInWithPopup(auth,provider).then((result) =>{
            localStorage.setItem("isAuth" , true);
            setIsAuth(true);
            navigate("/");
        })
      }
  return (
    <div>
      <Dupnav/>
    <div className='loginbody' >
      <div className='center'>
         <p>    Sign with email  or google</p>
         <button className='btn'onClick={Signe}> sign in with email</button>
         </div>
    </div>
    </div>
  )
}

export default Login
