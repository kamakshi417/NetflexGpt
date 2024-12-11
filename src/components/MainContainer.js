import React from 'react'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const MainContainer = () => {
    const movies = useSelector(store=>store.movie?.nowPlayingMovies);
  
    if(!movies) return;
    const mainMovie = movies[0];
 
    const {original_title,overview,id} = mainMovie;
  return (
    <>
    
    <VideoTitle original_title = {original_title} overview={overview}></VideoTitle>
    <VideoBackground movieid= {id}></VideoBackground>
    </>
  )
}

export default MainContainer;