import {useEffect, useState} from "react";
import {Box, Button, Container, IconButton, List, ListItem, Typography} from "@mui/material";
import {Checkbox} from "antd";
import {Link, useNavigate} from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import TextArea from "antd/es/input/TextArea";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {useSnackbar} from "notistack";
import {
    getCheckoutInfo,
    getListOfOrders,
    getProductList,
    setCheckoutInfo,
    setListOfOrders,
} from "../../../redux/slices/localStorageSlice";
import routerNames from "../../../router/routes/routerNames";
import checkoutValidationSchema from "../../../utils/validationSchemas/checkoutValidation";
import {styles} from "./styles";
import FormCard from "../../UI/cards/FormCard";
import ProductCheckout from "../../UI/cards/ProductCheckout";
import ContactInfoForm from "../ContactInfoForm";
import DeliveryOptionsForm from "../DeliveryOptionsForm";
import PaymentOptionsForm from "../PaymentOptionsForm";
import FormInput from "../../UI/inputs/FormInput";
import {getTotalPrice} from "../../../utils/functions/functions";
import stylesSCSS from './stylesSCSS.module.scss';
import Cookies from "js-cookie";
import {v4 as uuidv4} from 'uuid';

const initialValues = {
    promoCode: '',
    bonusCard: '',
    termConditions: false,
    giftCardCheckBox: false,
    giftCard: new Array(4).fill(''),
    noCallback: false,
    comment: '',
};

const CheckoutForm = () => {
    const orderId = uuidv4();
    const {enqueueSnackbar} = useSnackbar();
    const {orderList, checkout, listOfOrders} = useSelector((state) => state.localStorage);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [addComment, setAddComment] = useState(false);
    const [openForm, setOpenForm] = useState(false);
    const [isContactInfoValid, setContactInfoValid] = useState(false);
    const [isDeliveryOptionsValid, setDeliveryOptionsValid] = useState(false);
    const [isPaymentOptionsValid, setPaymentOptionsValid] = useState(false);
    const [isTouched, setTouched] = useState(false);
    const date = new Date().toLocaleDateString();

    const formik = useFormik({
        initialValues,
        validationSchema: checkoutValidationSchema,
        onSubmit: (values, {resetForm}) => {
            if (isContactInfoValid && isDeliveryOptionsValid && isPaymentOptionsValid) {
                const updatedCheckoutInfo = {
                    ...checkout,
                    productToOrder: [...orderList],
                    bonusCard: values.bonusCard,
                    promoCode: values.promoCode,
                    termConditions: values.termConditions,
                    totalPrice: getTotalPrice(orderList).price * 0.9,
                    giftCard: values.giftCard,
                    noCallback: values.noCallback,
                    comment: values.comment,
                };

                dispatch(setCheckoutInfo(updatedCheckoutInfo));
                if (Cookies.get('LoggedIn')) {
                    const personalOrder = [...listOfOrders, {orderId, date, order: orderList}];
                    dispatch(setListOfOrders(personalOrder));
                }

                resetForm();
                navigate(routerNames.pageOrderInfo);
                enqueueSnackbar("Successful checkout!", {variant: "success"});
            } else {
                setTouched(true);
            }
        },
    });

    useEffect(() => {
        dispatch(getProductList());
        dispatch(getCheckoutInfo());
        dispatch(getListOfOrders());
    }, [dispatch]);

    const handleClickContinue = () => setOpenForm(!openForm);
    const handleAddComment = () => setAddComment(!addComment);

    const handleGiftCardInputChange = (e, index) => {
        const value = e.target.value;
        if (value.length <= 4 && /^\d*$/.test(value)) {
            const newGiftCard = [...formik.values.giftCard];
            newGiftCard[index] = value;
            formik.setFieldValue("giftCard", newGiftCard);
            if (value.length === 4 && index < newGiftCard.length - 1) {
                document.getElementById(`giftCard-${index + 1}`).focus();
            }
        }
    };

    const isFormValid = () =>
        formik.values.termConditions &&
        isContactInfoValid &&
        isDeliveryOptionsValid &&
        isPaymentOptionsValid;

    return (
        <Box sx={styles.sectionForm}>
            <Container>
                <Box className="flex items-center justify-between pt-4 pb-4">
                    <Typography variant="h5" component="p" sx={styles.checkoutTitle}>
                        Checkout
                    </Typography>
                    <Link to={routerNames.pageMain}>
                        <Button
                            variant="outlined"
                            startIcon={<ArrowBackIcon/>}
                            sx={styles.buttonBack}
                        >
                            Back to products
                        </Button>
                    </Link>
                </Box>
                <Box sx={styles.wrapper}>
                    <Box>
                        <FormCard
                            products
                            formTitle="Your order"
                            open={openForm}
                            openForm={handleClickContinue}
                        >
                            <List sx={styles.checkoutList}>
                                <ListItem sx={styles.titleList}>
                                    <Typography variant='h6' component='span' sx={styles.orderTitle}>
                                        Your order
                                    </Typography>
                                    <Link to={routerNames.pageCart}>
                                        <Button
                                            variant="outlined"
                                            startIcon={<EditIcon/>}
                                            sx={styles.buttonBack}
                                        >
                                            Edit
                                        </Button>
                                    </Link>
                                </ListItem>
                                {orderList.map((product) => (
                                    <ProductCheckout
                                        key={product.id}
                                        title={product.title}
                                        image={product.image}
                                        count={product.amount}
                                        price={product.price}
                                        id={product.id}
                                    />
                                ))}
                                <Button
                                    onClick={handleClickContinue}
                                    variant="outlined"
                                    sx={styles.buttonSubmit}
                                >
                                    Continue Checkout
                                </Button>
                            </List>
                        </FormCard>
                        <ContactInfoForm onValidChange={setContactInfoValid} onTouch={isTouched}/>
                        <DeliveryOptionsForm onValidChange={setDeliveryOptionsValid} onTouch={isTouched}/>
                        <PaymentOptionsForm onValidChange={setPaymentOptionsValid}/>
                        <List>
                            <ListItem sx={styles.checkBoxGiftCard}>
                                <Checkbox
                                    name="giftCardCheckBox"
                                    checked={formik.values.giftCardCheckBox}
                                    onChange={(event) => formik.setFieldValue("giftCardCheckBox", event.target.checked)}
                                >
                                    I have a gift card
                                </Checkbox>
                                {formik.values.giftCardCheckBox && (
                                    <>
                                        <Box sx={styles.container}>
                                            <Typography variant="h6" sx={styles.giftCardInfoTitle}>
                                                Please enter your card number
                                            </Typography>
                                            <Typography variant="span" sx={styles.giftCardInfoSubtitle}>
                                                Code
                                            </Typography>
                                            <Box sx={styles.inputGiftCardContainer}>
                                                {formik.values.giftCard.map((data, i) => (
                                                    <FormInput
                                                        key={i}
                                                        id={`giftCard-${i}`}
                                                        name={`giftCard[${i}]`}
                                                        onChange={(e) => handleGiftCardInputChange(e, i)}
                                                        onFocus={(e) => e.target.select()}
                                                        type="text"
                                                        value={formik.values.giftCard[i]}
                                                        touched={formik.touched.giftCard ? formik.touched.giftCard[i] : false}
                                                        error={formik.errors.giftCard ? formik.errors.giftCard[i] : undefined}
                                                    />
                                                ))}
                                            </Box>
                                        </Box>
                                        <Typography color="error" variant="span" sx={styles.warning}>
                                            When paying with a gift card, bonuses cannot be debited from your bonus
                                            card.
                                        </Typography>
                                    </>
                                )}
                            </ListItem>
                            <ListItem sx={styles.checkBoxGiftCard}>
                                {!addComment ? (
                                    <Box className="flex items-center gap-2">
                                        <IconButton
                                            onClick={handleAddComment}
                                            aria-label="comment"
                                            size="small"
                                            sx={styles.commentButton}
                                        >
                                            <CommentOutlinedIcon fontSize="small" sx={styles.commentIcon}/>
                                        </IconButton>
                                        <Typography variant="span" component="span" sx={styles.commentTitle}>
                                            Add a comment
                                        </Typography>
                                    </Box>
                                ) : (
                                    <Box className="flex items-start gap-5">
                                        <TextArea
                                            className={stylesSCSS.textArea}
                                            placeholder="Comment for your parcel"
                                            name="comment"
                                            id="comment"
                                            onChange={formik.handleChange}
                                            autoSize={{minRows: 3, maxRows: 4}}
                                            value={formik.values.comment}
                                        />
                                        <IconButton onClick={handleAddComment}>
                                            <CloseOutlinedIcon/>
                                        </IconButton>
                                    </Box>
                                )}
                            </ListItem>
                            <ListItem sx={styles.checkBoxGiftCard}>
                                <Checkbox
                                    name="noCallback"
                                    checked={formik.values.noCallback}
                                    onChange={(event) => formik.setFieldValue("noCallback", event.target.checked)}
                                >
                                    {`I don't need a callback`}
                                </Checkbox>
                            </ListItem>
                            <ListItem>
                                <Checkbox
                                    name="termConditions"
                                    checked={formik.values.termConditions}
                                    onChange={(event) => formik.setFieldValue("termConditions", event.target.checked)}
                                >
                                    I accept the terms and conditions
                                </Checkbox>
                                {formik.touched.termConditions && formik.errors.termConditions && (
                                    <Typography color="error">{formik.errors.termConditions}</Typography>
                                )}
                            </ListItem>
                        </List>
                        <Box className="flex justify-end pt-8 pb-4">
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                sx={styles.buttonSubmit}
                                onClick={formik.handleSubmit}
                                disabled={!isFormValid()}
                            >
                                Place an order
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={styles.productCardOrder}></Box>
                </Box>
            </Container>
        </Box>
    );
};

export default CheckoutForm;
