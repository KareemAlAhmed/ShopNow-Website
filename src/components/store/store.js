import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slicers/userSlicer.js"
import socketSlicer from "./sockets/socketSlicer.js"
import productSlicer from "./slicers/productSlicer.js"
export  const store=configureStore({
    reducer:{
        "user":userSlice,
        "socket":socketSlicer,
        "product":productSlicer
    }
});