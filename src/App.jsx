import './index.css';
import RouterDisplayPage from "./router/routes/index.js";
import React from "react";
import Auth from "./components/Auth/Auth.jsx";

function App() {

    return (
        <React.Fragment>
            <Auth>
                <RouterDisplayPage/>
            </Auth>
        </React.Fragment>

    )
}

export default App
