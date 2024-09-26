import {createSlice} from "@reduxjs/toolkit";
import {
    CURRENT_USER_DATA_KEY,
    DATA_KEY,
    FAV_DATA_KEY,
    FORM_DATA_KEY,
    LIST_OF_ORDERS_DATA_KEY,
    USERS_DATA_KEY,
    USERS_FAV_DATA_KEY,
    VIEWED_DATA_KEY,
} from "../../utils/constants/constants.js";

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
    recentlyViewed: [],
    favouriteList: [],
    favouriteUserList: [],
    users: [],
    currentUser: {},
    listOfOrders: [],
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

                state.orderList = Array.isArray(parsedData) ? parsedData : [];
            } catch (e) {
                console.error("Failed to parse local storage data:", e);
                state.orderList = [];
            }
        },
        getFavProductList: (state) => {
            try {
                const storedData = localStorage.getItem(FAV_DATA_KEY);
                const parsedData = storedData ? JSON.parse(storedData) : [];

                state.favouriteList = Array.isArray(parsedData) ? parsedData : [];
            } catch (e) {
                console.error("Failed to parse local storage data:", e);
                state.favouriteList = [];
            }
        },

        getFavUserProductList: (state) => {
            try {
                const storedData = localStorage.getItem(USERS_FAV_DATA_KEY);
                state.favouriteUserList = storedData ? JSON.parse(storedData) : [];
            } catch (e) {
                console.error("Failed to parse local storage data:", e);
                state.favouriteUserList = [];
            }
        },

        getCheckoutInfo: (state) => {
            try {
                const storedData = localStorage.getItem(FORM_DATA_KEY);
                state.checkout = storedData ? JSON.parse(storedData) : checkoutInitialData;
            } catch (e) {
                console.error("Failed to parse checkout info:", e);
                state.checkout = checkoutInitialData;
            }
        },

        getRecentlyViewed: (state) => {
            try {
                const storedData = localStorage.getItem(VIEWED_DATA_KEY);
                state.recentlyViewed = storedData ? JSON.parse(storedData) : [];
            } catch (e) {
                console.error("Failed to parse recently viewed data:", e);
                state.recentlyViewed = [];
            }
        },

        getUserByEmail: (state, {payload}) => {
            try {
                const storedData = localStorage.getItem(USERS_DATA_KEY);
                const allUsers = JSON.parse(storedData) || [];
                state.currentUser = allUsers.find(user => user.email === payload) || {};
            } catch (e) {
                console.error("Failed to get user by email:", e);
                state.currentUser = {};
            }
        },

        getAllUsers: (state) => {
            try {
                const storedData = localStorage.getItem(USERS_DATA_KEY);
                state.users = JSON.parse(storedData) || [];
            } catch (e) {
                console.error("Failed to retrieve users data:", e);
                state.users = [];
            }
        },

        getCurrentUser: (state) => {
            try {
                const storedData = localStorage.getItem(CURRENT_USER_DATA_KEY);
                state.currentUser = JSON.parse(storedData) || {};
            } catch (e) {
                console.error("Failed to retrieve current user data:", e);
                state.currentUser = {};
            }
        },

        getListOfOrders: (state) => {
            try {
                const storedData = localStorage.getItem(LIST_OF_ORDERS_DATA_KEY);
                state.listOfOrders = JSON.parse(storedData) || [];
            } catch (e) {
                console.error("Failed to retrieve order list:", e);
                state.listOfOrders = [];
            }
        },

        setRecentlyViewed: (state, {payload}) => {
            try {
                const storedData = localStorage.getItem(VIEWED_DATA_KEY);
                const parsedData = storedData ? JSON.parse(storedData) : [];
                const isProductAlreadyViewed = parsedData.some(product => product.id === payload.id);

                if (!isProductAlreadyViewed) {
                    const filteredData = parsedData.length === 5 ? parsedData.slice(1) : parsedData;
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
                    console.error("Payload is not an array, ignoring setFavProductList action.");
                }
            } catch (e) {
                console.error("Failed to store favorite product list in local storage:", e);
            }
        },

        setFavUserProductList: (state, {payload}) => {
            try {
                const {email, productsList} = payload;
                const existingFavUserList = JSON.parse(localStorage.getItem(USERS_FAV_DATA_KEY)) || [];

                const updatedFavUserList = existingFavUserList.map(user => {
                    if (user.email === email) {
                        return {...user, productsList};
                    }
                    return user;
                });

                if (!updatedFavUserList.some(user => user.email === email)) {
                    updatedFavUserList.push({email, productsList});
                }

                localStorage.setItem(USERS_FAV_DATA_KEY, JSON.stringify(updatedFavUserList));
                state.favouriteUserList = updatedFavUserList;
            } catch (e) {
                console.error("Failed to store user favorite product list in local storage:", e);
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

        setProductQuantity: (state, {payload}) => {
            const {id, amount} = payload;
            state.productQuantity = amount;
            const targetProduct = state.orderList.find(product => product.id === id);
            if (targetProduct) {
                targetProduct.amount = amount;
            }
        },

        setCheckoutInfo: (state, {payload}) => {
            state.checkout = payload;
            localStorage.setItem(FORM_DATA_KEY, JSON.stringify(payload));
        },

        setUser: (state, {payload}) => {
            const userIndex = state.users.findIndex(user => user.id === payload.id);
            let updatedUsersList;

            if (userIndex !== -1) {
                updatedUsersList = state.users.map((user, index) =>
                    index === userIndex ? payload : user
                );
            } else {
                updatedUsersList = [...state.users, payload];
            }

            localStorage.setItem(USERS_DATA_KEY, JSON.stringify(updatedUsersList));
            state.users = updatedUsersList;
        },

        setCurrentUser: (state, {payload}) => {
            localStorage.setItem(CURRENT_USER_DATA_KEY, JSON.stringify(payload));
            state.currentUser = payload || {};
        },

        setListOfOrders: (state, {payload}) => {
            localStorage.setItem(LIST_OF_ORDERS_DATA_KEY, JSON.stringify(payload || []));
            state.listOfOrders = payload || [];
        },

        removeProduct: (state, {payload}) => {
            const updatedOrderList = state.orderList.filter(product => product.id !== parseInt(payload));
            localStorage.setItem(DATA_KEY, JSON.stringify(updatedOrderList));
            state.orderList = updatedOrderList;
        },

        removeFavProduct: (state, {payload}) => {
            const updatedFavouriteList = state.favouriteList.filter(product => product.id !== payload);
            state.favouriteList = updatedFavouriteList;
            localStorage.setItem(FAV_DATA_KEY, JSON.stringify(updatedFavouriteList));
        },

        removeFavUserProduct: (state, {payload}) => {
            const user = state.favouriteUserList.find(u => u.email === payload.email);
            if (user) {
                user.productsList = user.productsList.filter(product => product.id !== payload.productId);
                localStorage.setItem(USERS_FAV_DATA_KEY, JSON.stringify(state.favouriteUserList));
            }
        },

        removeAllProducts: (state) => {
            localStorage.removeItem(DATA_KEY);
            state.orderList = [];
        },

        removeCheckoutInfo: (state) => {
            localStorage.removeItem(FORM_DATA_KEY);
            state.checkout = checkoutInitialData;
        },

        removeUserById: (state, {payload}) => {
            const storedData = localStorage.getItem(USERS_DATA_KEY);
            if (storedData) {
                const allUsers = JSON.parse(storedData);
                const updatedUsers = allUsers.filter(user => user.id !== payload);
                localStorage.setItem(USERS_DATA_KEY, JSON.stringify(updatedUsers));
                state.users = updatedUsers;
            }
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
    getUserByEmail,
    getAllUsers,
    getCurrentUser,
    getListOfOrders,
    getFavUserProductList,
    setRecentlyViewed,
    setProductList,
    setProductQuantity,
    setCheckoutInfo,
    setUser,
    setCurrentUser,
    setListOfOrders,
    setFavUserProductList,
    removeAllProducts,
    removeFavProduct,
    removeCheckoutInfo,
    removeUserById,
    removeFavUserProduct,
} = localStorageSlice.actions;

export default localStorageSlice.reducer;
