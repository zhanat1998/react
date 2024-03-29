import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./login/slice";
import { shopSlice } from "./shop/slice";

export const store = configureStore({
    reducer: {
        loginReducer: loginSlice.reducer,
        shopReducer: shopSlice.reducer,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch