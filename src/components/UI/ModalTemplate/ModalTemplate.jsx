import {Box, Modal, Typography} from "@mui/material";
import {cloneElement} from "react";
import PropTypes from "prop-types";
import {styles} from "./styles.js";

const ModalTemplate = ({title, children, button, open, handleClose}) => {
    let buttonWithOnClick;

    if (button) {
        buttonWithOnClick = cloneElement(button, {
            onClick: handleClose,
        });
    } else {
        console.warn("No button component provided to ModalTemplate");
    }

    return (
        <div>
            {buttonWithOnClick}
            <Modal
                sx={styles.modal}
                open={open}
                onClose={handleClose}
                aria-labelledby={title}
                aria-describedby={title}
            >
                <Box sx={styles.container}>
                    <Typography id={title} variant="h6" component="h2" sx={styles.modalTitle}>
                        {title}
                    </Typography>
                    {children}
                </Box>
            </Modal>
        </div>
    );
}

ModalTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    button: PropTypes.element,
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
};

export default ModalTemplate;
