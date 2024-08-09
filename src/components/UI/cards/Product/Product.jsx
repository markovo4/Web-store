import {Box, Button, Container, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {styles} from "./style.js";
import {Rate} from "antd";
import CommentIcon from '@mui/icons-material/Comment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    getFavProductList,
    getProductList,
    removeFavProduct,
    setFavProductList,
    setProductList,
} from "../../../../redux/slices/localStorageSlice.js";
import {Link} from "react-router-dom";
import routerNames from "../../../../router/routes/routerNames.js";
import CartSide from "../../../Main/CartSide/index.js";
import {useSnackbar} from "notistack";

const Product = ({
                     id,
                     title,
                     description,
                     image,
                     price,
                     rating,
                     count,
                 }) => {
    const {enqueueSnackbar} = useSnackbar();
    const dispatch = useDispatch();
    const {orderList} = useSelector((state) => state.localStorage);
    const {favouriteList} = useSelector((state) => state.localStorage);


    const [isInCart, setIsInCart] = useState(orderList.some(product => product.id === id));

    const [isInFav, setIsInFav] = useState(
        favouriteList.some((product) => product.id === id)
    );

    const [openModal, setOpenModal] = useState(false);

    const handleOpenCartSide = () => {
        setOpenModal(!openModal)
    };

    useEffect(() => {
        setIsInCart(orderList.some(product => product.id === id));
        setIsInFav(favouriteList.some((product) => product.id === id))
    }, [orderList, id, favouriteList]);


    useEffect(() => {
        dispatch(getFavProductList());
        dispatch(getProductList());
    }, [dispatch]);

    const handleCartClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setIsInCart(!isInCart);

        let updatedOrderList;
        if (isInCart) {

            updatedOrderList = orderList.filter((product) => product.id !== id);
        } else {

            updatedOrderList = [
                ...orderList,
                {id, title, description, image, price, rating, count, amount: 1},
            ];
        }
        dispatch(setProductList(updatedOrderList));
        handleOpenCartSide();
        enqueueSnackbar('Item Added Successfully!', {variant: 'success'});
    };

    const productIndex = useMemo(() => {
        return orderList.findIndex(product => product.id === id);
    }, [orderList, id]);


    const handleQuantityCount = (id, newAmount) => {
        if (productIndex !== -1) {
            const updatedProduct = {
                ...orderList[productIndex],
                amount: newAmount
            }

            const updatedList = [
                ...orderList.slice(0, productIndex),
                updatedProduct,
                ...orderList.slice(productIndex + 1)
            ]
            dispatch(setProductList(updatedList))
        }
    }

    const handleFavClick = () => {
        setIsInFav((prevAddToFav) => !prevAddToFav);

        if (!isInFav) {
            enqueueSnackbar('Item Added to Favourites!', {variant: 'success'});
            const updatedFavList = [
                ...favouriteList,
                {id, title, description, image, price, rating, count},
            ];
            dispatch(setFavProductList(updatedFavList));
        } else {

            dispatch(removeFavProduct(id));
        }

    };

    return (
        <Container sx={{display: "flex", flexDirection: "row"}}>
            <Box sx={styles.imageWrapper}>
                <img alt={title} src={image} style={styles.image}/>
            </Box>
            <Box sx={styles.info}>
                <Box sx={styles.wrapper}>
                    <Typography variant="h3" component="h3" sx={styles.price}>
                        {title}
                    </Typography>
                    <div style={styles.rating}>
                        <Rate allowHalf disabled defaultValue={rating}/>
                        <Typography variant="h6" sx={styles.count}>
                            <CommentIcon/> {count}
                        </Typography>
                    </div>
                </Box>

                <Box sx={styles.wrapperPurchase}>
                    <Typography variant="h6" sx={styles.price}>
                        ${price}
                    </Typography>
                    <div style={styles.buttonGroup}>
                        {!isInCart ? (
                            <Button
                                id={id}
                                sx={styles.button}
                                variant="contained"
                                onClick={handleCartClick}
                            >
                                <ShoppingCartIcon fontSize="medium"/>
                            </Button>


                        ) : (
                            <CartSide
                                button={<Link to={routerNames.pageCart}>
                                    <Button sx={styles.button} variant='outlined'>
                                        <AddShoppingCartIcon fontSize='medium' color="success"/>
                                    </Button>
                                </Link>
                                }
                                onQuantityChange={handleQuantityCount}
                                image={image}
                                price={price}
                                rating={rating}
                                count={count}
                                id={id}
                                title={title}
                                open={openModal}
                                onClose={handleOpenCartSide}
                            />
                        )}


                        <Button
                            id={id}
                            sx={styles.button}
                            variant="outlined"
                            onClick={handleFavClick}
                        >
                            {isInFav ? (
                                <FavoriteIcon color="error"/>
                            ) : (
                                <FavoriteBorderIcon color="success"/>
                            )}
                        </Button>
                    </div>
                </Box>
                <Box sx={styles.wrapperDescription}>
                    <Typography variant="h5">Description</Typography>
                    <Typography variant="h6">{description}</Typography>
                </Box>
            </Box>
        </Container>
    );
};

Product.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
};

export default Product;
