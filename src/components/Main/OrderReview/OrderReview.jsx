import {Box, Button, Container, Divider, List, ListItem, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCheckoutInfo} from "../../../redux/slices/localStorageSlice.js";
import {styles} from "./styles.js";
import {Link} from "react-router-dom";
import routerNames from "../../../router/routes/routerNames.js";

const OrderReview = () => {
    const {checkout} = useSelector(state => state.localStorage);
    const dispatch = useDispatch();

    const [showProducts, setOpen] = useState(false);

    const handleShowProducts = () => {
        setOpen(!showProducts);
    }

    useEffect(() => {
        dispatch(getCheckoutInfo())
    }, [dispatch]);

    console.log(checkout);

    return (
        <Container sx={styles.container}>
            <Typography variant="h4" sx={styles.heading}>Order Review</Typography>
            <List sx={styles.list}>
                {checkout.firstName && <ListItem sx={styles.listItem}><Typography variant='h6'>First
                    Name: {checkout.firstName}</Typography></ListItem>}
                {checkout.lastName && <ListItem sx={styles.listItem}><Typography variant='h6'>Last
                    Name: {checkout.lastName}</Typography></ListItem>}
                {checkout.email && <ListItem sx={styles.listItem}><Typography
                    variant='h6'>Email: {checkout.email}</Typography></ListItem>}
                {checkout.phoneNumber && <ListItem sx={styles.listItem}><Typography variant='h6'>Phone
                    Number: {checkout.phoneNumber}</Typography></ListItem>}
                {checkout.otherReceiverPhoneNumber &&
                    <ListItem sx={styles.listItem}><Typography variant='h6'>Other Recipient Phone
                        Number: {checkout.otherReceiverPhoneNumber}</Typography></ListItem>}
                {checkout.city.city && <ListItem sx={styles.listItem}><Typography variant='h6'>Deliver
                    To: {checkout.city.city}</Typography></ListItem>}
                {checkout.deliveryMethod && <ListItem sx={styles.listItem}><Typography variant='h6'>Delivery
                    Method: {checkout.deliveryMethod}</Typography></ListItem>}
                {checkout.paymentMethod && <ListItem sx={styles.listItem}><Typography variant='h6'>Payment
                    Method: {checkout.paymentMethod}</Typography></ListItem>}
                {checkout.bonusCard && <ListItem sx={styles.listItem}><Typography variant='h6'>Bonus
                    Card: {checkout.bonusCard}</Typography></ListItem>}
                {checkout.promoCode && <ListItem sx={styles.listItem}><Typography variant='h6'>Promo
                    Code: {checkout.promoCode}</Typography></ListItem>}
                <ListItem sx={styles.listItem} className={'flex items-center'}>
                    <Typography variant='h6' sx={styles.productHeader}>Products to Order:</Typography>
                    <Button sx={styles.buttonInfo} variant='contained' onClick={handleShowProducts}>More Info</Button>
                </ListItem>
                <ListItem sx={styles.productItem} className={'flex flex-col'}>
                    {showProducts && checkout.productToOrder.map((product, index) => (

                        <Box key={index} className='flex flex-col' sx={styles.productBox}>
                            <Box className='flex items-center justify-evenly' sx={styles.productDetails}>
                                <img src={product.image} alt={product.title} style={styles.image}/>
                                <Typography sx={styles.productTitle} variant='h6'>{product.title}</Typography>
                                <Typography sx={styles.productAmount} variant='h6'>{product.amount} Itm.</Typography>
                                <Typography sx={styles.productPrice} variant='h6'>$ {product.price}</Typography>
                            </Box>
                        </Box>

                    ))}
                </ListItem>
                <Divider sx={styles.divider}/>
                <ListItem sx={styles.totalPriceItem}>
                    <Typography variant='h5'>Total Price: $ {checkout.totalPrice}</Typography>
                </ListItem>
                <ListItem>
                    <Link to={routerNames.pageMain}>
                        <Button variant='contained' sx={styles.buttonMain}>Go to main page</Button>
                    </Link>
                </ListItem>
            </List>
        </Container>
    )
}

export default OrderReview;