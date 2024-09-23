import ModalTemplate from "../../UI/ModalTemplate";
import PropTypes from "prop-types";
import {useFormik} from "formik";
import registerFormValidation from "../../../utils/validationSchemas/registerFormValidation.js";
import Cookies from "js-cookie";
import {Button, FormGroup} from "@mui/material";
import FormInput from "../../UI/inputs/FormInput";
import {styles} from "./styles.js";
import {useDispatch, useSelector} from "react-redux";
import {cloneElement, useEffect} from "react";
import {setModalRegOpen} from "../../../redux/slices/modalsAuthSlice.js";
import {formatPhoneNumber} from "../../../utils/functions/functions.js";
import {useSnackbar} from "notistack";
import {getAllUsers, getCurrentUser, setCurrentUser, setUser} from "../../../redux/slices/localStorageSlice.js";
import {v4 as uuidv4} from 'uuid';

const formInitValues = {
    userId: '',
    firstName: '',
    lastName: '',
    phoneNumber: '+38(0',
    email: '',
    password: '',
    confirmPassword: '',
};

const ModalRegister = ({button}) => {
    const {enqueueSnackbar} = useSnackbar();
    const dispatch = useDispatch();
    const {users = []} = useSelector((state) => state.localStorage);

    useEffect(() => {
        dispatch(getAllUsers());
        dispatch(getCurrentUser());
    }, [dispatch]); // Only run once, when the component mounts

    const handlePhoneNumberChange = (event) => {
        const {value} = event.target;
        formik.setFieldValue('phoneNumber', formatPhoneNumber(value));
    };

    const {modalRegOpen} = useSelector((state) => state.modalsAuth);

    const handleOpen = () => dispatch(setModalRegOpen(true));
    const handleClose = () => dispatch(setModalRegOpen(false));

    const buttonWithOnClick = cloneElement(button, {
        onClick: handleOpen,
    });

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

                    dispatch(setUser(newUser));
                    dispatch(setCurrentUser(newUser));
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

        },
    });

    return (
        <ModalTemplate
            title="Sign Up"
            button={buttonWithOnClick}
            open={modalRegOpen}
            handleClose={handleClose}
        >
            <form onSubmit={formik.handleSubmit} style={styles.formRegister}>
                <FormGroup className="flex">
                    <FormInput
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        touched={formik.touched.firstName}
                        error={formik.errors.firstName}
                        label="First Name:"
                        name="firstName"
                        id="firstName"
                        type="text"
                    />
                    <FormInput
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        touched={formik.touched.lastName}
                        error={formik.errors.lastName}
                        label="Last Name:"
                        name="lastName"
                        id="lastName"
                        type="text"
                    />
                    <FormInput
                        onChange={handlePhoneNumberChange}
                        value={formik.values.phoneNumber}
                        touched={formik.touched.phoneNumber}
                        error={formik.errors.phoneNumber}
                        label="Phone Number:"
                        name="phoneNumber"
                        id="phoneNumber"
                        type="tel"
                    />
                    <FormInput
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        touched={formik.touched.password}
                        error={formik.errors.password}
                        label="Password:"
                        name="password"
                        id="password"
                        type="password"
                    />
                    <FormInput
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                        touched={formik.touched.confirmPassword}
                        error={formik.errors.confirmPassword}
                        label="Confirm Password:"
                        name="confirmPassword"
                        id="confirmPassword"
                        type="password"
                    />
                    <FormInput
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        touched={formik.touched.email}
                        error={formik.errors.email}
                        label="Email:"
                        name="email"
                        id="email"
                        type="text"
                    />
                    <Button type="submit" sx={styles.signUpButton} variant="contained">
                        Sign Up
                    </Button>
                </FormGroup>
            </form>
        </ModalTemplate>
    );
};

ModalRegister.propTypes = {
    button: PropTypes.object.isRequired,
};

export default ModalRegister;
