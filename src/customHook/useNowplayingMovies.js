import { useEffect } from 'react';
import {API_OPTIONS} from "../utils/constants.js";
import { useDispatch } from 'react-redux'
import { addNowplaingMovies } from '../utils/movieSlice.js';

const useNowplayingMovies = ()=>{

    const dispatch = useDispatch();
  const getNowplayingMovies= async()=>{
try {
  const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS)

  const json  = await data.json();
 ;
  dispatch(addNowplaingMovies(json.results));
} catch (error) {
  console.log(error);
}

  }
  useEffect(()=>{
    
    getNowplayingMovies();
  },[]);

}

export default useNowplayingMovies;