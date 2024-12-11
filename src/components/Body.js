import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

const Body = () => {
  const appVersion =  process.env.REACT_APP_APP_VERSION;//import.meta.env.REACT_APP_VERSION;
  console.log("appV",appVersion);
  
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