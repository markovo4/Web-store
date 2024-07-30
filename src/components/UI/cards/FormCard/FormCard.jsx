import {Box, Button, Typography} from "@mui/material";
import {styles} from "./styles.js";
import React from "react";
import PropTypes from "prop-types";

const FormCard = ({
                      formTitle,
                      formTitleStyles = styles.formTitle,
                      formSubtitle,
                      formSubtitleStyles = styles.formSubtitle,
                      children,
                      open,
                      openForm
                  }) => {
    const handleClick = () => {
        openForm();
    }

    return (
        <React.Fragment>
            {!open ? (
                <Box sx={styles.summaryForm}>
                    <div>
                        <Typography sx={formTitleStyles}>
                            {formTitle}
                        </Typography>
                        <Typography sx={formSubtitleStyles}>
                            {formSubtitle}
                        </Typography>
                    </div>
                    <Button variant={'outlined'} sx={styles.buttonEdit} onClick={handleClick}>
                        Edit
                    </Button>
                </Box>
            ) : (
                <Box className={'mb-8'}>
                    {children}
                </Box>
            )}
        </React.Fragment>
    );
};

FormCard.propTypes = {
    formTitle: PropTypes.string.isRequired,
    formTitleStyles: PropTypes.object,
    formSubtitle: PropTypes.string,
    formSubtitleStyles: PropTypes.object,
    children: PropTypes.any.isRequired,
    open: PropTypes.bool,
    openForm: PropTypes.func
};

export default FormCard;
