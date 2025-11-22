import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slicers/userSlicer.js"


export  const store=configureStore({
    reducer:{
        "user":userSlice
    }
});