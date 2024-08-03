import {Box, Button, Container, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {styles} from "./style.js";
import {Rate} from "antd";
import CommentIcon from '@mui/icons-material/Comment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    getFavProductList,
    getProductList,
    removeFavProduct,
    setFavProductList,
    setProductList
} from "../../../../redux/slices/localStorageSlice.js";

const Product = ({
                     id,
                     title,
                     description,
                     image,
                     price,
                     rating,
                     count
                 }) => {
    const dispatch = useDispatch();

    const {orderList} = useSelector(state => state.localStorage);
    const {favouriteList} = useSelector((state) => state.localStorage);

    const [addToCart, setAddToCart] = useState(orderList.some(product => product.id === id));
    const [addToFav, setAddToFav] = useState(favouriteList.some(product => product.id === id));

    useEffect(() => {
        dispatch(getFavProductList());
        dispatch(getProductList());
    }, [dispatch]);

    const handleCartClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setAddToCart(!addToCart);

        let updatedOrderList;
        if (addToCart) {
            // Remove the item from the order list if it's already in it
            updatedOrderList = orderList.filter(product => product.id !== id);
        } else {
            // Add the item to the order list
            updatedOrderList = [...orderList, {id, title, description, image, price, rating, count, amount: 1}];
        }
        dispatch(setProductList(updatedOrderList));
    };

    const handleFavClick = () => {
        setAddToFav((prevAddToFav) => !prevAddToFav);

        if (!addToFav) {
            // Add the item to the favorite list
            const updatedFavList = [...favouriteList, {id, title, description, image, price, rating, count}];
            dispatch(setFavProductList(updatedFavList));
        } else {
            // Remove the item from the favorite list
            dispatch(removeFavProduct(id));
        }
    };

    return (
        <Container sx={{display: "flex", flexDirection: 'row'}}>
            <Box sx={styles.imageWrapper}>
                <img alt={title} src={image} style={styles.image}/>
            </Box>
            <Box sx={styles.info}>
                <Box sx={styles.wrapper}>
                    <div>
                        <Typography variant="h3" component={'h3'} sx={styles.price}>
                            {title}
                        </Typography>
                    </div>

                    <div style={styles.rating}>
                        <Rate allowHalf disabled defaultValue={rating}/>
                        <Typography variant="h6" sx={styles.count}>
                            <CommentIcon/> {count}
                        </Typography>
                    </div>
                </Box>

                <Box sx={styles.wrapperPurchase}>
                    <Typography variant="h6" sx={styles.price}>
                        $ {price}
                    </Typography>
                    <div style={styles.buttonGroup}>
                        {!addToCart ? (
                            <Button id={id} sx={styles.button} variant={'contained'} onClick={handleCartClick}>
                                <ShoppingCartIcon fontSize={'medium'}/>
                            </Button>
                        ) : (
                            <Button id={id} sx={styles.button} variant={'outlined'} onClick={handleCartClick}>
                                <AddShoppingCartIcon fontSize={'medium'} color={"success"}/>
                            </Button>
                        )}
                        <Button id={id} sx={styles.button} variant={'outlined'} onClick={handleFavClick}>
                            {!addToFav ? (
                                <FavoriteBorderIcon color={'success'}/>
                            ) : (
                                <FavoriteIcon color={'error'}/>
                            )}
                        </Button>
                    </div>
                </Box>
                <Box sx={styles.wrapperDescription}>
                    <Typography variant="h5">
                        Description
                    </Typography>
                    <Typography variant="h6">
                        {description}
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired
};

export default Product;
