import {Box, Button, Container, List, ListItem, Typography} from "@mui/material";
import {styles} from "./styles.js";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from "react-router-dom";
import routerNames from "../../../router/routes/routerNames.js";
import FormCard from "../../UI/cards/FormCard";
import CitiesSelect from "../../UI/inputs/CitiesSelect/index.js";
import {useGetAllProductsQuery} from "../../../redux/productsApi/productsApi.js";
import ProductCheckout from "../../UI/cards/ProductCheckout";
import EditIcon from '@mui/icons-material/Edit';
import ContactInfoForm from "../ContactInfoForm";
import {useState} from "react";
import DeliveryOptionsForm from "../DeliveryOptionsForm";
import PaymentOptionsForm from "../PaymentOptionsForm";
import InputWithButton from "../../UI/inputs/InputWithButton";
import {Checkbox} from "antd";
import {useFormik} from "formik";

const initialValues = {
    promoCode: null,
    bonusCard: null,
    termConditions: false,
}

const CheckoutForm = () => {
    const productsTEST = useGetAllProductsQuery();

    const [openForm, setOpenForm] = useState(false);

    const handleClickContinue = () => {
        setOpenForm(!openForm);
    }

    const getTotalPrice = (products) => {
        const priceTotal = products.reduce((totalPrice, product) => {
            return totalPrice + product.price;
        }, 0);
        return parseFloat(priceTotal.toFixed(2));
    }

    const handlePromoClick = () => {
    }

    const formik = useFormik({
        initialValues,
        onSubmit: (values, {resetForm}) => {
            resetForm();
        }
    })

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
                    <div>
                        <FormCard formTitle={'Your order'} open={openForm} openForm={handleClickContinue}>
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
                                <Button onClick={handleClickContinue} variant={'outlined'} sx={styles.buttonSubmit}>Continue
                                    Checkout</Button>
                            </List>
                        </FormCard>
                        <ContactInfoForm/>
                        <DeliveryOptionsForm/>
                        <PaymentOptionsForm/>
                    </div>
                    <div>
                        <Box sx={styles.sidebar}>
                            <Typography variant={'h6'} component={'span'} sx={styles.summary}>Summary:</Typography>
                            <form onSubmit={formik.handleSubmit}>
                                <InputWithButton
                                    placeHolder={'Discount code'}
                                    labelInput={'Promo code'}
                                    buttonText={'apply'}
                                    onButtonClick={handlePromoClick}
                                    onChange={formik.handleChange}
                                />
                                <InputWithButton
                                    placeHolder={'293'}
                                    labelInput={'You bonus card Number'}
                                    buttonText={'ok'}
                                    onButtonClick={handlePromoClick}
                                    onChange={formik.handleChange}
                                />
                                {productsTEST.data && <div style={styles.itemsPrice}>
                                    <Typography sx={styles.itemsCount}>
                                        {`${productsTEST.data.length}
                                            ${productsTEST.data.length < 2 ?
                                            productsTEST.data.length === 1 ? 'item' : 'items' : 'items'} `}
                                    </Typography>
                                    <Typography sx={styles.totalPriceSub}>
                                        $ {getTotalPrice(productsTEST.data)}
                                    </Typography>
                                </div>}

                                {productsTEST.data && <div className={'flex items-center justify-between mb-3'}>
                                    <Typography
                                        variant={'h6'}
                                        component={'span'}
                                    >
                                        Total:
                                    </Typography>

                                    <Typography
                                        sx={styles.totalPriceMain}
                                        variant={'h6'}
                                        component={'span'}
                                    >
                                        $ {getTotalPrice(productsTEST.data)}
                                    </Typography>

                                </div>}
                                <div className={'flex flex-col gap-5'}>
                                    <Button variant={"contained"} type={"submit"}
                                            disabled={!formik.values.termConditions}
                                            sx={styles.checkoutButton}>Checkout</Button>
                                    <Checkbox name="termConditions" onChange={formik.handleChange}>I Accept terms and
                                        conditions</Checkbox>
                                </div>
                            </form>
                        </Box>
                    </div>
                </div>
            </Container>
        </section>
    );
}
export default CheckoutForm;
