import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title,movies}) => {
    
    if(!movies)return;
  return (
    <>
    <div className='px-6 bg-transparent'>
        <h1 className='text-3xl  text-white py-4'>{title}</h1>
 <div className='flex overflow-x-scroll'>
         <div className='flex'>{
            movies.map((item)=>{
                return <MovieCard key={item.id} posterPath={item?.poster_path}></MovieCard>
            })}
            </div>
            </div>
    </div>
    </>
  )
}

export default MovieList