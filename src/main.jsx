import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import store from "./redux/store.js";
import {HashRouter} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {SnackbarProvider} from "notistack";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <SnackbarProvider maxSnack={1}>
            <HashRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </HashRouter>
        </SnackbarProvider>
    </React.StrictMode>,
)
