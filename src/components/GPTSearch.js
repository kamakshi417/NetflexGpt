import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTSuggestions from './GPTSuggestions'
import {IMAGE_BACKGROUND} from '../utils/constants'
const GPTSearch = () => {
  return (
    <>
    <div className=''>
    <div className='absolute -z-10' ><img src={IMAGE_BACKGROUND} alt='background image'/> </div>
    <GPTSearchBar></GPTSearchBar>
    <GPTSuggestions></GPTSuggestions>
    </div>
    </>
  )
}

export default GPTSearch