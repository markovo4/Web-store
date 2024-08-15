import {cloneElement} from 'react';
import PropTypes from 'prop-types';
import {Button, FormGroup} from '@mui/material';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {useSnackbar} from 'notistack';
import Cookies from 'js-cookie';

import FormInput from '../../UI/inputs/FormInput';
import ModalTemplate from '../../UI/ModalTemplate';
import loginFormValidation from '../../../utils/validationSchemas/loginFormValidation';
import {setModalLoginOpen} from '../../../redux/slices/modalsAuthSlice';
import {styles} from './styles';

const formInitValues = {
    login: '',
    password: '',
};

const ModalLogin = ({button}) => {
    const {enqueueSnackbar} = useSnackbar();
    const {modalLoginOpen} = useSelector(state => state.modalsAuth);
    const dispatch = useDispatch();

    // Handlers for opening and closing the modal
    const handleOpen = () => dispatch(setModalLoginOpen(true));
    const handleClose = () => dispatch(setModalLoginOpen(false));

    // Clone button to attach onClick handler
    const buttonWithOnClick = cloneElement(button, {onClick: handleOpen});

    // Formik setup
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

    return (
        <ModalTemplate
            title="Log in"
            button={buttonWithOnClick}
            open={modalLoginOpen}
            handleClose={handleClose}
        >
            <form onSubmit={formik.handleSubmit} style={styles.formLogin}>
                <FormGroup className="flex">
                    <FormInput
                        onChange={formik.handleChange}
                        value={formik.values.login}
                        touched={formik.touched.login}
                        error={formik.errors.login}
                        label="Login:"
                        name="login"
                        id="login"
                        type="text"
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
                    <Button type="submit" variant="contained" sx={styles.loginButton}>
                        Log in
                    </Button>
                </FormGroup>
            </form>
        </ModalTemplate>
    );
};

ModalLogin.propTypes = {
    button: PropTypes.element.isRequired,
};

export default ModalLogin;
