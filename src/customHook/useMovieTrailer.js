import  { useEffect } from 'react'
import {API_OPTIONS} from '../utils/constants';
import { useDispatch } from 'react-redux';
import {trailerMovieId} from '../utils/movieSlice';

const useMovieTrailer = (movieid) => {
    const dispatch = useDispatch();

    const getMovieVideo = async()=>{
      try {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos`, API_OPTIONS);
      let json = await data.json();
      json = json.results;
      json = json.filter(item => item.type=="Trailer" && item.name == "Official Trailer");
      dispatch(trailerMovieId(json[0]));
     // console.log(json);
      } catch (error) {
        console.log(error);
      }
      
    }
    useEffect(()=>{
      getMovieVideo();
    },[]);
}

export default useMovieTrailer