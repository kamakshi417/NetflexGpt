import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{nowPlayingMovies:null,trailerVideo:null,popularMovies:null},
    reducers:{

       addNowplaingMovies:(state,action)=>{
        state.nowPlayingMovies = action.payload;
       },
       addPopularMovies:(state,action)=>{
        state.popularMovies = action.payload;
       },
       trailerMovieId :(state,action)=>{
        state.trailerVideo = action.payload;
       }

    }

});

export const{addNowplaingMovies,trailerMovieId,addPopularMovies} = movieSlice.actions;
export default movieSlice.reducer;