import {Box, Button, Tooltip, Typography} from "@mui/material";
import {styles} from "./styles.js";
import React from "react";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

const FormCard = ({
                      formTitle,
                      formTitleStyles = styles.formTitle,
                      formSubtitle,
                      formSubtitleStyles = styles.formSubtitle,
                      children,
                      open,
                      openForm,
                      products,
                      contactInfo,
                      delivery,
                      payment
                  }) => {
    const handleClick = () => {
        openForm();
    }

    const {orderList, checkout} = useSelector(state => state.localStorage);


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
                        {products && <Box sx={styles.imgContainer}>
                            {orderList.length && orderList.slice(0, 5).map((product) => {
                                return (
                                    <Tooltip key={product.id} title={product.title}>
                                        <img src={product.image} alt={product.title} style={styles.img}/>
                                    </Tooltip>
                                )
                            })}
                        </Box>}
                        {contactInfo && <Box>
                            <Typography variant='span' component={'span'} sx={styles.contactInfoTitle}>
                                {checkout.otherReceiver ?
                                    `${checkout.otherReceiverPhoneNumber} / ${checkout.receiverName} ${checkout.lastName}` :
                                    `${checkout.phoneNumber} / ${checkout.firstName}`}

                            </Typography>
                        </Box>}
                        {delivery && <Box>
                            <Typography variant='span' component={'span'} sx={styles.contactInfoTitle}>
                                {checkout.city.city} / {checkout.deliveryMethod}
                            </Typography>
                        </Box>}
                        {payment && <Box>
                            <Typography variant='span' component={'span'} sx={styles.contactInfoTitle}>
                                {checkout.paymentMethod}
                            </Typography>
                        </Box>}
                    </div>
                    <Button variant='outlined' sx={styles.buttonEdit} onClick={handleClick}>
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
    openForm: PropTypes.func,
    products: PropTypes.bool,
    contactInfo: PropTypes.bool,
    delivery: PropTypes.bool,
    payment: PropTypes.bool,
};

export default FormCard;
