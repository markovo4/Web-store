import * as Yup from 'yup';

const subscribeValidation = () => Yup.object({

    email: Yup.string()
        .trim()
        .min(3, 'Must be at least 3 characters')
        .matches(/@/, 'You are missing @')
        .required('Required'),
});

export default subscribeValidation;
