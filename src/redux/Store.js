import { configureStore } from "@reduxjs/toolkit";
import {cartSlice} from "../redux/Slices/cartSlice"


export const store=configureStore({
    reducer:{
        cart:cartSlice.reducer
    }
}) 