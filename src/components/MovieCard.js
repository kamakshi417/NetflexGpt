import React from 'react'
import {IMGAE_CDN} from '../utils/constants.js';
const MovieCard = ({posterPath}) => {
  return (
    <div className='w-40 pr-3'><img alt='Movie Card' src={IMGAE_CDN+posterPath}></img></div>
  )
}

export default MovieCard