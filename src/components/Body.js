import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, useNavigate } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import {auth} from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import {removeUser} from "../utils/userSlice"
const Body = () => {

  const dispatch = useDispatch();
  
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
       
       
        
      } else {
        dispatch(removeUser());
        //navigate("/");
      }
    });
  },[]);
  const appRoute = createBrowserRouter([
    {path:"/",element:<Login></Login>},{path:"/browse",element:<Browse></Browse>}
  ]);
  return (
    <div>
      <RouterProvider router={appRoute}>
       
        </RouterProvider>
    </div>
  )
}

export default Body