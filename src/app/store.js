import {configureStore} from "@reduxjs/toolkit";
import postReducer from "../features/POST/postSlice";

export const  store = configureStore({
    reducer: {
        posts:postReducer

    }
});