import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
const Body = () => {
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