import {createSlice} from "@reduxjs/toolkit";
import {DATA_KEY} from "../../utils/constants/constants.js";

export const localStorageSlice = createSlice({
    name: 'localStorage',
    initialState: {
        orderList: [],
        currentProduct: {}
    },
    reducers: {
        getProductList: state => {
            try {
                const storedData = localStorage.getItem(DATA_KEY);
                state.orderList = storedData ? JSON.parse(storedData) : [];
            } catch (e) {
                console.error("Failed to parse local storage data:", e);
                state.orderList = [];
            }
        },

        setProductList: (state, {payload}) => {
            localStorage.setItem(DATA_KEY, JSON.stringify(payload));
            state.orderList = payload;
        },

        setCurrentProduct: (state, {payload}) => {
            state.currentProduct = payload;
        }
    }
});

export const {
    getProductList,
    setProductList,
    setCurrentProduct
} = localStorageSlice.actions;

export default localStorageSlice.reducer;
