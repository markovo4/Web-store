import './index.css';
import RouterDisplayPage from "./router/routes/index.js";
import React from "react";

function App() {

    function setFavicon() {
        const randomLightColor = () => {
            const r = Math.floor(Math.random() * 128) + 128; // 128-255 for red
            const g = Math.floor(Math.random() * 128) + 128; // 128-255 for green
            const b = Math.floor(Math.random() * 128) + 128; // 128-255 for blue
            return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
        };

        const color = randomLightColor();
        const svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="${color}" />
        </svg>`;
        const link = document.querySelector("link[rel='icon']") || document.createElement('link');
        link.rel = 'icon';
        link.href = `data:image/svg+xml,${encodeURIComponent(svgContent)}`;
        document.head.appendChild(link);
    }

    setInterval(setFavicon, 1000);


    return (

        <React.Fragment>
            <RouterDisplayPage/>
        </React.Fragment>

    )
}

export default App
