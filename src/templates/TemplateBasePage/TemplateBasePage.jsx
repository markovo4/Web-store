import React from "react";
import PropTypes from "prop-types";
import HeaderTop from "../../components/Header/HeaderTop";
import FooterTop from "../../components/Footer/FooterTop";
import FooterBottom from "../../components/Footer/FooterBottom";
import FooterMiddle from "../../components/Footer/FooterMiddle";
import BackToTop from "../../components/UI/BackToTop/index.js";
import HeaderBottom from "../../components/Header/HeaderBottom";

const TemplateBasePage = ({className = null, children}) => {
    return (
        <React.Fragment>
            <header>
                <HeaderTop/>
                <HeaderBottom/>
            </header>

            <main className={className}>
                <BackToTop/>
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
TemplateBasePage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired
}
export default TemplateBasePage;