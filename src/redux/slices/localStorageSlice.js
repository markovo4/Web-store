import {createSlice} from "@reduxjs/toolkit";
import {DATA_KEY, FAV_DATA_KEY} from "../../utils/constants/constants.js";

export const localStorageSlice = createSlice({
    name: "localStorage",
    initialState: {
        favouriteList: [],
        orderList: [],
        currentProduct: {}
    },
    reducers: {
        getProductList: (state) => {
            try {
                const storedData = localStorage.getItem(DATA_KEY);
                const parsedData = storedData ? JSON.parse(storedData) : [];

                if (Array.isArray(parsedData)) {
                    state.orderList = parsedData;
                } else {
                    console.warn("Data retrieved is not an array, resetting orderList.");
                    state.orderList = [];
                }
            } catch (e) {
                console.error("Failed to parse local storage data:", e);
                state.orderList = [];
            }
        },
        getFavProductList: (state) => {
            try {
                const storedData = localStorage.getItem(FAV_DATA_KEY);
                const parsedData = storedData ? JSON.parse(storedData) : [];

                if (Array.isArray(parsedData)) {
                    state.favouriteList = parsedData;
                } else {
                    console.warn("Data retrieved is not an array, resetting orderList.");
                    state.favouriteList = [];
                }
            } catch (e) {
                console.error("Failed to parse local storage data:", e);
                state.favouriteList = [];
            }
        },

        setFavProductList: (state, {payload}) => {
            try {
                if (Array.isArray(payload)) {
                    localStorage.setItem(FAV_DATA_KEY, JSON.stringify(payload));
                    state.favouriteList = payload;
                } else {
                    console.error("Payload is not an array, ignoring setProductList action.");
                }
            } catch (e) {
                console.error("Failed to store product list in local storage:", e);
            }
        },

        setProductList: (state, {payload}) => {
            try {
                if (Array.isArray(payload)) {
                    localStorage.setItem(DATA_KEY, JSON.stringify(payload));
                    state.orderList = payload;
                } else {
                    console.error("Payload is not an array, ignoring setProductList action.");
                }
            } catch (e) {
                console.error("Failed to store product list in local storage:", e);
            }
        },

        setCurrentProduct: (state, {payload}) => {
            state.currentProduct = payload;
        },

        removeProduct: (state, {payload}) => {
            const updatedOrderList = state.orderList.filter(product => product.id !== payload);

            localStorage.setItem(setProductList, JSON.stringify(updatedOrderList));

            state.orderList = updatedOrderList;
        },

        removeFavProduct: (state, {payload}) => {
            const updatedOrderList = state.favouriteList.filter(product => product.id !== payload);

            localStorage.setItem(setFavProductList, JSON.stringify(updatedOrderList));

            state.favouriteList = updatedOrderList;
        }
    }
});

// Export actions and reducer
export const {
    removeProduct,
    setFavProductList,
    getFavProductList,
    getProductList,
    setProductList,
    setCurrentProduct,
    removeFavProduct
} = localStorageSlice.actions;

export default localStorageSlice.reducer;
