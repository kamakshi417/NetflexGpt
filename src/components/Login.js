import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidation} from '../utils/Validation.js'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase.js';

import { useDispatch } from 'react-redux';
import {addUser} from "../utils/userSlice";
import userlogo from '../assets/user.png';
import {IMAGE_BACKGROUND} from '../utils/constants.js'
const Login = () => {

  const [isSignIn,setisSignIn] = useState(true);
  const email = useRef(null);
  const passwd = useRef(null);
  const uname = useRef(null);
  const [errorMessage,setErrorMessage] = useState(null);
 
  const dispatch = useDispatch();
  function signup(){
    
    setisSignIn(!isSignIn);
  }
  function handledForm(){
    
    let message = checkValidation(email.current.value,passwd.current.value);
    setErrorMessage(message);
    if(message)return;
    if(!isSignIn){
    
createUserWithEmailAndPassword(auth, email.current.value,passwd.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user,{
      displayName:uname.current.value,
      photoURL:userlogo
    }).then(()=>{
      const {uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
      
    }).catch(()=>{

    });
    
    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +" "+errorMessage);
  });
    }else{
      signInWithEmailAndPassword(auth, email.current.value,passwd.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +" "+errorMessage);
  });
    }
  }
  return (
    <><Header  />
    <div className='absolute' ><img src={IMAGE_BACKGROUND} alt='background image'/> </div>
    <form className='rounded-md text-white w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0' onSubmit={(e)=>{e.preventDefault(); handledForm()}}>
    <h1 className=' text-3xl font-bold '>{isSignIn? "Sign In" : "SignUp"}</h1>
                   {!isSignIn && <input className=' border p-3 my-3 w-full bg-transparent' ref={uname} type='text' placeholder='Full Name' />}
      <input className=' border p-3 my-3 w-full bg-transparent' type='text' ref={email} placeholder='Email or mobile number' onFocus={()=>{setErrorMessage(null)}} />
      <input className=' border p-3 my-3 w-full bg-transparent' type='password' ref={passwd} placeholder='Password' onFocus={()=>{setErrorMessage(null)}}/>
      <p className='text-red-500 text-xl'>{errorMessage}</p>
      <div className='bg-red-500 rounded-md text-center my-3'>
        
      <button className=' p-2 '>{isSignIn ? "Sign In" : "Sign Up"}</button>
      </div>
      {/* {(isSignIn)&&<div  className='text-center my-3'>
      <span className='  text-center'>OR</span>
      </div>}
      <div className='opacity-1 bg-slate-400 text-center'>{
        (isSignIn)&&<button className='p-2 w-full '>Use a sign-in-code</button>
        }
      
      </div> */}
      {/* <a className=' '>Forgot password?</a> */}
      <p onClick={signup} className='m-4 cursor-pointer' >{isSignIn? "New to Netflix?Sign Up":"Already registered ?Sign In"} Now</p>
    </form>
    </>

  )
}

export default Login