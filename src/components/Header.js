import React from 'react'
import {auth} from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {signOut } from "firebase/auth";
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      console.log("Signout called");
      // Sign-out successful.
      console.log("successfully logout");
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <><div className='absolute flex justify-between w-full z-10 px-8 py-2 bg-gradient-to-b from-black'>
    <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'/>
    {user && <div className='flex items-center'>
      <img className="w-10 h-10 mx-3" src={user?.photoURL}  alt='userImage'/>
    <span onClick={handleSignOut} className='font-bold cursor-pointer'>Signout</span>
    </div>}
    </div>
    </>
  )
}

export default Header