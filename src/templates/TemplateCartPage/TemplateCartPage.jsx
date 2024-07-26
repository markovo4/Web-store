import React from "react";
import PropTypes from "prop-types";
import HeaderTop from "../../components/Header/HeaderTop";

import FooterBottom from "../../components/Footer/FooterBottom";
import FooterTop from "../../components/Footer/FooterTop/index.js";

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