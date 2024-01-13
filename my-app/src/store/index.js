import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./login/slice";
import { cartProdSlice, readProdSlice, shopSlice, updateSlice } from "./shop/slice";

export const store = configureStore({
    reducer: {
        loginReducer: loginSlice.reducer,
        shopReducer: shopSlice.reducer,
        updateReducer: updateSlice.reducer,
        readReducer: readProdSlice.reducer,
        cartReducer: cartProdSlice.reducer,
    }
})