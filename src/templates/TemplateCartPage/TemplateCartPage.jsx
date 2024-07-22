import React from "react";
import PropTypes from "prop-types";
import HeaderTop from "../../components/Header/HeaderTop";

import FooterBottom from "../../components/Footer/FooterBottom";

const TemplateCartPage = ({className = null, children}) => {
    return (
        <React.Fragment>
            <HeaderTop/>
            <main className={className}>
                {children}
            </main>
            <FooterBottom/>
        </React.Fragment>
    )
}
TemplateCartPage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired
}
export default TemplateCartPage;