import {useEffect, useState} from "react";
import {Box, Button, Container, Divider, List, ListItem, ListItemButton, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getCheckoutInfo, removeAllProducts, removeCheckoutInfo} from "../../../redux/slices/localStorageSlice";
import {styles} from "./styles";
import {Link} from "react-router-dom";
import routerNames from "../../../router/routes/routerNames";
import stylesSCSS from './stylesSCSS.module.scss';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';

const OrderReview = () => {
    // Redux state and dispatch
    const {checkout} = useSelector(state => state.localStorage);
    const dispatch = useDispatch();

    // Local state for toggling product details
    const [showProducts, setShowProducts] = useState(false);

    // Toggle function for product details
    const handleShowProducts = () => setShowProducts(prev => !prev);

    // Reset checkout and products
    const handleClick = () => {
        dispatch(removeAllProducts());
        dispatch(removeCheckoutInfo());
    };

    // Fetch checkout info on component mount
    useEffect(() => {
        dispatch(getCheckoutInfo());
    }, [dispatch]);

    return (
        checkout && (<Box sx={styles.orderSummary}>
            <Container sx={styles.container}>
                <Typography variant="h4" sx={styles.title}>
                    Thank you for your order!
                </Typography>
                <Typography variant="h6" sx={styles.subtitle}>
                    Order Summary
                </Typography>
                <List sx={styles.list} disablePadding>
                    <ListItem sx={styles.listItem} disablePadding>

                        <Typography variant="h6" sx={styles.sectionTitle}>
                            Contact info:
                        </Typography>

                        <Box sx={styles.summaryInfoContainer}>
                            <ContactMailIcon sx={styles.icon}/>
                            <Box sx={styles.infoContainer}>
                                {checkout.firstName && (
                                    <Box>
                                        <Typography variant='h6'
                                                    sx={styles.infoText}> <b>Name:</b> <br/>{checkout.firstName}
                                        </Typography>
                                    </Box>
                                )}
                                {checkout.lastName && (
                                    <Box>
                                        <Typography variant='h6' sx={styles.infoText}><b>Last
                                            Name:</b><br/> {checkout.lastName}</Typography>
                                    </Box>
                                )}
                                {checkout.email && (
                                    <Box>
                                        <Typography variant='h6'
                                                    sx={styles.infoText}> <b>Email:</b><br/> {checkout.email}
                                        </Typography>
                                    </Box>
                                )}
                                {checkout.phoneNumber && (
                                    <Box>
                                        <Typography variant='h6'
                                                    sx={styles.infoText}><b>Phone
                                            number:</b><br/> {checkout.phoneNumber}</Typography>
                                    </Box>
                                )}
                                {checkout.otherReceiverPhoneNumber && (
                                    <Box>
                                        <Typography variant='h6' sx={styles.infoText}> <b>Other recipient phone
                                            number:</b><br/> {checkout.otherReceiverPhoneNumber}</Typography>
                                    </Box>
                                )}
                            </Box>
                        </Box>

                    </ListItem>

                    <ListItem sx={styles.listItem} disablePadding>

                        <Typography variant="h6" sx={styles.sectionTitle}>
                            Delivery:
                        </Typography>

                        <Box sx={styles.summaryInfoContainer}>
                            <LocalShippingOutlinedIcon sx={styles.icon}/>
                            <Box sx={styles.infoContainer}>
                                {checkout.city?.city && (
                                    <Box>
                                        <Typography variant='h6'
                                                    sx={styles.infoText}><b>To:</b><br/> {checkout.city.city}
                                        </Typography>
                                    </Box>
                                )}
                                {checkout.deliveryMethod && (
                                    <Box>
                                        <Typography variant='h6'
                                                    sx={styles.infoText}><b>How:</b><br/> {checkout.deliveryMethod}
                                        </Typography>
                                    </Box>
                                )}
                            </Box>
                        </Box>
                    </ListItem>

                    <ListItem sx={styles.listItem} disablePadding>
                        <Typography variant="h6" sx={styles.sectionTitle}>
                            Payment:
                        </Typography>

                        <Box sx={styles.summaryInfoContainer}>
                            <PaymentOutlinedIcon sx={styles.icon}/>
                            <Box sx={styles.infoContainer}>
                                {checkout.paymentMethod && (
                                    <Box>
                                        <Typography variant='h6'
                                                    sx={styles.infoText}><b>How:</b> {checkout.paymentMethod}
                                        </Typography>
                                    </Box>
                                )}
                                {checkout.bonusCard && (
                                    <Box>
                                        <Typography variant='h6' sx={styles.infoText}><b>Bonus
                                            Card:</b> {checkout.bonusCard}</Typography>
                                    </Box>
                                )}
                                {checkout.promoCode && (
                                    <Box>
                                        <Typography variant='h6' sx={styles.infoText}><b>Promo
                                            Code:</b> {checkout.promoCode}</Typography>
                                    </Box>
                                )}
                            </Box>
                        </Box>
                    </ListItem>


                    {/* Products section */}
                    <ListItemButton onClick={handleShowProducts} sx={styles.viewProducts}>
                        <Typography variant='h6' sx={styles.titleButton}> View order List</Typography>
                    </ListItemButton>
                    {showProducts && (
                        <ListItem sx={styles.productItem} className='flex flex-col'>
                            {checkout.productToOrder.map(product => (
                                <Box key={product.id} sx={styles.productBox}>
                                    <Box sx={styles.productDetails}>
                                        <img src={product.image} alt={product.title} className={stylesSCSS.image}/>
                                        <Typography sx={styles.productTitle} variant='h6'>{product.title}</Typography>
                                        <Box sx={styles.priceAmountWrapper}>
                                            <Typography sx={styles.productAmount}
                                                        variant='h6'>{product.amount} Itm.</Typography>
                                            <Typography sx={styles.productPrice} variant='h6'>
                                                $ {product.price && (product.price * 0.9).toFixed(2)}
                                            </Typography>
                                        </Box>

                                    </Box>
                                </Box>
                            ))}
                        </ListItem>
                    )}
                    <Divider sx={styles.divider}/>

                    {/* Total price and navigation */}
                    <ListItem sx={styles.totalPriceItem}>
                        <Typography variant='h5' sx={styles.totalPrice}>Total Price:
                            $ {checkout.totalPrice && (checkout.totalPrice).toFixed(2)}</Typography>
                    </ListItem>
                    <ListItem>
                        <Link to={routerNames.pageMain}>
                            <Button variant='contained' sx={styles.buttonMain} onClick={handleClick}>
                                Go to main page
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Box>)
    );
};

export default OrderReview;
