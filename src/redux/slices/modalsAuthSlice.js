import {createSlice} from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const modalsAuthSlice = createSlice({
    name: 'modalsAuth',
    initialState: {
        modalRegOpen: false,
        modalLoginOpen: false,
        modalRegMobileOpen: false,
        modalLoginMobileOpen: false,
        displayAuthButtons: !!Cookies.get('LoggedIn'),
    },
    reducers: {
        setModalRegOpen: state => {
            state.modalRegOpen = !state.modalRegOpen;
        },
        setModalLoginOpen: state => {
            state.modalLoginOpen = !state.modalLoginOpen;
        },
        setModalLoginMobileOpen: state => {
            state.modalLoginMobileOpen = !state.modalLoginMobileOpen;
        },
        setModalRegMobileOpen: state => {
            state.modalRegMobileOpen = !state.modalRegMobileOpen;
        }
    }
})

export const {
    setModalRegOpen,
    setModalLoginOpen,
    setModalLoginMobileOpen,
    setModalRegMobileOpen
} = modalsAuthSlice.actions;

export default modalsAuthSlice.reducer;