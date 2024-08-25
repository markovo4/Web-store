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
                <List sx={styles.list}>
                    <ListItem sx={styles.listItem}>

                        <Typography variant="h6" sx={styles.sectionTitle}>
                            Contact info:
                        </Typography>

                        <Box sx={styles.summaryInfoContainer}>
                            <ContactMailIcon sx={styles.icon}/>
                            <Box>
                                {checkout.firstName && (
                                    <Box sx={styles.listItem}>

                                        <Typography variant='h6'>{checkout.firstName}</Typography>
                                    </Box>
                                )}
                                {checkout.lastName && (
                                    <Box sx={styles.listItem}>
                                        <Typography variant='h6'>{checkout.lastName}</Typography>
                                    </Box>
                                )}
                                {checkout.email && (
                                    <Box sx={styles.listItem}>
                                        <Typography variant='h6'>{checkout.email}</Typography>
                                    </Box>
                                )}
                                {checkout.phoneNumber && (
                                    <Box sx={styles.listItem}>
                                        <Typography variant='h6'>{checkout.phoneNumber}</Typography>
                                    </Box>
                                )}
                                {checkout.otherReceiverPhoneNumber && (
                                    <Box sx={styles.listItem}>
                                        <Typography variant='h6'>Other Recipient Phone
                                            Number: {checkout.otherReceiverPhoneNumber}</Typography>
                                    </Box>
                                )}
                            </Box>
                        </Box>

                    </ListItem>

                    <ListItem sx={styles.listItem}>

                        <Typography variant="h6" sx={styles.sectionTitle}>
                            Delivery:
                        </Typography>

                        <Box sx={styles.summaryInfoContainer}>
                            <LocalShippingOutlinedIcon sx={styles.icon}/>
                            <Box>
                                {checkout.city?.city && (
                                    <Box sx={styles.listItem}>
                                        <Typography variant='h6'> {checkout.city.city}</Typography>
                                    </Box>
                                )}
                                {checkout.deliveryMethod && (
                                    <Box sx={styles.listItem}>
                                        <Typography variant='h6'>{checkout.deliveryMethod}</Typography>
                                    </Box>
                                )}
                            </Box>
                        </Box>
                    </ListItem>

                    <ListItem sx={styles.listItem}>
                        <Typography variant="h6" sx={styles.sectionTitle}>
                            Payment:
                        </Typography>

                        <Box sx={styles.summaryInfoContainer}>
                            <PaymentOutlinedIcon sx={styles.icon}/>
                            <Box>
                                {checkout.paymentMethod && (
                                    <Box sx={styles.listItem}>
                                        <Typography variant='h6'>{checkout.paymentMethod}</Typography>
                                    </Box>
                                )}
                                {checkout.bonusCard && (
                                    <Box sx={styles.listItem}>
                                        <Typography variant='h6'>Bonus Card: {checkout.bonusCard}</Typography>
                                    </Box>
                                )}
                                {checkout.promoCode && (
                                    <Box sx={styles.listItem}>
                                        <Typography variant='h6'>Promo Code: {checkout.promoCode}</Typography>
                                    </Box>
                                )}
                            </Box>
                        </Box>
                    </ListItem>


                    {/* Products section */}
                    <ListItemButton sx={styles.listItem} onClick={handleShowProducts}>
                        <Typography variant='h6' sx={styles.sectionTitle}> View order List</Typography>
                    </ListItemButton>
                    {showProducts && (
                        <ListItem sx={styles.productItem} className='flex flex-col'>
                            {checkout.productToOrder.map(product => (
                                <Box key={product.id} className='flex flex-col' sx={styles.productBox}>
                                    <Box className='flex items-center justify-evenly' sx={styles.productDetails}>
                                        <img src={product.image} alt={product.title} className={stylesSCSS.image}/>
                                        <Typography sx={styles.productTitle} variant='h6'>{product.title}</Typography>
                                        <Typography sx={styles.productAmount}
                                                    variant='h6'>{product.amount} Itm.</Typography>
                                        <Typography sx={styles.productPrice} variant='h6'>
                                            $ {(product.price * 0.9)}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </ListItem>
                    )}
                    <Divider sx={styles.divider}/>

                    {/* Total price and navigation */}
                    <ListItem sx={styles.totalPriceItem}>
                        <Typography variant='h5'>Total Price: $ {checkout.totalPrice}</Typography>
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
