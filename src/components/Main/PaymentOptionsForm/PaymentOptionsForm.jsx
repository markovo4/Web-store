import {useEffect, useState} from "react";
import {Box, Button, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";
import {useFormik} from "formik";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PixIcon from '@mui/icons-material/Pix';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SecurityIcon from '@mui/icons-material/Security';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AppleIcon from '@mui/icons-material/Apple';
import FormCard from "../../UI/cards/FormCard";
import {getCheckoutInfo, setCheckoutInfo} from "../../../redux/slices/localStorageSlice";
import {styles} from "./styles";

const initialValues = {
    paymentOption: 'Pay when you get the product',
};

const PaymentOptionsForm = ({onValidChange}) => {
    const {checkout} = useSelector(state => state.localStorage);
    const dispatch = useDispatch();
    const [openForm, setOpenForm] = useState(false);

    // Toggle form visibility
    const handleClickContinue = () => setOpenForm(prev => !prev);

    // Formik setup
    const formik = useFormik({
        initialValues,
        onSubmit: (values, {resetForm}) => {
            handleClickContinue();
            const updatedCheckoutInfo = {
                ...checkout,
                paymentMethod: values.paymentOption,
            };
            dispatch(setCheckoutInfo(updatedCheckoutInfo));
            onValidChange(!formik.errors.paymentOption && formik.touched.paymentOption);
            resetForm();
        }
    });

    useEffect(() => {
        dispatch(getCheckoutInfo());
    }, [dispatch]);

    return (
        <form onSubmit={formik.handleSubmit}>
            <FormCard
                payment={true}
                formTitle={'3. Payment options'}
                open={openForm}
                openForm={handleClickContinue}
            >
                <Box sx={styles.contactInfo}>
                    <Typography variant='h6' component='span'>3. Payment options</Typography>

                    <RadioGroup
                        name="paymentOption"
                        value={formik.values.paymentOption}
                        onChange={formik.handleChange}
                        sx={styles.radioGroup}
                    >
                        {/* Payment options */}
                        <Box sx={styles.radioButton}>
                            <FormControlLabel
                                value="Pay after delivery"
                                control={<Radio/>}
                                label={
                                    <Typography variant="span" sx={styles.radioLabel}>
                                        Pay after delivery
                                    </Typography>
                                }
                            />
                            <AccountBalanceWalletIcon/>
                        </Box>
                        <Box sx={styles.radioButton}>
                            <FormControlLabel
                                value="Pay by parts"
                                control={<Radio/>}
                                label={
                                    <Typography variant="span" sx={styles.radioLabel}>
                                        Pay by parts
                                    </Typography>
                                }
                            />
                            <PixIcon/>
                        </Box>
                        <Box sx={styles.radioButton}>
                            <FormControlLabel
                                value="Online payment"
                                control={<Radio/>}
                                label={
                                    <Typography variant="span" sx={styles.radioLabel}>
                                        Online payment
                                    </Typography>
                                }
                            />
                            <CreditCardIcon/>
                        </Box>
                        <Box sx={styles.radioButton}>
                            <FormControlLabel
                                value="Privat Bank"
                                control={<Radio/>}
                                label={
                                    <Typography variant="span" sx={styles.radioLabel}>
                                        Pay with Privat Bank
                                    </Typography>
                                }
                            />
                            <SecurityIcon/>
                        </Box>
                        <Box sx={styles.radioButton}>
                            <FormControlLabel
                                value="Pay-check Payment"
                                control={<Radio/>}
                                label={
                                    <Typography variant="span" sx={styles.radioLabel}>
                                        Pay-check Payment
                                    </Typography>
                                }
                            />
                            <ReceiptLongIcon/>
                        </Box>
                        <Box sx={styles.radioButton}>
                            <FormControlLabel
                                value="Apple Pay"
                                control={<Radio/>}
                                label={
                                    <Typography variant="span" sx={styles.radioLabel}>
                                        Apple Pay
                                    </Typography>
                                }
                            />
                            <AppleIcon/>
                        </Box>
                    </RadioGroup>

                    <Button type="submit" variant='outlined' sx={styles.buttonSubmit}>
                        Continue Checkout
                    </Button>
                </Box>
            </FormCard>
        </form>
    );
};

// Prop types validation
PaymentOptionsForm.propTypes = {
    onValidChange: PropTypes.func.isRequired,
};

export default PaymentOptionsForm;
