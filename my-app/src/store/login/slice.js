import { createSlice } from "@reduxjs/toolkit";
// import { loginAction, registerAction } from "./actions";
import { loginAction, registerAction } from "./action";

export const loginSlice = createSlice({
    name: 'login',
    initialState: { error: '', isLoad: false },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerAction.fulfilled, (state, action) => {
            state.isLoad = false;
        });
        builder.addCase(registerAction.rejected, (state, action) => {
            state.isLoad = false;
            state.error = action.payload;
        });
        builder.addCase(registerAction.pending, (state) => {
            state.isLoad = true;
        });

        builder.addCase(loginAction.fulfilled, (state, action) => {
            state.isLoad = false;
        });
        builder.addCase(loginAction.rejected, (state, action) => {
            state.isLoad = false;
            state.error = action.payload;
        });
        builder.addCase(loginAction.pending, (state) => {
            state.isLoad = true;
        });
    }
});