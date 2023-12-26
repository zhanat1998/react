import { createSlice } from "@reduxjs/toolkit";
import { getCartAction, getProdAction, getProductsAction, postCartAction, readProductSlice } from "./action";

export const shopSlice = createSlice({
    name: 'shop',
    initialState: { error: '', isLoad: false, data: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductsAction.fulfilled, (state, action) => {
            state.data = action.payload;
        })

    }
});
export const updateSlice = createSlice({
    name: 'shop',
    initialState: { error: '', isLoad: false, data: {} },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProdAction.fulfilled, (state, action) => {
            state.data = action.payload;
        })

    }
});
export const readProdSlice = createSlice({
    name: 'shop',
    initialState: { error: '', isLoad: false, data: {} },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(readProductSlice.fulfilled, (state, action) => {
            state.data = action.payload;
        })

    }
});
export const cartProdSlice = createSlice({
    name: 'shop',
    initialState: { error: '', isLoad: false, data: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCartAction.fulfilled, (state, action) => {
            state.data = action.payload.cart;
        })

    }
});
