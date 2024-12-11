import React from 'react'
import Header from './Header'
import nowPlayingMovies from '../customHook/useNowplayingMovies';
import usePopularMovies from '../customHook/usePopularMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';
const Browse = () => {
  nowPlayingMovies();
  usePopularMovies();
  const gpt = useSelector(store => store.gptSlice.istoogle);
  console.log("appversion",process.env.REACT_APP_API_TOKEN)
  return (
    <>
    <Header></Header>
    {gpt ? <GPTSearch></GPTSearch>:
     <><MainContainer></MainContainer>
    <SecondaryContainer></SecondaryContainer> </>}
    </>
  )
}

export default Browse