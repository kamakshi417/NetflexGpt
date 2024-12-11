import React ,{useEffect} from 'react'
import {auth} from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {signOut,onAuthStateChanged } from "firebase/auth";
import { useSelector,useDispatch } from 'react-redux';
import userlogo from '../assets/user.png';
import {addUser,removeUser} from '../utils/userSlice';
import{toggleGPtSearch} from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLangauge } from '../utils/configSlice';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const showGptlang = useSelector(store => store.gptSlice.istoogle);
  useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
       
        let {uid,email,displayName,photoURL} = user;
      if(photoURL == null) photoURL = userlogo;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:userlogo}));
      
      navigate("/browse");
        
      } else {
        dispatch(removeUser());
        navigate("/");
        
      }
    });
    return ()=>{
      unsubscribe();
    }
  },[]);
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      
    }).catch((error) => {
      // An error happened.
    });
  }
  const toggleGpt = ()=>{
    
    dispatch(toggleGPtSearch());
  }
  const handleLanguageChange = (e)=>{
    
    dispatch(changeLangauge(e.target.value))
  }
  return (
    <><div className='absolute flex justify-between w-full z-10 px-8 py-2 bg-gradient-to-b from-black'>
      
    <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'/>
    
    {user && <div className='flex m- items-center' >
     { showGptlang && <select onChange={handleLanguageChange} className='p-2 bg-gray-500 text-white m-2 rounded-md'>
      {SUPPORTED_LANGUAGES.map((lan)=>{
        return <option key={lan.identifier} value={lan.identifier}>{lan.name}</option>;
      })}
    </select>
    }
      <button onClick={toggleGpt} className='px-2 py-2 bg-purple-500 rounded-md text-white'>{showGptlang? "Home" : "GPT Search"}</button>
      <img className="w-10 h-10 mx-3" src={user?.photoURL}  alt='userImage'/>
    <span onClick={handleSignOut} className='font-bold cursor-pointer text-white'>Signout</span>
    </div>}
    </div>
    </>
  )
}

export default Header