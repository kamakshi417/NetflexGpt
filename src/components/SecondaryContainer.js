import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movie);
  
  return (
   <>
   {/* <div>SecondaryContainer</div> */}
   <div className='bg-black'>
    <div className='-mt-60 pl-12 relative z-20'>
   <MovieList title={"Now playing"} movies = {movies.nowPlayingMovies} ></MovieList>
   <MovieList title={"Trending"} movies = {movies.nowPlayingMovies} ></MovieList>
   <MovieList title={"Popular"} movies = {movies.popularMovies} ></MovieList>
   <MovieList title={"Horror"} movies = {movies.nowPlayingMovies} ></MovieList>
   </div>
   </div>
   </> 
  )
}

export default SecondaryContainer