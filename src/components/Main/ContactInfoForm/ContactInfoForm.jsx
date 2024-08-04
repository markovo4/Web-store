import {useEffect, useState} from "react";
import {useFormik} from "formik";
import checkoutValidation from "../../../utils/validationSchemas/checkoutValidation.js";
import {Box, Button, FormControlLabel, FormGroup, Typography} from "@mui/material";
import {styles} from "../CheckoutForm/styles.js";
import FormInput from "../../UI/inputs/FormInput/index.js";
import {Checkbox} from "antd";
import FormCard from "../../UI/cards/FormCard/index.js";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {getCheckoutInfo, setCheckoutInfo} from "../../../redux/slices/localStorageSlice.js";

const formInitValues = {
    firstName: '',
    receiverName: '',
    lastName: '',
    phoneNumber: '+38(0',
    otherReceiverPhoneNumber: '+38(0',
    email: '',
}

const ContactInfoForm = ({onValidChange, onTouch}) => {

    const dispatch = useDispatch();
    const {checkout} = useSelector(state => state.localStorage)


    const [openForm, setOpenForm] = useState(false);

    const handleClickContinue = () => {
        setOpenForm(!openForm);
    }

    const [otherReceiver, setOtherReceiver] = useState(false);
    const [forGift, setForGift] = useState(false);

    const handleCheckboxChange = (event) => {
        const {name, checked} = event.target;
        if (name === "otherReceiver") {
            setOtherReceiver(checked);
        } else if (name === "forGift") {
            setForGift(checked);
        }
    }

    useEffect(() => {
        dispatch(getCheckoutInfo())
    }, [dispatch])

    const formik = useFormik({
        initialValues: {...formInitValues},
        validationSchema: checkoutValidation(otherReceiver),
        onSubmit: (values) => {

            const filteredValues = {
                ...values,
                otherReceiverPhoneNumber: otherReceiver ? values.otherReceiverPhoneNumber : '',
                receiverName: otherReceiver ? values.receiverName : '',
                lastName: otherReceiver ? values.lastName : '',
            };
            const updatedCheckoutInfo = {
                ...checkout,

                firstName: filteredValues.firstName,
                receiverName: filteredValues.receiverName,
                lastName: filteredValues.lastName,
                phoneNumber: filteredValues.phoneNumber,
                otherReceiverPhoneNumber: filteredValues.otherReceiverPhoneNumber,
                email: filteredValues.email,
            }
            dispatch(setCheckoutInfo(updatedCheckoutInfo))
            handleClickContinue();
            onValidChange(!formik.errors.firstName && !formik.errors.email && formik.touched.firstName && formik.touched.email)
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <FormCard formTitle={'1. Contact Information'} open={openForm} openForm={handleClickContinue}>
                <Box sx={styles.contactInfo}>
                    <Typography variant={'h6'} component={'span'}>1. Contact Information</Typography>
                    <div className={'grid grid-cols-2 gap-10'}>
                        <FormInput
                            onChange={formik.handleChange}
                            value={formik.values.phoneNumber.trim()}
                            touched={formik.touched.phoneNumber || onTouch}
                            error={formik.errors.phoneNumber}
                            label={'Phone Number:'}
                            name={'phoneNumber'}
                            id={'phoneNumber'}
                            type={'tel'}
                            required={true}
                        />

                        <FormInput
                            onChange={formik.handleChange}
                            value={formik.values.firstName.trim()}
                            touched={formik.touched.firstName || onTouch}
                            error={formik.errors.firstName}
                            label={'First Name:'}
                            name={'firstName'}
                            id={'firstName'}
                            type={'text'}
                            required={true}
                        />
                    </div>

                    <FormGroup className={'w-[215px] flex gap-5'}>
                        <FormInput
                            onChange={formik.handleChange}
                            value={formik.values.email.trim()}
                            touched={formik.touched.email || onTouch}
                            error={formik.errors.email}
                            label={'Email:'}
                            name={'email'}
                            id={'email'}
                            type={'text'}
                            required={true}
                        />
                        <FormControlLabel
                            className={'pl-3'}
                            control={<Checkbox
                                color={'success'}
                                checked={otherReceiver}
                                onChange={handleCheckboxChange}
                                name="otherReceiver"
                            />}
                            label="Other Receiver"
                        />
                        <FormControlLabel
                            className={'pl-3'}
                            control={<Checkbox
                                color={'success'}
                                checked={forGift}
                                onChange={handleCheckboxChange}
                                name="forGift"
                            />}
                            label="For a Gift"
                        />
                    </FormGroup>

                    {otherReceiver && (
                        <div className={'grid grid-cols-2 gap-10'}>
                            <FormInput
                                onChange={formik.handleChange}
                                value={formik.values.otherReceiverPhoneNumber.trim()}
                                touched={formik.touched.otherReceiverPhoneNumber || onTouch}
                                error={formik.errors.otherReceiverPhoneNumber}
                                disabled={!otherReceiver}
                                label={'Receiver Phone Number:'}
                                name={'otherReceiverPhoneNumber'}
                                id={'otherReceiverPhoneNumber'}
                                type={'tel'}
                                required={otherReceiver}
                            />

                            <FormInput
                                onChange={formik.handleChange}
                                value={formik.values.lastName.trim()}
                                touched={formik.touched.lastName || onTouch}
                                error={formik.errors.lastName}
                                disabled={!otherReceiver}
                                label={'Last Name:'}
                                name={'lastName'}
                                id={'lastName'}
                                type={'text'}
                                required={otherReceiver}
                            />

                            <FormInput
                                onChange={formik.handleChange}
                                value={formik.values.receiverName.trim()}
                                touched={formik.touched.receiverName || onTouch && otherReceiver}
                                error={formik.errors.receiverName}
                                disabled={!otherReceiver}
                                label={'Receiver Name:'}
                                name={'receiverName'}
                                id={'receiverName'}
                                type={'text'}
                                required={otherReceiver}
                            />
                        </div>
                    )}
                    <Button type="submit" variant={'outlined'} sx={styles.buttonSubmit}>Continue
                        Checkout</Button>
                </Box>
            </FormCard>
        </form>
    )
}

ContactInfoForm.propTypes = {
    onValidChange: PropTypes.func.isRequired,
    onTouch: PropTypes.bool.isRequired,
}
export default ContactInfoForm;