import * as Yup from 'yup';

const loginFormValidation = Yup.object({
    login: Yup.string()
        .transform(value => value.trim()) // Trim the input value
        .min(3, 'Must be at least 3 characters')
        .matches(/@/, 'You are missing @')
        .required('Required'),
    password: Yup.string()
        .transform(value => value.trim()) // Trim the input value
        .min(6, 'Must be at least 6 characters')
        .required('Required'),
});

export default loginFormValidation;
