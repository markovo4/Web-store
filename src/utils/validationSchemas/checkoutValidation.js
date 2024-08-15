import * as Yup from 'yup';

const checkoutValidationSchema = Yup.object({
    promoCode: Yup.string(), // Add any specific validation if required
    bonusCard: Yup.string(), // Add any specific validation if required
    termConditions: Yup.boolean().oneOf([true], "You must accept the terms and conditions"), // Must be true
    giftCardCheckBox: Yup.boolean(), // Boolean to check if the gift card checkbox is checked
    giftCard: Yup.array().when('giftCardCheckBox', {
        is: true,
        then: (schema) =>
            schema
                .of(
                    Yup.string()
                        .matches(/^\d{4}$/, "Each section must contain exactly 4 digits")
                        .required("This field is required")
                )
                .min(4, "All gift card sections must be filled out")
                .max(4, "All gift card sections must be filled out"),
        otherwise: (schema) =>
            schema
                .of(
                    Yup.string()
                        .matches(/^\d{4}$/, "Each section must contain exactly 4 digits")
                )
                .max(4),
    }),
});

export default checkoutValidationSchema;
