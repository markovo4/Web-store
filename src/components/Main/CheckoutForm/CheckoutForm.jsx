import {useEffect, useState} from "react";
import {Box, Button, Container, IconButton, List, ListItem, Typography,} from "@mui/material";
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
import {getCheckoutInfo, getProductList, setCheckoutInfo} from "../../../redux/slices/localStorageSlice";
import routerNames from "../../../router/routes/routerNames";
import checkoutValidationSchema from "../../../utils/validationSchemas/checkoutValidation";
import {styles} from "./styles";
import FormCard from "../../UI/cards/FormCard";
import ProductCheckout from "../../UI/cards/ProductCheckout";
import ContactInfoForm from "../ContactInfoForm";
import DeliveryOptionsForm from "../DeliveryOptionsForm";
import PaymentOptionsForm from "../PaymentOptionsForm";
import InputWithButton from "../../UI/inputs/InputWithButton";
import FormInput from "../../UI/inputs/FormInput";
import {getTotalPrice} from "../../../utils/functions/functions";
import stylesSCSS from './stylesSCSS.module.scss';

// Initial form values
const initialValues = {
    promoCode: "",
    bonusCard: "",
    termConditions: false,
    giftCardCheckBox: false,
    giftCard: new Array(4).fill(""),
    noCallback: false,
    comment: '',
};

const CheckoutForm = () => {
    // State and Redux hooks
    const {enqueueSnackbar} = useSnackbar();
    const {orderList, checkout} = useSelector((state) => state.localStorage);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Local state
    const [addComment, setAddComment] = useState(false);
    const [openForm, setOpenForm] = useState(false);
    const [isContactInfoValid, setContactInfoValid] = useState(false);
    const [isDeliveryOptionsValid, setDeliveryOptionsValid] = useState(false);
    const [isPaymentOptionsValid, setPaymentOptionsValid] = useState(false);
    const [isTouched, setTouched] = useState(false);

    // Formik setup
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
                    comment: values.comment
                };
                dispatch(setCheckoutInfo(updatedCheckoutInfo));
                resetForm();
                navigate(routerNames.pageOrderInfo);
                enqueueSnackbar("Successful checkout!", {variant: "success"});
            } else {
                setTouched(true);
            }
        },
    });

    // Effect hooks
    useEffect(() => {
        dispatch(getProductList());
        dispatch(getCheckoutInfo());
    }, [dispatch]);

    // Event handlers
    const handleClickContinue = () => setOpenForm(!openForm);

    const handleAddComment = () => setAddComment(!addComment);

    const handlePromoClick = () => enqueueSnackbar("Promo code or bonus card applied!", {variant: "success"});

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

    // JSX
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
                                    <Typography variant="h6">Your order</Typography>
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
                                {orderList.length > 0 && orderList.map((product, index) => (
                                    <ProductCheckout
                                        key={index}
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
                                                Please enter your card information
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
                                        <Typography color="error" variant="span">
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
                                            style={styles.textArea}
                                            placeholder="Comment for your parcel"
                                            name="comment"
                                            id="comment"
                                            onChange={formik.handleChange}
                                            autoSize={{minRows: 3, maxRows: 5}}
                                            allowClear
                                        />
                                        <IconButton
                                            onClick={handleAddComment}
                                            aria-label="comment"
                                            size="small"
                                            sx={styles.commentButton}
                                        >
                                            <CloseOutlinedIcon fontSize="small" sx={styles.commentIcon}/>
                                        </IconButton>
                                    </Box>
                                )}
                                <Checkbox
                                    name="noCallback"
                                    checked={formik.values.noCallback}
                                    onChange={(event) => formik.setFieldValue("noCallback", event.target.checked)}
                                >
                                    I do not need a callback for order confirmation
                                </Checkbox>
                            </ListItem>
                        </List>
                    </Box>
                    <Box>
                        <Box sx={styles.sidebar}>
                            <Typography variant="h6" component="span" sx={styles.summary}>
                                Summary:
                            </Typography>
                            <form onSubmit={formik.handleSubmit}>
                                <InputWithButton
                                    placeHolder="Discount code"
                                    labelInput="Promo code"
                                    buttonText="apply"
                                    onButtonClick={handlePromoClick}
                                    onChange={formik.handleChange}
                                    value={formik.values.promoCode}
                                    name="promoCode"
                                />
                                <InputWithButton
                                    placeHolder="293"
                                    labelInput="Your bonus card Number"
                                    buttonText="ok"
                                    onButtonClick={handlePromoClick}
                                    onChange={formik.handleChange}
                                    value={formik.values.bonusCard}
                                    name="bonusCard"
                                />
                                {orderList.length > 0 && (
                                    <Box sx={styles.itemsPrice}>
                                        <Typography sx={styles.itemsCount}>
                                            {`${getTotalPrice(orderList).quantity} ${getTotalPrice(orderList).quantity === 1 ? "item" : "items"}`}
                                        </Typography>
                                        <Typography sx={styles.totalPriceSub}>
                                            $ {getTotalPrice(orderList).price}
                                        </Typography>
                                    </Box>
                                )}
                                {orderList.length > 0 && (
                                    <Box className="flex items-end justify-between mb-3">
                                        <Typography variant="h6" component="span">
                                            Total:
                                        </Typography>
                                        <Box className="flex flex-col">
                                            <Typography
                                                sx={styles.totalPriceOriginalMain}
                                                variant="h6"
                                                component="span"
                                            >
                                                <s className={stylesSCSS.checkoutStrike}>$ {getTotalPrice(orderList).price}</s>
                                            </Typography>
                                            <Typography
                                                sx={styles.totalPriceMain}
                                                variant="h6"
                                                component="span"
                                            >
                                                $ {(getTotalPrice(orderList).price * 0.9).toFixed(2)}
                                            </Typography>
                                        </Box>
                                    </Box>
                                )}
                                <Box className="flex flex-col gap-5">
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        disabled={!isFormValid()}
                                        sx={styles.checkoutButton}
                                    >
                                        Checkout
                                    </Button>
                                    <Checkbox
                                        name="termConditions"
                                        checked={formik.values.termConditions}
                                        onChange={(event) =>
                                            formik.setFieldValue("termConditions", event.target.checked)
                                        }
                                    >
                                        I Accept terms and conditions
                                    </Checkbox>
                                </Box>
                            </form>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default CheckoutForm;
