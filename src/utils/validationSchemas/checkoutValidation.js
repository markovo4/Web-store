import * as Yup from 'yup';

const phoneRegExp = /^\+\d{2}\(\d{3}\)\d{7}$/;

const checkoutValidation = Yup.object({
    firstName: Yup.string()
        .trim()
        .min(4, 'At least 4 characters')
        .required('Required'),
    receiverName: Yup.string()
        .trim()
        .min(4, 'At least 4 characters')
        .required('Required'),
    lastName: Yup.string()
        .trim()
        .min(5, 'At least 5 characters')
        .required('Required'),
    phoneNumber: Yup.string()
        .matches(phoneRegExp, 'Please use the following format: +38(XXX) XXX XX XX')
        .required('Required'),
    otherReceiverPhoneNumber: Yup.string()
        .matches(phoneRegExp, 'Please use the following format: +38(XXX) XXX XX XX')
        .required('Required'),
    email: Yup.string()
        .trim()
        .min(3, 'Must be at least 3 characters')
        .matches(/@/, 'You are missing @')
        .required('Required'),
});

export default checkoutValidation;