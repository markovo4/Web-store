import {cloneElement} from 'react';
import PropTypes from 'prop-types';
import {Button, FormGroup} from '@mui/material';
import FormInput from '../../UI/inputs/FormInput';
import {useFormik} from 'formik';
import loginFormValidation from '../../../utils/validationSchemas/loginFormValidation.js';
import Cookies from 'js-cookie';
import {styles} from './styles.js';
import {useDispatch, useSelector} from 'react-redux';
import {setModalLoginOpen} from '../../../redux/slices/modalsAuthSlice.js';
import {useSnackbar} from 'notistack';
import ModalTemplate from '../../UI/ModalTemplate/index.js';

const formInitValues = {
    login: '',
    password: '',
};

const ModalLogin = ({button}) => {
    const {enqueueSnackbar} = useSnackbar();
    const {modalLoginOpen} = useSelector((state) => state.modalsAuth);
    const dispatch = useDispatch();

    const handleOpen = () => dispatch(setModalLoginOpen(true)); // Ensure you set the correct state
    const handleClose = () => dispatch(setModalLoginOpen(false)); // Ensure you set the correct state

    const buttonWithOnClick = cloneElement(button, {
        onClick: handleOpen,
    });

    const formik = useFormik({
        initialValues: {...formInitValues},
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
            title={'Log in'}
            button={buttonWithOnClick}
            open={modalLoginOpen}
            handleClose={handleClose}
        >
            <form onSubmit={formik.handleSubmit} style={styles.formLogin}>
                <FormGroup className={'flex '}>
                    <FormInput
                        onChange={formik.handleChange}
                        value={formik.values.login}
                        touched={formik.touched.login}
                        error={formik.errors.login}
                        label={'Login:'}
                        name={'login'}
                        id={'login'}
                        type={'text'}
                    />
                    <FormInput
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        touched={formik.touched.password}
                        error={formik.errors.password}
                        label={'Password:'}
                        name={'password'}
                        id={'password'}
                        type={'password'}
                    />
                    <Button type={'submit'} variant={'contained'} sx={styles.loginButton}>
                        Log in
                    </Button>
                </FormGroup>
            </form>
        </ModalTemplate>
    );
};

ModalLogin.propTypes = {
    button: PropTypes.object.isRequired,
};

export default ModalLogin;
