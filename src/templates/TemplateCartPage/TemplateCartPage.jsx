import React from "react";
import PropTypes from "prop-types";

const TemplateCartPage = ({className = null, children}) => {
    return (
        <React.Fragment>
            <main className={className}>
                {children}
            </main>
        </React.Fragment>
    )
}
TemplateCartPage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any.isRequired
}
export default TemplateCartPage;