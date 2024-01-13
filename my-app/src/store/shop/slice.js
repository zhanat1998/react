import { createSlice } from "@reduxjs/toolkit";
import { getCartAction, getProdAction, getProductsAction, postCartAction, readProductSlice } from "./action";

export const shopSlice = createSlice({
    name: 'shop',
    initialState: { error: '', isLoad: false, data: [], all: [] },
    reducers: {
        search(state, action) {
            console.log("action.payload: ", action.payload, typeof action.payload)
            const result = state.all.filter(product => product.title.includes(action.payload));
            state.data = result;
        },
        sortByPrice(state) {
            const result = state.data.sort((p1, p2) => (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0);
            state.data = result;
        },
        sortNew(state) {
            const result = state.data.sort((p1, p2) => (p1.id < p2.id) ? 1 : (p1.id > p2.id) ? -1 : 0);
            state.data = result;
        },
        sortOld(state) {
            const result = state.data.sort((p1, p2) => (p1.id > p2.id) ? 1 : (p1.id < p2.id) ? -1 : 0);
            state.data = result;
        },
        reset(state) {
            state.data = state.all;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProductsAction.fulfilled, (state, action) => {
            state.data = action.payload;
            state.all = action.payload;
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
export const { search, sortByPrice, sortNew, sortOld, reset } = shopSlice.actions;
