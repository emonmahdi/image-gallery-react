import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import cartReducer from "./features/cart/cartSlice";

export const store = configureStore({
    reducer:{
        counter: counterSlice,
        cart: cartReducer
    }
})

 