import {cloneElement, useEffect, useMemo} from 'react';
import PropTypes from "prop-types";
import {useFormik} from "formik";
import Cookies from "js-cookie";
import {Box, Button, FormGroup} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useSnackbar} from "notistack";

import ModalTemplate from "../../UI/ModalTemplate";
import FormInput from "../../UI/inputs/FormInput";
import {setModalRegMobileOpen} from "../../../redux/slices/modalsAuthSlice";
import registerFormValidation from "../../../utils/validationSchemas/registerFormValidation";
import {formatPhoneNumber} from "../../../utils/functions/functions";
import {styles} from "./styles";
import {v4 as uuidv4} from "uuid";
import {getAllUsers, setUser} from "../../../redux/slices/localStorageSlice.js";

const formInitValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '+38(0',
    email: '',
    password: '',
    confirmPassword: '',
};

const ModalRegMobile = ({button}) => {
    const {enqueueSnackbar} = useSnackbar();
    const modalRegMobileOpen = useSelector(state => state.modalsAuth.modalRegMobileOpen);
    const dispatch = useDispatch();
    const {users = []} = useSelector((state) => state.localStorage);

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]); // Only run once, when the component mounts

    const handleOpen = () => dispatch(setModalRegMobileOpen(true));
    const handleClose = () => dispatch(setModalRegMobileOpen(false));

    const buttonWithOnClick = useMemo(() => cloneElement(button, {onClick: handleOpen}), [button]);

    const handlePhoneNumberChange = (event) => {
        formik.setFieldValue('phoneNumber', formatPhoneNumber(event.target.value));
    };

    const formik = useFormik({
        initialValues: {...formInitValues},
        validationSchema: registerFormValidation,
        onSubmit: (values, {resetForm}) => {
            try {
                const userEmail = users.find((user) => user.email === values.email);
                if (!userEmail) { // If userEmail is NOT found, proceed with registration
                    const newUser = {
                        id: uuidv4(),
                        firstName: values.firstName.trim(),
                        lastName: values.lastName.trim(),
                        phoneNumber: values.phoneNumber.trim(),
                        email: values.email.trim(),
                        password: values.password.trim(),
                    };

                    dispatch(setUser(newUser)); // Add new user to Redux store
                    enqueueSnackbar('Successful Registration!', {variant: 'success'});
                    Cookies.set('LoggedIn', 'true');

                    setTimeout(() => {
                        resetForm();
                        handleClose();
                        window.location.reload(); // Optionally reload the page
                    }, 1000);
                } else {
                    // If userEmail is found, show a message that the email already exists
                    enqueueSnackbar('Account with such email already exists!', {variant: 'info'});
                }

            } catch (e) {
                console.log(e);
            }
        }
    });

    const {handleChange, handleSubmit, values, touched, errors} = formik;

    return (
        <ModalTemplate
            title="Sign Up"
            button={buttonWithOnClick}
            open={modalRegMobileOpen}
            handleClose={handleClose}
        >
            <form onSubmit={handleSubmit} style={styles.formRegister}>
                <FormGroup className="flex">
                    <FormInput
                        onChange={handleChange}
                        value={values.firstName.trim()}
                        touched={touched.firstName}
                        error={errors.firstName}
                        label="First Name:"
                        name="firstName"
                        id="firstName"
                        type="text"
                    />
                    <FormInput
                        onChange={handleChange}
                        value={values.lastName.trim()}
                        touched={touched.lastName}
                        error={errors.lastName}
                        label="Last Name:"
                        name="lastName"
                        id="lastName"
                        type="text"
                    />
                    <FormInput
                        onChange={handlePhoneNumberChange}
                        value={values.phoneNumber.trim()}
                        touched={touched.phoneNumber}
                        error={errors.phoneNumber}
                        label="Phone Number:"
                        name="phoneNumber"
                        id="phoneNumber"
                        type="tel"
                    />
                    <FormInput
                        onChange={handleChange}
                        value={values.password.trim()}
                        touched={touched.password}
                        error={errors.password}
                        label="Password:"
                        name="password"
                        id="password"
                        type="password"
                    />
                    <FormInput
                        onChange={handleChange}
                        value={values.confirmPassword.trim()}
                        touched={touched.confirmPassword}
                        error={errors.confirmPassword}
                        label="Confirm Password:"
                        name="confirmPassword"
                        id="confirmPassword"
                        type="password"
                    />
                    <FormInput
                        onChange={handleChange}
                        value={values.email.trim()}
                        touched={touched.email}
                        error={errors.email}
                        label="Email:"
                        name="email"
                        id="email"
                        type="text"
                    />
                    <Button type="submit" sx={styles.signUpButton} variant="contained">
                        Sign Up
                    </Button>
                    <Box>
                        <Button variant="outlined" sx={styles.signUpButton} onClick={handleClose}>
                            {`I have an account`}
                        </Button>
                    </Box>
                </FormGroup>
            </form>
        </ModalTemplate>
    );
};

ModalRegMobile.propTypes = {
    button: PropTypes.object.isRequired,
};

export default ModalRegMobile;
