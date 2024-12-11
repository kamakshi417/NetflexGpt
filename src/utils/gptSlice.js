import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gptSlice",
    initialState:{istoogle:false,
        gptMovies:null
    },
    reducers:{
        toggleGPtSearch:(state)=>{
            state.istoogle = ! state.istoogle;
        },
        addGPTMovieRes:(state,action)=>{
            state.gptMovies = action.payload
        }
    }
});

export const {toggleGPtSearch,addGPTMovieRes} = gptSlice.actions;
export default gptSlice.reducer;