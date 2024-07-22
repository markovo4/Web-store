import './index.css';
import RouterDisplayPage from "./router/routes/index.js";
import NavTest from "./components/NavTest/index.js";
import React from "react";

function App() {

    return (
        <React.Fragment>
            <NavTest/>
            <RouterDisplayPage/>
        </React.Fragment>

    )
}

export default App
