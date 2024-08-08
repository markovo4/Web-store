import React from "react";
import PropTypes from "prop-types";
import HeaderTop from "../../components/Header/HeaderTop";

import FooterBottom from "../../components/Footer/FooterBottom";
import FooterTop from "../../components/Footer/FooterTop/index.js";
import FooterMiddle from "../../components/Footer/FooterMiddle/index.js";

const TemplateCartPage = ({className = null, children}) => {
    return (
        <React.Fragment>
            <header>
                <HeaderTop/>
            </header>

            <main className={className}>
                {children}
            </main>

            <footer>
                <FooterTop/>
                <FooterMiddle/>
                <FooterBottom/>
            </footer>
        </React.Fragment>
    )
}
TemplateCartPage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired
}
export default TemplateCartPage;