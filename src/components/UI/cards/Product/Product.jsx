import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Box, Button, Container, List, ListItem, Typography} from "@mui/material";
import {Rate} from "antd";
import CommentIcon from '@mui/icons-material/Comment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {setRecentlyViewed} from "../../../../redux/slices/localStorageSlice.js";
import routerNames from "../../../../router/routes/routerNames.js";
import CartSide from "../../../Main/CartSide/index.js";
import KrashComfy from "../../../../assets/icons/KrashComfy.jsx";
import CreditComfy from "../../../../assets/icons/CreditComfy.jsx";
import PetComfy from "../../../../assets/icons/PetComfy.jsx";
import AppleComfy from "../../../../assets/icons/AppleComfy.jsx";
import SimilarItems from "../../../Main/SimilarItems/index.js";
import useFavourite from "../../../../utils/hooks/useFavourite.js";
import useCart from "../../../../utils/hooks/useCart.js";
import {styles} from "./style.js";
import useQuantity from "../../../../utils/hooks/useQuantity.js";

const Product = ({
                     id,
                     title,
                     description,
                     image,
                     price,
                     rating,
                     count,
                     category,
                 }) => {
    const dispatch = useDispatch();

    const [openModal, setOpenModal] = useState(false);

    const {isInFav, handleFavClick} = useFavourite(id, {
        title,
        description,
        image,
        price,
        rating,
        count,
        id,
    });

    const {isInCart, handleButtonClick} = useCart({
        title,
        image,
        price,
        rating,
        count,
        id,
        description,
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        dispatch(setRecentlyViewed({
            id,
            title,
            description,
            image,
            price,
            rating,
            count,
        }));
    }, [dispatch, id, title, description, image, price, rating, count]);

    const handleOpenCartSide = () => {
        setOpenModal(!openModal);
    };

    const handleAddProductClick = () => {
        handleButtonClick();
        handleOpenCartSide();
    };

    const handleQuantityChange = useQuantity(id, 1);

    return (
        <React.Fragment>
            <Container sx={{display: "flex", flexDirection: "row"}}>
                <Box sx={styles.imageWrapper}>
                    <img alt={title} src={image} style={styles.image}/>
                </Box>
                <Box sx={styles.info}>
                    <Box sx={styles.wrapper}>
                        <Typography variant="h3" component="h3" sx={styles.price}>
                            {title}
                        </Typography>
                        <Box className="flex flex-row items-center justify-between">
                            <Box style={styles.rating}>
                                <Rate allowHalf disabled defaultValue={rating} style={styles.ratingColor}/>
                                <Typography variant="h6" sx={styles.count}>
                                    <CommentIcon fontSize="small"/> {count}
                                </Typography>
                            </Box>
                            <Typography variant="span" sx={styles.code}>
                                Code: {id}
                            </Typography>
                        </Box>
                        <Box className="flex flex-row items-center gap-3">
                            <List className="flex justify-between gap-3">
                                <ListItem sx={styles.underTitleIconsContainer}>
                                    <KrashComfy/>
                                    <Typography variant="span" sx={styles.underTitleIconsText}>
                                        Crash
                                    </Typography>
                                </ListItem>
                                <ListItem sx={styles.underTitleIconsContainer}>
                                    <CreditComfy/>
                                    <Typography variant="span" sx={styles.underTitleIconsText}>
                                        PRIVAT-Bank
                                    </Typography>
                                </ListItem>
                                <ListItem sx={styles.underTitleIconsContainer}>
                                    <PetComfy/>
                                    <Typography variant="span" sx={styles.underTitleIconsText}>
                                        MONO-Bank
                                    </Typography>
                                </ListItem>
                                <ListItem sx={styles.underTitleIconsContainer}>
                                    <AppleComfy/>
                                    <Typography variant="span" sx={styles.underTitleIconsText}>
                                        ALFA-Bank
                                    </Typography>
                                </ListItem>
                            </List>
                        </Box>
                    </Box>
                    <Box sx={styles.wrapperPurchase}>
                        <Box className="flex flex-col">
                            <Typography variant="h6" sx={styles.priceOriginal}>
                                <s style={styles.priceStrike}>$ {price}</s>
                                <span style={styles.discount}>-10%</span>
                            </Typography>
                            <Typography variant="h6" sx={styles.price}>
                                $ {(price * 0.9).toFixed(2)}
                            </Typography>
                        </Box>
                        <div style={styles.buttonGroup}>
                            {!isInCart ? (
                                <Button
                                    id={id}
                                    sx={styles.button}
                                    variant="contained"
                                    onClick={handleAddProductClick}
                                    startIcon={<ShoppingCartIcon fontSize="medium"/>}
                                >
                                    Buy
                                </Button>
                            ) : (
                                <CartSide
                                    button={
                                        <Link to={routerNames.pageCart}>
                                            <Button sx={styles.button} variant="outlined">
                                                <AddShoppingCartIcon fontSize="medium" color="success"/>
                                            </Button>
                                        </Link>
                                    }
                                    onQuantityChange={handleQuantityChange}
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
            <SimilarItems category={category}/>
        </React.Fragment>
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
    category: PropTypes.string,
};

export default Product;
