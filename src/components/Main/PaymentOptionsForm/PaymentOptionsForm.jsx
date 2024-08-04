import {Box, Button, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";
import {styles} from "./styles.js";
import {useState} from "react";
import {useFormik} from "formik";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PixIcon from '@mui/icons-material/Pix';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SecurityIcon from '@mui/icons-material/Security';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AppleIcon from '@mui/icons-material/Apple';
import FormCard from "../../UI/cards/FormCard/index.js";
import PropTypes from "prop-types";

const initialValues = {
    paymentOption: 'getPay',
}

const PaymentOptionsForm = ({onValidChange}) => {
    const [openForm, setOpenForm] = useState(false);

    const handleClickContinue = () => {
        setOpenForm(!openForm);
    }

    const formik = useFormik({
        initialValues,
        onSubmit: (values, {resetForm}) => {
            console.log(values);
            handleClickContinue();
            onValidChange(!formik.errors.paymentOption && formik.touched.paymentOption)
            resetForm();
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <FormCard formTitle={'3. Payment options'} open={openForm} openForm={handleClickContinue}>
                <Box sx={styles.contactInfo}>
                    <Typography variant={'h6'} component={'span'}>3. Payment options</Typography>

                    <RadioGroup
                        name="paymentOption"
                        value={formik.values.paymentOption}
                        onChange={formik.handleChange}
                        sx={styles.radioGroup}
                    >
                        <div style={styles.radioButton}>
                            <FormControlLabel
                                value="getPay"
                                control={<Radio/>}
                                label="Pay when you get the product"
                            />
                            <AccountBalanceWalletIcon/>
                        </div>
                        <div style={styles.radioButton}>
                            <FormControlLabel
                                value="partialPay"
                                control={<Radio/>}
                                label="Pay by parts"
                            />
                            <PixIcon/>
                        </div>
                        <div style={styles.radioButton}>
                            <FormControlLabel
                                value="onlinePay"
                                control={<Radio/>}
                                label="Online payment"
                            />
                            <CreditCardIcon/>
                        </div>
                        <div style={styles.radioButton}>
                            <FormControlLabel
                                value="privatPay"
                                control={<Radio/>}
                                label="Pay with Privat Bank"
                            />
                            <SecurityIcon/>
                        </div>
                        <div style={styles.radioButton}>
                            <FormControlLabel
                                value="payCheck"
                                control={<Radio/>}
                                label="Company check Payment"
                            />
                            <ReceiptLongIcon/>
                        </div>
                        <div style={styles.radioButton}>
                            <FormControlLabel
                                value="applePay"
                                control={<Radio/>}
                                label="Apple Pay"
                            />
                            <AppleIcon/>
                        </div>
                    </RadioGroup>

                    <Button type="submit" variant={'outlined'} sx={styles.buttonSubmit}>
                        Continue Checkout
                    </Button>
                </Box>
            </FormCard>
        </form>
    );
}

PaymentOptionsForm.propTypes = {
    onValidChange: PropTypes.func.isRequired,
}

export default PaymentOptionsForm;
