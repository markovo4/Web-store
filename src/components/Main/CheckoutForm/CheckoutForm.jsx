import {Box, Button, Container, FormControlLabel, FormGroup, List, ListItem, Typography} from "@mui/material";
import {styles} from "./styles.js";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from "react-router-dom";
import routerNames from "../../../router/routes/routerNames.js";
import FormCard from "../../UI/cards/FormCard";
import CitiesSelect from "../../UI/inputs/CitiesSelect/index.js";
import {useGetAllProductsQuery} from "../../../redux/productsApi/productsApi.js";
import ProductCheckout from "../../UI/cards/ProductCheckout/index.js";
import EditIcon from '@mui/icons-material/Edit';
import {useFormik} from "formik";
import FormInput from "../../UI/inputs/FormInput/index.js";
import {Checkbox} from "antd";
import {useState} from "react";
import checkoutValidation from "../../../utils/validationSchemas/checkoutValidation.js";

const formInitValues = {
    firstName: '',
    receiverName: '',
    lastName: '',
    phoneNumber: '+38(0',
    otherReceiverPhoneNumber: '+38(0',
    email: '',
}

const CheckoutForm = () => {
    const productsTEST = useGetAllProductsQuery();
    const [otherReceiver, setOtherReceiver] = useState(false);
    const [forGift, setForGift] = useState(false);

    const handleCheckboxChange = (event) => {
        const {name, checked} = event.target;
        if (name === "otherReceiver") {
            setOtherReceiver(checked);
        } else if (name === "forGift") {
            setForGift(checked);
        }
    }

    const formik = useFormik({
        initialValues: {...formInitValues},
        validationSchema: checkoutValidation,
        onSubmit: (values, {resetForm}) => {
            // Submit form values
            console.log(values);
            resetForm();
        }
    });

    const handleFormSubmit = () => {
        formik.handleSubmit();
    };

    return (
        <section style={styles.sectionForm}>
            <Container>
                <div className={'flex items-center justify-between pt-4 pb-4'}>
                    <Typography variant={'h5'} component={'p'} sx={styles.checkoutTitle}>
                        Checkout
                    </Typography>
                    <Link to={routerNames.pageMain}>
                        <Button
                            variant={'outlined'}
                            startIcon={<ArrowBackIcon/>}
                            sx={styles.buttonBack}
                        >
                            Back to products
                        </Button>
                    </Link>
                </div>
                <div style={styles.wrapper}>
                    <form onSubmit={formik.handleSubmit}>
                        <FormCard formTitle={'Your order'}>
                            <Box sx={styles.selectorContainer}>
                                <Typography variant={'span'} sx={styles.selectorTitle}>Your City</Typography>
                                <CitiesSelect styles={styles.selector}/>
                            </Box>
                            <List className={'w-[800px]'} sx={styles.checkoutList}>
                                <ListItem sx={styles.titleList}>
                                    <Typography variant={'h6'}>Your order</Typography>
                                    <Link to={routerNames.pageCart}>
                                        <Button variant={"outlined"} startIcon={<EditIcon/>}
                                                sx={styles.buttonBack}>Edit</Button>
                                    </Link>
                                </ListItem>
                                {productsTEST.data && productsTEST.data.map((product, index) => {
                                    return (
                                        <ProductCheckout
                                            key={index}
                                            title={product.title}
                                            image={product.image}
                                            count={product.id}
                                            price={product.price}
                                        />
                                    )
                                })
                                }
                            </List>
                        </FormCard>
                        <FormCard formTitle={'1. Contact Information'} onSubmit={handleFormSubmit}>
                            <Box sx={styles.contactInfo}>
                                <Typography variant={'h6'} component={'span'}>1. Contact Information</Typography>
                                <div className={'flex justify-start gap-10'}>
                                    <FormInput
                                        onChange={formik.handleChange}
                                        value={formik.values.phoneNumber.trim()}
                                        touched={formik.touched.phoneNumber}
                                        error={formik.errors.phoneNumber}
                                        label={'Phone Number:'}
                                        name={'phoneNumber'}
                                        id={'phoneNumber'}
                                        type={'tel'}
                                    />

                                    <FormInput
                                        onChange={formik.handleChange}
                                        value={formik.values.firstName.trim()}
                                        touched={formik.touched.firstName}
                                        error={formik.errors.firstName}
                                        label={'First Name:'}
                                        name={'firstName'}
                                        id={'firstName'}
                                        type={'text'}
                                    />

                                </div>

                                <FormGroup className={'w-[215px] flex gap-5'}>
                                    <FormInput
                                        onChange={formik.handleChange}
                                        value={formik.values.email.trim()}
                                        touched={formik.touched.email}
                                        error={formik.errors.email}
                                        label={'Email:'}
                                        name={'email'}
                                        id={'email'}
                                        type={'text'}
                                    />
                                    <FormControlLabel
                                        className={'pl-3'}
                                        control={<Checkbox
                                            color={'success'}
                                            checked={otherReceiver}
                                            onChange={handleCheckboxChange}
                                            name="otherReceiver"
                                        />}
                                        label="Other Receiver"
                                    />
                                    <FormControlLabel
                                        className={'pl-3'}
                                        control={<Checkbox
                                            color={'success'}
                                            checked={forGift}
                                            onChange={handleCheckboxChange}
                                            name="forGift"
                                        />}
                                        label="For a Gift"
                                    />
                                </FormGroup>

                                {otherReceiver && (<div className={'flex justify-start gap-10'}>
                                    <FormInput
                                        onChange={formik.handleChange}
                                        value={formik.values.otherReceiverPhoneNumber.trim()}
                                        touched={formik.touched.otherReceiverPhoneNumber}
                                        error={formik.errors.otherReceiverPhoneNumber}
                                        label={'Receiver Phone Number:'}
                                        name={'otherReceiverPhoneNumber'}
                                        id={'otherReceiverPhoneNumber'}
                                        type={'tel'}
                                    />

                                    <FormInput
                                        onChange={formik.handleChange}
                                        value={formik.values.lastName.trim()}
                                        touched={formik.touched.lastName}
                                        error={formik.errors.lastName}
                                        label={'Last Name:'}
                                        name={'lastName'}
                                        id={'lastName'}
                                        type={'text'}
                                    />

                                    <FormInput
                                        onChange={formik.handleChange}
                                        value={formik.values.receiverName.trim()}
                                        touched={formik.touched.receiverName}
                                        error={formik.errors.receiverName}
                                        label={'Receiver Name:'}
                                        name={'receiverName'}
                                        id={'receiverName'}
                                        type={'text'}
                                    />

                                </div>)}
                            </Box>
                        </FormCard>
                    </form>
                </div>
            </Container>
        </section>
    )
}

export default CheckoutForm;
