import FormCard from "../../UI/cards/FormCard/index.js";
import {Box, Button, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";
import {styles} from "./styles.js";
import {useState} from "react";
import {useFormik} from "formik";
import CitiesSelect from "../../UI/inputs/CitiesSelect";

const initialValues = {
    store: false,
    novaPoshta: false,
    ukrPoshta: false,
}

const DeliveryOptionsForm = () => {
    const [openForm, setOpenForm] = useState(false);

    const handleClickContinue = () => {
        setOpenForm(!openForm);
    }
    const formik = useFormik({
        initialValues,
        onSubmit: (values, {resetForm}) => {
            handleClickContinue()
            resetForm();
        }

    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <FormCard formTitle={'2. Delivery options'} open={openForm} openForm={handleClickContinue}>
                <Box sx={styles.contactInfo}>
                    <Typography variant={'h6'} component={'span'}>2. Delivery options</Typography>

                    <Typography variant={'span'} sx={styles.selectorTitle}>Your City</Typography>
                    <CitiesSelect styles={styles.selector}/>

                    <RadioGroup name="use-radio-group" defaultValue="first" sx={styles.radioGroup}>
                        <FormControlLabel sx={styles.radioButton} value="store" control={<Radio/>} label="The best!"/>
                        <FormControlLabel sx={styles.radioButton} value="novaPoshta" control={<Radio/>}
                                          label="The worst."/>
                        <FormControlLabel sx={styles.radioButton} value="ukrPoshta" control={<Radio/>}
                                          label="The worst."/>
                    </RadioGroup>

                    <Button type="submit" variant={'outlined'} sx={styles.buttonSubmit}>Continue
                        Checkout</Button>
                </Box>
            </FormCard>
        </form>
    )
}

export default DeliveryOptionsForm;