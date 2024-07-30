import {Box, Button, Typography} from "@mui/material";
import {styles} from "./styles.js";
import React, {useState} from "react";
import PropTypes from "prop-types";

const FormCard = ({
                      formTitle,
                      formTitleStyles = styles.formTitle,
                      formSubtitle,
                      formSubtitleStyles = styles.formSubtitle,
                      children,
                      onSubmit
                  }) => {

    const [formOpen, setFormOpen] = useState(false);
    const handleOpenForm = () => {
        setFormOpen(!formOpen);
    }

    const handleSubmit = () => {
        if (onSubmit) {
            onSubmit();
        }
        handleOpenForm();
    }

    return (
        <React.Fragment>
            {!formOpen ?
                (<Box sx={styles.summaryForm}>
                        <div>
                            <Typography sx={formTitleStyles}>
                                {formTitle}
                            </Typography>
                            <Typography sx={formSubtitleStyles}>
                                {formSubtitle}
                            </Typography>
                        </div>
                        <Button variant={'outlined'} sx={styles.buttonEdit} onClick={handleOpenForm}>Edit</Button>
                    </Box>
                ) : (
                    <Box className={'mb-8'}>
                        {children}
                        <Box sx={styles.buttonContainer}>
                            <Button type={'button'} variant={'outlined'} sx={styles.buttonSubmit}
                                    onClick={handleSubmit}>Continue
                                Checkout</Button>
                        </Box>

                    </Box>)}
        </React.Fragment>
    )
}

FormCard.propTypes = {
    formTitle: PropTypes.string.isRequired,
    formTitleStyles: PropTypes.object,
    formSubtitle: PropTypes.string,
    formSubtitleStyles: PropTypes.object,
    children: PropTypes.any.isRequired,
    onSubmit: PropTypes.func,
}

export default FormCard;
