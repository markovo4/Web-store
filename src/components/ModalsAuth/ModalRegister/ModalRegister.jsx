import ModalTemplate from "../../UI/ModalTemplate";
import PropTypes from "prop-types";
import {useFormik} from "formik";
import registerFormValidation from "../../../utils/validationSchemas/registerFormValidation.js";
import Cookies from "js-cookie";
import {Button, FormGroup} from "@mui/material";
import FormInput from "../../UI/inputs/FormInput/index.js";
import {styles} from "./styles.js";
import {useDispatch, useSelector} from "react-redux";
import {cloneElement} from "react";
import {setModalRegOpen} from "../../../redux/slices/modalsAuthSlice.js";

const formInitValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const ModalRegister = ({button}) => {
    const {modalRegOpen} = useSelector(state => state.modalsAuth);
    const dispatch = useDispatch();

    const handleOpen = () => dispatch(setModalRegOpen());
    const handleClose = () => dispatch(setModalRegOpen());

    const buttonWithOnClick = cloneElement(button, {
        onClick: handleOpen,
    });

    const formik = useFormik({
        initialValues: {...formInitValues},
        validationSchema: registerFormValidation,
        onSubmit: (values, {resetForm}) => {
            Cookies.set('LoggedIn', 'true');
            resetForm();
            handleClose();
        }
    });

    return (
        <ModalTemplate
            title={'Register'}
            button={buttonWithOnClick}
            open={modalRegOpen}
            handleClose={handleClose}
        >
            <form onSubmit={formik.handleSubmit} style={styles.formRegister}>
                <FormGroup className={'flex gap-5'}>
                    <FormInput
                        onChange={formik.handleChange}
                        value={formik.values.firstName.trim()}
                        touched={formik.touched.firstName}
                        error={formik.errors.firstName}
                        label={'First Name:'}
                        name={'firstName'}
                        id={'firstName'}
                        type={'text'}
                    />
                    <FormInput
                        onChange={formik.handleChange}
                        value={formik.values.lastName.trim()}
                        touched={formik.touched.lastName}
                        error={formik.errors.lastName}
                        label={'Last Name:'}
                        name={'lastName'}
                        id={'lastName'}
                        type={'text'}
                    />
                    <FormInput
                        onChange={formik.handleChange}
                        value={formik.values.phoneNumber.trim()}
                        touched={formik.touched.phoneNumber}
                        error={formik.errors.phoneNumber}
                        label={'Phone Number:'}
                        name={'phoneNumber'}
                        id={'phoneNumber'}
                        type={'text'}
                    />
                    <FormInput
                        onChange={formik.handleChange}
                        value={formik.values.password.trim()}
                        touched={formik.touched.password}
                        error={formik.errors.password}
                        label={'Password:'}
                        name={'password'}
                        id={'password'}
                        type={'password'}
                    />
                    <FormInput
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword.trim()}
                        touched={formik.touched.confirmPassword}
                        error={formik.errors.confirmPassword}
                        label={'Confirm Password:'}
                        name={'confirmPassword'}
                        id={'confirmPassword'}
                        type={'password'}
                    />
                    <FormInput
                        onChange={formik.handleChange}
                        value={formik.values.email.trim()}
                        touched={formik.touched.email}
                        error={formik.errors.email}
                        label={'Email:'}
                        name={'email'}
                        id={'email'}
                        type={'text'}
                    />
                    <Button type={'submit'} sx={styles.signUpButton} variant={'contained'}>
                        Sign Up
                    </Button>
                </FormGroup>
            </form>
        </ModalTemplate>
    )
}

ModalRegister.propTypes = {
    button: PropTypes.object.isRequired
}

export default ModalRegister;
