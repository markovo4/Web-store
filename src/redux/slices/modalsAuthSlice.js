import {createSlice} from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const modalsAuthSlice = createSlice({
    name: 'modalsAuth',
    initialState: {
        modalRegOpen: false,
        modalLoginOpen: false,
        displayAuthButtons: !!Cookies.get('LoggedIn'),
    },
    reducers: {
        setModalRegOpen: state => {
            state.modalRegOpen = !state.modalRegOpen;
        },
        setModalLoginOpen: state => {
            state.modalLoginOpen = !state.modalLoginOpen;
        }
    }
})

export const {
    setModalRegOpen,
    setModalLoginOpen,
} = modalsAuthSlice.actions;

export default modalsAuthSlice.reducer;