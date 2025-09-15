import {configureStore} from "@reduxjs/toolkit";
import cardSlice from "./cartSlice"

export const store = configureStore({
    reducer:{
        card: cardSlice
    }
})