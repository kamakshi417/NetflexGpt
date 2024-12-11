import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openAI'
import { API_OPTIONS } from '../utils/constants'
import { addGPTMovieRes } from '../utils/gptSlice'
const GPTSearchBar = () => {
  const searchVal = useRef(null);
  const langparam = useSelector(store=> store.config.lang);
  const dispatch = useDispatch();
  const searchTMDBMovie = async(movie)=>{
   
    const data =await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
    const json = await data.json();
    return json.results;
  }
  const handleGPTSearch = async(e)=>{
    e.preventDefault();
    
    try {
      const query = "Act as a Movie recomandation system and suggest some movies for the quey :"+searchVal.current.value+" only give me names of 5 Movies, comma seperated like the example given ahead. Example result: Nani, Pokiri, Dookudu, Okkadu, Arjune ";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: query}],
      model: 'gpt-3.5-turbo',
    });
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    
    const movieArray = await gptMovies.map((movie)=>searchTMDBMovie(movie));
    const tmdbResults = await Promise.all(movieArray);
    dispatch(addGPTMovieRes(tmdbResults));
    } catch (error) {
      console.log("error",error);
    }
    
  }
  return (
    <div className='pt-[10%] flex justify-center'>
    <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={handleGPTSearch}>
        <input type='text' ref={searchVal} className='p-2 m-2 col-span-9' placeholder={lang[langparam].gptSearchPlaceholder}/>
        <button className=' rounded-lg bg-red-700 text-white col-span-3' >{lang[langparam].search}</button>
    </form>
    </div>
  )
}

export default GPTSearchBar