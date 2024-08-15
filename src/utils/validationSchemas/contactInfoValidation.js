import * as Yup from 'yup';

const phoneRegExp = /^(?:\+?(\d{1,3}))?[-.\s]?(\(?\d{1,4}\)?[-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const contactInfoValidation = (otherReceiver) => Yup.object({
    firstName: Yup.string()
        .trim()
        .min(4, 'At least 4 characters')
        .required('Required'),
    receiverName: otherReceiver ? Yup.string()
        .trim()
        .min(4, 'At least 4 characters')
        .required('Required') : Yup.string(),
    lastName: otherReceiver ? Yup.string()
        .trim()
        .min(5, 'At least 5 characters')
        .required('Required') : Yup.string(),
    phoneNumber: Yup.string()
        .matches(phoneRegExp, 'Please use the following format: +38(XXX) XXX XX XX')
        .required('Required'),
    otherReceiverPhoneNumber: otherReceiver ? Yup.string()
        .matches(phoneRegExp, 'Please use the following format: +38(XXX) XXX XX XX')
        .required('Required') : Yup.string(),
    email: Yup.string()
        .trim()
        .min(3, 'Must be at least 3 characters')
        .matches(emailRegex, 'Invalid email')
        .required('Required'),
});

export default contactInfoValidation;
