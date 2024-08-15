import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {Box, Button, Container, IconButton, List, ListItem, Typography} from "@mui/material";
import {useSnackbar} from "notistack";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import CartItem from "../../UI/cards/CartItem";
import ModalLogin from "../../ModalsAuth/ModalLogin";
import ModalDeleteAllProducts from "../../ModalsProduct/ModalDeleteAllProducts";
import {styles} from "./styles";
import routerNames from "../../../router/routes/routerNames";
import {getProductList, removeAllProducts, setProductList} from "../../../redux/slices/localStorageSlice";
import {getTotalPrice} from "../../../utils/functions/functions";

const CartList = () => {
    const {enqueueSnackbar} = useSnackbar();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {displayAuthButtons} = useSelector(state => state.modalsAuth);
    const {orderList} = useSelector(state => state.localStorage);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    // Fetch the product list when the component is mounted
    useEffect(() => {
        dispatch(getProductList());
    }, [dispatch]);

    // Scroll to top when the component is mounted
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Redirect to the main page if the cart is empty
    useEffect(() => {
        if (orderList.length < 1) {
            navigate(routerNames.pageMain);
        }
    }, [orderList, navigate]);

    // Update the login state based on the auth buttons visibility
    useEffect(() => {
        setIsLoggedIn(!!displayAuthButtons);
    }, [displayAuthButtons]);

    // Navigate back to the previous page
    const handleBackClick = () => {
        navigate(-1);
    };

    // Update the quantity of a product in the cart
    const handleQuantityCount = (id, newAmount) => {
        const productIndex = orderList.findIndex(product => product.id === id);
        if (productIndex !== -1) {
            const updatedProduct = {
                ...orderList[productIndex],
                amount: newAmount,
            };

            const updatedList = [
                ...orderList.slice(0, productIndex),
                updatedProduct,
                ...orderList.slice(productIndex + 1),
            ];
            dispatch(setProductList(updatedList));
        }
    };

    // Handle deleting all products from the cart
    const handleDeleteAll = () => {
        dispatch(removeAllProducts());
        enqueueSnackbar('All products have been removed!', {variant: 'error'});
        navigate(routerNames.pageMain);
    };

    // Toggle modal visibility
    const handleOpenCartSide = () => {
        setOpenModal(!openModal);
    };

    // Render the cart items and controls
    return (
        <section style={styles.section}>
            <Container sx={styles.container}>
                <Box className="flex flex-row items-center pt-6 mb-4">
                    <IconButton onClick={handleBackClick}>
                        <ArrowBackIcon/>
                    </IconButton>
                    <Typography
                        variant="h5"
                        component="p"
                        className="pl-7"
                        sx={styles.titleBack}
                    >
                        Cart
                    </Typography>

                    {orderList.length > 0 && (
                        <Typography
                            variant="span"
                            component="p"
                            className="pl-7"
                            sx={styles.titleCount}
                        >
                            {`${getTotalPrice(orderList).quantity} ${getTotalPrice(orderList).quantity < 2 ? 'item' : 'items'}`}
                        </Typography>
                    )}
                </Box>

                <div style={styles.wrapper}>
                    <List sx={styles.productsList}>
                        <ListItem className="bg-white">
                            <ModalDeleteAllProducts
                                button={
                                    <Button
                                        variant="outlined"
                                        startIcon={<DeleteForeverIcon color="disabled" fontSize="large"/>}
                                        sx={styles.deleteButton}
                                    >
                                        Delete All
                                    </Button>
                                }
                                open={openModal}
                                onClose={handleOpenCartSide}
                                onDelete={handleDeleteAll}
                            />
                        </ListItem>
                        {orderList.length > 0 && orderList.map(product => (
                            <CartItem
                                key={product.id}
                                {...product}
                                onQuantityChange={handleQuantityCount}
                            />
                        ))}
                    </List>

                    <Box sx={styles.placeOrder}>
                        <List>
                            {!isLoggedIn && (
                                <ListItem sx={styles.sideBar}>
                                    <ModalLogin button={
                                        <Button
                                            sx={styles.loginButton}
                                            variant="outlined"
                                            endIcon={<ArrowCircleRightIcon color="success"/>}
                                        >
                                            Log in
                                        </Button>
                                    }/>
                                </ListItem>
                            )}
                            <ListItem className="flex flex-col" sx={styles.sideBar}>
                                <Link to={routerNames.pageCheckout}>
                                    <Button
                                        sx={styles.buttonPlaceOrder}
                                        variant="outlined"
                                    >
                                        Place order
                                    </Button>
                                </Link>
                                <List className="flex flex-col gap-5">
                                    <ListItem sx={styles.totalPrice}>
                                        {orderList.length > 0 && (
                                            <>
                                                <Typography>
                                                    {`${getTotalPrice(orderList).quantity} ${getTotalPrice(orderList).quantity < 2 ? 'item' : 'items'}`}
                                                </Typography>
                                                <Typography sx={styles.totalPriceSub}>
                                                    $ {getTotalPrice(orderList).price}
                                                </Typography>
                                            </>
                                        )}
                                    </ListItem>
                                    <ListItem sx={styles.totalPrice}>
                                        <Typography>Discount</Typography>
                                        {orderList.length > 0 && (
                                            <Typography sx={styles.totalPriceSub}>
                                                - ${(getTotalPrice(orderList).price * 0.1).toFixed(2)}
                                            </Typography>
                                        )}
                                    </ListItem>
                                    <ListItem sx={styles.totalPrice}>
                                        <Typography
                                            variant="h6"
                                            component="span"
                                        >
                                            Total:
                                        </Typography>
                                        {orderList.length > 0 && (
                                            <Typography
                                                sx={styles.totalPriceSub}
                                                variant="h6"
                                                component="span"
                                            >
                                                $ {(getTotalPrice(orderList).price * 0.9).toFixed(2)}
                                            </Typography>
                                        )}
                                    </ListItem>
                                </List>
                            </ListItem>
                        </List>
                    </Box>
                </div>
            </Container>
        </section>
    );
};

export default CartList;
