import {createSlice} from "@reduxjs/toolkit";

export const headerCitySlice = createSlice({
    name: 'headerCity',
    initialState: {
        city: null,
    },
    reducers: {
        setCity: (state, {payload}) => {
            state.city = payload;
        }
    }
})

export const {
    setCity,
} = headerCitySlice.actions;

export default headerCitySlice.reducer;