import React from "react";
import PropTypes from "prop-types";
import HeaderTop from "../../components/Header/HeaderTop";
import HeaderBottom from "../../components/Header/HeaderBottom";
import FooterTop from "../../components/Footer/FooterTop";
import FooterBottom from "../../components/Footer/FooterBottom";

const TemplateBasePage = ({className = null, children}) => {
    return (
        <React.Fragment>
            <HeaderTop/>
            <HeaderBottom/>
            <main className={className}>
                {children}
            </main>
            <FooterTop/>
            <FooterBottom/>
        </React.Fragment>
    )

}
TemplateBasePage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired
}
export default TemplateBasePage;