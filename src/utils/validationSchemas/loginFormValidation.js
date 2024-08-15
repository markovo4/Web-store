import * as Yup from 'yup';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const loginFormValidation = Yup.object({
    login: Yup.string()
        .transform(value => value.trim()) // Trim the input value
        .min(3, 'Must be at least 3 characters')
        .matches(emailRegex, 'Invalid login')
        .required('Required'),
    password: Yup.string()
        .transform(value => value.trim()) // Trim the input value
        .min(6, 'Must be at least 6 characters')
        .required('Required'),
});

export default loginFormValidation;
