import PropTypes from "prop-types";
import {Box, Button, Card, IconButton, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {styles} from "./styles.js";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CommentIcon from '@mui/icons-material/Comment';
import {useEffect, useMemo, useState} from "react";
import {Rate} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {
    getFavProductList,
    getProductList,
    removeFavProduct,
    setFavProductList,
    setProductList
} from "../../../../redux/slices/localStorageSlice.js";
import CartSide from "../../../Main/CartSide/index.js";
import routerNames from "../../../../router/routes/routerNames.js";
import {useSnackbar} from "notistack";
import KrashComfy from "../../../../assets/icons/KrashComfy.jsx";
import CreditComfy from "../../../../assets/icons/CreditComfy.jsx";
import PetComfy from "../../../../assets/icons/PetComfy.jsx";
import AppleComfy from "../../../../assets/icons/AppleComfy.jsx";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import CustomTooltip from "../../PopOvers/CustomTooltip/index.js";

const ProductInList = ({title, image, price, rate, count, itemId, description, additionalComponent}) => {
    const {enqueueSnackbar} = useSnackbar();
    const {orderList, productQuantity, favouriteList} = useSelector(state => state.localStorage);
    const dispatch = useDispatch();

    const [openModal, setOpenModal] = useState(false);

    const [isInFav, setIsInFav] = useState(
        favouriteList.some((product) => product.id === itemId)
    );

    const handleOpenCartSide = () => {
        setOpenModal(!openModal)
    };

    const getShortTitle = (string) => {
        return string.length > 40 ? `${string.slice(0, 41)}...` : string;
    }

    const [isInCart, setIsInCart] = useState(orderList.some(product => product.id === itemId));

    const productIndex = useMemo(() => {
        return orderList.findIndex(product => product.id === itemId);
    }, [orderList, itemId]);


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
                {id: itemId, title, description, image, price, rating: rate, count},
            ];
            dispatch(setFavProductList(updatedFavList));
        } else {
            enqueueSnackbar('Item removed from Favourites!', {variant: 'info'});
            dispatch(removeFavProduct(itemId));
        }
    };

    useEffect(() => {
        setIsInCart(orderList.some(product => product.id === itemId));
        setIsInFav(favouriteList.some((product) => product.id === itemId))
    }, [orderList, itemId, favouriteList]);


    useEffect(() => {
        dispatch(getFavProductList());
        dispatch(getProductList());
    }, [dispatch]);

    const handleButtonClick = (id) => {
        let updatedList;
        if (isInCart) {
            updatedList = orderList.filter(product => product.id !== id);
        } else {
            updatedList = [
                ...orderList,
                {
                    title: title,
                    description: description,
                    image: image,
                    price: price,
                    rating: rate,
                    count: count,
                    id: itemId,
                    amount: productQuantity,
                }
            ];
        }
        dispatch(setProductList(updatedList));
        handleOpenCartSide();
        enqueueSnackbar('Item Added Successfully!', {variant: 'success'});
    };

    return (
        <div>
            <Card sx={additionalComponent ? styles.cardMin : styles.card}>
                <div style={styles.groupedText}>
                    <Link to={`/products/${itemId}`}>
                        <img src={image} alt={title} style={additionalComponent ? styles.imageMin : styles.image}/>
                    </Link>
                    {!additionalComponent && <IconButton
                        sx={styles.favButton}
                        onClick={handleFavClick}
                    >
                        {isInFav ? <FavoriteOutlinedIcon color='error' fontSize='default'/> :
                            <FavoriteBorderOutlinedIcon fontSize='default'/>}
                    </IconButton>}
                    <CustomTooltip title={title}>
                        <Typography variant="h6" sx={styles.title}>
                            {getShortTitle(title)}
                        </Typography>
                    </CustomTooltip>
                </div>


                <div style={styles.purchase}>
                    {!additionalComponent &&
                        <div className={'mb-3'}>
                            <div style={styles.wrapper}>
                                <Rate allowHalf disabled defaultValue={rate}/>
                                <Typography variant="h6" sx={styles.count}>
                                    <CommentIcon sx={styles.commentIcon}/> {count}
                                </Typography>
                            </div>

                            <div className={'flex flex-row items-center gap-3'}>
                                <KrashComfy/>
                                <CreditComfy/>
                                <PetComfy/>
                                <AppleComfy/>
                            </div>
                        </div>}

                    <div style={styles.wrapper}>
                        <Box className={'flex flex-col'}>
                            <Typography variant="h6" sx={styles.priceOriginal}>
                                <s style={styles.priceStrike}>$ {price}</s>
                                <span style={styles.discount}>-10%</span>
                            </Typography>
                            <Typography variant="h6" sx={styles.price}>
                                $ {(price * 0.9).toFixed(2)}
                            </Typography>
                        </Box>

                        {isInCart ? (

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
                                rating={rate}
                                count={count}
                                id={itemId}
                                title={title}
                                open={openModal}
                                onClose={handleOpenCartSide}
                            />

                        ) : (
                            <Button sx={styles.button} variant="contained" onClick={handleButtonClick}>
                                <ShoppingCartIcon fontSize="medium"/>
                            </Button>

                        )}
                    </div>
                </div>
            </Card>
        </div>
    );
};

ProductInList.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    itemId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    description: PropTypes.string.isRequired,
    additionalComponent: PropTypes.bool
};

export default ProductInList;
