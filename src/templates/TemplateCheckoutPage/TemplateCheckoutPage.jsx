import React from "react";
import PropTypes from "prop-types";
import HeaderTop from "../../components/Header/HeaderTop";
import FooterMobile from "../../components/Footer/FooterMobile/index.js";

const TemplateCheckoutPage = ({className = null, children}) => {
    return (
        <React.Fragment>
            <header>
                <HeaderTop/>
            </header>

            <main className={className}>
                {children}
            </main>
            <footer>
                <FooterMobile/>
            </footer>
        </React.Fragment>
    )
}
TemplateCheckoutPage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired
}
export default TemplateCheckoutPage;