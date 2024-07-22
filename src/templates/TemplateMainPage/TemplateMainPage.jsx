import React from "react";
import PropTypes from "prop-types";

const TemplateMainPage = ({className = null, children}) => {
    return (
        <React.Fragment>
            <main className={className}>
                {children}
            </main>
        </React.Fragment>
    )

}
TemplateMainPage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired
}
export default TemplateMainPage;