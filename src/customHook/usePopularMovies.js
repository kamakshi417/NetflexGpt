import { useEffect } from 'react';
import {API_OPTIONS} from "../utils/constants.js";
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/movieSlice.js';

const usePopularMovies = ()=>{

    const dispatch = useDispatch();
  const getPopularMovies= async()=>{
try {
  const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS)

  const json  = await data.json();
 ;
  dispatch(addPopularMovies(json.results));
} catch (error) {
  console.log(error);
}

  }
  useEffect(()=>{
    
    getPopularMovies();
  },[]);

}

export default usePopularMovies;