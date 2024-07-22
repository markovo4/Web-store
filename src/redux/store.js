import {configureStore} from "@reduxjs/toolkit";
import {productsApi} from "./productsApi/productsApi";
import localStorageReducer from './slices/localStorageSlice'

const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        localStorage: localStorageReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware)

})


export default store;