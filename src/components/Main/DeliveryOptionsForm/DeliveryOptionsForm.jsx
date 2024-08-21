import {Box, Button, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";
import {styles} from "./styles.js";
import {useEffect, useState} from "react";
import {useFormik} from "formik";
import CitiesSelect from "../../UI/inputs/CitiesSelect";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import FormCard from "../../UI/cards/FormCard/index.js";
import deliveryOptionsValidation from "../../../utils/validationSchemas/deliveryOptionsValidation.js";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {getCheckoutInfo, setCheckoutInfo} from "../../../redux/slices/localStorageSlice.js";

const initialValues = {
    deliveryOption: 'Pick up at the store',
    city: null,
};

const DeliveryOptionsForm = ({onValidChange, onTouch}) => {
    const dispatch = useDispatch();
    const [openForm, setOpenForm] = useState(false);
    const {checkout} = useSelector(state => state.localStorage)

    const handleClickContinue = () => {
        setOpenForm(!openForm);
    }

    const formik = useFormik({
        initialValues,
        validationSchema: deliveryOptionsValidation,
        onSubmit: (values) => {
            handleClickContinue();

            const updatedCheckoutInfo = {
                ...checkout,
                deliveryMethod: values.deliveryOption,
                city: values.city
            }
            dispatch(setCheckoutInfo(updatedCheckoutInfo))
            onValidChange(!formik.errors.city && !formik.errors.deliveryOption && formik.touched.city && formik.touched.deliveryOption)
        }
    });

    useEffect(() => {
        dispatch(getCheckoutInfo())
    }, [dispatch])

    return (
        
        <form onSubmit={formik.handleSubmit}>
            <FormCard
                delivery={!formik.errors.city && !formik.errors.deliveryOption && formik.touched.city && formik.touched.deliveryOption}
                formTitle={'2. Delivery options'}
                open={openForm}
                openForm={handleClickContinue}>
                <Box sx={styles.contactInfo}>
                    <Typography variant='h6' component={'span'}>2. Delivery options</Typography>

                    <Typography variant='span' sx={styles.selectorTitle}>Your City</Typography>
                    <Box>
                        <CitiesSelect
                            styles={styles.selector}
                            value={formik.values.city}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.city || onTouch ? (
                            <Typography sx={styles.selectorError}>
                                {formik.errors.city}
                            </Typography>
                        ) : null}
                    </Box>

                    <RadioGroup
                        name="deliveryOption"
                        value={formik.values.deliveryOption}
                        onChange={formik.handleChange}
                        sx={styles.radioGroup}
                    >
                        <Box sx={styles.radioButton}>
                            <FormControlLabel
                                value="Pick up at the store"
                                control={<Radio/>}
                                label="Pick up at the store"
                            />
                            <ShoppingCartCheckoutIcon/>
                        </Box>

                        <Box sx={styles.radioButton}>
                            <FormControlLabel
                                value="NOVA Poshta"
                                control={<Radio/>}
                                label="Pick up at Nova Poshta delivery post"
                            />
                            <LocalShippingIcon/>
                        </Box>

                        <Box sx={styles.radioButton}>
                            <FormControlLabel
                                value="UKR Poshta"
                                control={<Radio/>}
                                label="Pick up at UKR Poshta delivery post"
                            />
                            <MarkunreadMailboxIcon/>
                        </Box>
                    </RadioGroup>

                    <Button type="submit" variant='outlined' sx={styles.buttonSubmit}>
                        Continue Checkout
                    </Button>
                </Box>
            </FormCard>
        </form>
    );
}
DeliveryOptionsForm.propTypes = {
    onValidChange: PropTypes.func.isRequired,
    onTouch: PropTypes.bool.isRequired,
}
export default DeliveryOptionsForm;
