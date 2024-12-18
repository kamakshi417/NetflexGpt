import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieSlice from "./movieSlice";
import gptSlice from "./gptSlice";
import configSlice from "./configSlice";

const appStore = configureStore({
    reducer:{
        user:userReducer,
        movie:movieSlice,
        gptSlice:gptSlice,
        config:configSlice,
    }
});

export default appStore;