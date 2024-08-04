import {Box, Button, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";
import {styles} from "./styles.js";
import {useState} from "react";
import {useFormik} from "formik";
import CitiesSelect from "../../UI/inputs/CitiesSelect";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import FormCard from "../../UI/cards/FormCard/index.js";
import deliveryOptionsValidation from "../../../utils/validationSchemas/deliveryOptionsValidation.js";
import PropTypes from "prop-types";

const initialValues = {
    deliveryOption: 'store',
    city: null,
};

const DeliveryOptionsForm = ({onValidChange, onTouch}) => {
    const [openForm, setOpenForm] = useState(false);

    const handleClickContinue = () => {
        setOpenForm(!openForm);
    }

    const formik = useFormik({
        initialValues,
        validationSchema: deliveryOptionsValidation,
        onSubmit: (values) => {
            handleClickContinue();
            console.log(values)
            onValidChange(!formik.errors.city && !formik.errors.deliveryOption && formik.touched.city && formik.touched.deliveryOption)
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <FormCard formTitle={'2. Delivery options'} open={openForm} openForm={handleClickContinue}>
                <Box sx={styles.contactInfo}>
                    <Typography variant={'h6'} component={'span'}>2. Delivery options</Typography>

                    <Typography variant={'span'} sx={styles.selectorTitle}>Your City</Typography>
                    <CitiesSelect
                        styles={styles.selector}
                        value={formik.values.city}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.city || onTouch ? (
                        <Typography sx={{color: 'red'}}>
                            {formik.errors.city}
                        </Typography>
                    ) : null}

                    <RadioGroup
                        name="deliveryOption"
                        value={formik.values.deliveryOption}
                        onChange={formik.handleChange}
                        sx={styles.radioGroup}
                    >
                        <div style={styles.radioButton}>
                            <FormControlLabel
                                value="store"
                                control={<Radio/>}
                                label="Pick up at the store"
                            />
                            <ShoppingCartCheckoutIcon/>
                        </div>

                        <div style={styles.radioButton}>
                            <FormControlLabel
                                value="novaPoshta"
                                control={<Radio/>}
                                label="Pick up at Nova Poshta delivery post"
                            />
                            <LocalShippingIcon/>
                        </div>

                        <div style={styles.radioButton}>
                            <FormControlLabel
                                value="ukrPoshta"
                                control={<Radio/>}
                                label="Pick up at UKR Poshta delivery post"
                            />
                            <MarkunreadMailboxIcon/>
                        </div>
                    </RadioGroup>

                    <Button type="submit" variant={'outlined'} sx={styles.buttonSubmit}>
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
