import * as Yup from 'yup';
import cities from "../../assets/cities/cities.js";
// Assuming cities is an array of objects like [{ city: 'New York' }, { city: 'Los Angeles' }, ...]
const cityNames = cities.map(cityObj => cityObj.city);

const deliveryOptionsValidation = Yup.object({
    city: Yup.object().nullable().shape({
        city: Yup.string()
            .oneOf(cityNames, 'Please select a valid city from the list.')
            .required('City is required.')
    }).required('City is required.')
});

export default deliveryOptionsValidation;
