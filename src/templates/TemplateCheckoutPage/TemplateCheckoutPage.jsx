import React from "react";
import PropTypes from "prop-types";
import HeaderTop from "../../components/Header/HeaderTop";

const TemplateCheckoutPage = ({className = null, children}) => {
    return (
        <React.Fragment>
            <header>
                <HeaderTop/>
            </header>

            <main className={className}>
                {children}
            </main>

        </React.Fragment>
    )
}
TemplateCheckoutPage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired
}
export default TemplateCheckoutPage;