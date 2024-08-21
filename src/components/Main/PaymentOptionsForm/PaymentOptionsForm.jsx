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
                        <div style={styles.radioButton}>
                            <FormControlLabel
                                value="Pay when you get the product"
                                control={<Radio/>}
                                label="Pay when you get the product"
                            />
                            <AccountBalanceWalletIcon/>
                        </div>
                        <div style={styles.radioButton}>
                            <FormControlLabel
                                value="Pay by parts"
                                control={<Radio/>}
                                label="Pay by parts"
                            />
                            <PixIcon/>
                        </div>
                        <div style={styles.radioButton}>
                            <FormControlLabel
                                value="Online payment"
                                control={<Radio/>}
                                label="Online payment"
                            />
                            <CreditCardIcon/>
                        </div>
                        <div style={styles.radioButton}>
                            <FormControlLabel
                                value="Privat Bank"
                                control={<Radio/>}
                                label="Pay with Privat Bank"
                            />
                            <SecurityIcon/>
                        </div>
                        <div style={styles.radioButton}>
                            <FormControlLabel
                                value="Company check Payment"
                                control={<Radio/>}
                                label="Company check Payment"
                            />
                            <ReceiptLongIcon/>
                        </div>
                        <div style={styles.radioButton}>
                            <FormControlLabel
                                value="Apple Pay"
                                control={<Radio/>}
                                label="Apple Pay"
                            />
                            <AppleIcon/>
                        </div>
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
