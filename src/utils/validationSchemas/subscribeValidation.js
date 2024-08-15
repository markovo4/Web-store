import * as Yup from 'yup';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const subscribeValidation = () => Yup.object({

    email: Yup.string()
        .trim()
        .min(3, 'Must be at least 3 characters')
        .matches(emailRegex, 'You are missing @')
        .required('Required'),
});

export default subscribeValidation;
