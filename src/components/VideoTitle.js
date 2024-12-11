import React from 'react'

const VideoTitle = ({original_title,overview}) => {
  return (
    <>
    <div className='w-screen aspect-video pt-[15%] px-20 absolute text-white bg-gradient-to-r from-black'>
   <h1 className='text-3xl font-bold'>{original_title}</h1>
   <p className='py-6 w-1/4 '>{overview}</p>
   <div className='flex'>
    <button className='p-2 px-10 text-black bg-white rounded-lg hover:bg-opacity-80'>Play</button>
    <button className='mx-2 px-10 text-white bg-gray-500 rounded-lg bg-opacity-50'>More Info</button>
   </div>
   </div>
   </>
  )
}

export default VideoTitle