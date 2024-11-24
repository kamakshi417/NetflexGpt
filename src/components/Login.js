import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignIn,setisSignIn] = useState(true);
  function signup(){
    console.log("signup");
    setisSignIn(!isSignIn);
  }
  return (
    <><Header  />
    <div className='absolute' ><img src='https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_small.jpg' alt='background image'/> </div>
    <form className='rounded-md text-white w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0'>
    <h1 className=' text-3xl font-bold '>{isSignIn? "Sign In" : "SignUp"}</h1>
                   {isSignIn && <input className=' border p-3 my-3 w-full bg-transparent' type='text' placeholder='Full Name' />}
      <input className=' border p-3 my-3 w-full bg-transparent' type='text' placeholder='Email or mobile number' />
      <input className=' border p-3 my-3 w-full bg-transparent' type='password' placeholder='Password' />
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