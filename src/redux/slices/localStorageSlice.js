import {createSlice} from "@reduxjs/toolkit";
import {DATA_KEY, FAV_DATA_KEY, FORM_DATA_KEY, VIEWED_DATA_KEY} from "../../utils/constants/constants.js";

const checkoutInitialData = {
    productToOrder: [],
    firstName: '',
    receiverName: '',
    lastName: '',
    phoneNumber: '',
    otherReceiverPhoneNumber: '',
    email: '',
    city: '',
    deliveryMethod: '',
    paymentMethod: '',
    bonusCard: '',
    promoCode: '',
    otherReceiver: false,
    termConditions: false,
    giftCard: '',
    message: '',
    callBack: false,
    recentlyViewed: []
}

export const localStorageSlice = createSlice({
    name: "localStorage",
    initialState: {
        favouriteList: [],
        orderList: [],
        currentProduct: {},
        checkout: checkoutInitialData,
        productQuantity: 1
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

        getCheckoutInfo: (state) => {
            const storedData = localStorage.getItem(FORM_DATA_KEY);
            state.checkout = storedData ? JSON.parse(storedData) : {};
        },

        getRecentlyViewed: (state) => {
            const storedData = localStorage.getItem(VIEWED_DATA_KEY);
            state.recentlyViewed = storedData ? JSON.parse(storedData) : [];
        },

        setRecentlyViewed: (state, {payload}) => {
            try {
                const storedData = localStorage.getItem(VIEWED_DATA_KEY);
                const parsedData = storedData ? JSON.parse(storedData) : [];

                const isProductAlreadyViewed = parsedData.some(product => product.id === payload.id);

                if (!isProductAlreadyViewed) {
                    const filteredData = parsedData.length === 5 ? parsedData.slice(1) : parsedData
                    const updatedData = [...filteredData, payload];
                    localStorage.setItem(VIEWED_DATA_KEY, JSON.stringify(updatedData));
                    state.recentlyViewed = updatedData;
                }
            } catch (e) {
                console.error("Failed to store viewed products in local storage:", e);
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

        setProductQuantity: (state, action) => {
            const {id, amount} = action.payload
            state.productQuantity = amount
            const targetProduct = state.orderList.find((product) => product.id === id)
            if (targetProduct) {
                targetProduct.amount = amount;
            }
        },
        setCheckoutInfo: (state, {payload}) => {
            state.checkout = payload;
            localStorage.setItem(FORM_DATA_KEY, JSON.stringify(payload));
        },

        removeProduct: (state, {payload}) => {
            const updatedOrderList = state.orderList.filter(product => product.id !== parseInt(payload));
            localStorage.setItem(DATA_KEY, JSON.stringify(updatedOrderList));
            state.orderList = updatedOrderList;
        },

        removeFavProduct: (state, {payload}) => {
            const updatedOrderList = state.favouriteList.filter(product => product.id !== payload);

            localStorage.setItem(FAV_DATA_KEY, JSON.stringify(updatedOrderList));

            state.favouriteList = updatedOrderList;
        },

        removeAllProducts: (state) => {
            localStorage.removeItem(DATA_KEY)
            state.orderList = []
        },

        removeCheckoutInfo: (state) => {
            localStorage.removeItem(FORM_DATA_KEY)
            state.checkout = checkoutInitialData;
        },
    }
});

export const {
    removeProduct,
    setFavProductList,
    getFavProductList,
    getProductList,
    getCheckoutInfo,
    getRecentlyViewed,
    setRecentlyViewed,
    setProductList,
    setProductQuantity,
    setCheckoutInfo,
    removeAllProducts,
    removeFavProduct,
    removeCheckoutInfo
} = localStorageSlice.actions;

export default localStorageSlice.reducer;
