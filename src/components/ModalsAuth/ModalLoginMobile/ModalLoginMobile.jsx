import {cloneElement, useMemo} from 'react';
import PropTypes from 'prop-types';
import {Box, Button, FormGroup} from '@mui/material';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {useSnackbar} from 'notistack';
import Cookies from 'js-cookie';

import FormInput from '../../UI/inputs/FormInput';
import ModalTemplate from '../../UI/ModalTemplate';
import loginFormValidation from '../../../utils/validationSchemas/loginFormValidation';
import {setModalLoginMobileOpen} from '../../../redux/slices/modalsAuthSlice';
import {styles} from './styles';
import ModalRegMobile from "../ModalRegMobile";

const formInitValues = {
    login: '',
    password: '',
};

const ModalLoginMobile = ({button}) => {
    const {enqueueSnackbar} = useSnackbar();
    const modalLoginMobileOpen = useSelector(state => state.modalsAuth.modalLoginMobileOpen);
    const dispatch = useDispatch();

    const handleOpen = () => dispatch(setModalLoginMobileOpen(true));
    const handleClose = () => dispatch(setModalLoginMobileOpen(false));

    // Memoize button to avoid unnecessary re-renders
    const buttonWithOnClick = useMemo(() => cloneElement(button, {onClick: handleOpen}), [button]);

    const formik = useFormik({
        initialValues: formInitValues,
        validationSchema: loginFormValidation,
        onSubmit: (values, {resetForm}) => {
            enqueueSnackbar('Successful Login!', {variant: 'success'});
            Cookies.set('LoggedIn', 'true');
            setTimeout(() => {
                resetForm();
                handleClose();
                window.location.reload();
            }, 1000);
        },
    });

    const {handleChange, handleSubmit, values, touched, errors} = formik;

    return (
        <ModalTemplate
            title="Log in"
            button={buttonWithOnClick}
            open={modalLoginMobileOpen}
            handleClose={handleClose}
        >
            <form onSubmit={handleSubmit} style={styles.formLogin}>
                <FormGroup className="flex">
                    <FormInput
                        onChange={handleChange}
                        value={values.login}
                        touched={touched.login}
                        error={errors.login}
                        label="Login:"
                        name="login"
                        id="login"
                        type="text"
                    />
                    <FormInput
                        onChange={handleChange}
                        value={values.password}
                        touched={touched.password}
                        error={errors.password}
                        label="Password:"
                        name="password"
                        id="password"
                        type="password"
                    />
                    <Button type="submit" variant="contained" sx={styles.loginButton}>
                        Log in
                    </Button>
                    <Box>
                        <ModalRegMobile button={
                            <Button variant="outlined" sx={styles.loginButton}>
                                {`I don't have an account`}
                            </Button>
                        }/>
                    </Box>
                </FormGroup>
            </form>
        </ModalTemplate>
    );
};

ModalLoginMobile.propTypes = {
    button: PropTypes.element.isRequired,
};

export default ModalLoginMobile;
