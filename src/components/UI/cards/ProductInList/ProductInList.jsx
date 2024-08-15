import PropTypes from "prop-types";
import {Box, Button, Card, IconButton, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Rate} from "antd";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CommentIcon from '@mui/icons-material/Comment';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

import {styles} from "./styles.js";
import {setProductList} from "../../../../redux/slices/localStorageSlice.js";
import CartSide from "../../../Main/CartSide/index.js";
import routerNames from "../../../../router/routes/routerNames.js";
import KrashComfy from "../../../../assets/icons/KrashComfy.jsx";
import CreditComfy from "../../../../assets/icons/CreditComfy.jsx";
import PetComfy from "../../../../assets/icons/PetComfy.jsx";
import AppleComfy from "../../../../assets/icons/AppleComfy.jsx";
import CustomTooltip from "../../PopOvers/CustomTooltip/index.js";
import useFavourite from "../../../../utils/hooks/useFavourite.js";
import useCart from "../../../../utils/hooks/useCart.js";

const ProductInList = ({
                           title,
                           image,
                           price,
                           rate,
                           count,
                           itemId,
                           description,
                           additionalComponent
                       }) => {
    const {isInFav, handleFavClick} = useFavourite(itemId, {
        title,
        description,
        image,
        price,
        rate,
        count,
        id: itemId,
    });

    const {orderList} = useSelector((state) => state.localStorage);
    const dispatch = useDispatch();
    const {isInCart, handleButtonClick} = useCart({
        title,
        image,
        price,
        rating: rate,
        count,
        id: itemId,
        description,
    });

    const [openModal, setOpenModal] = useState(false);

    const handleOpenCartSide = () => {
        setOpenModal(!openModal);
    };

    const productIndex = useMemo(
        () => orderList.findIndex((product) => product.id === itemId),
        [orderList, itemId]
    );

    const handleQuantityCount = (id, newAmount) => {
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

    const getShortTitle = (string) => {
        return string.length > 40 ? `${string.slice(0, 41)}...` : string;
    };

    const handleAddProductClick = () => {
        handleButtonClick();
        handleOpenCartSide();
    };

    return (
        <div>
            <Card sx={additionalComponent ? styles.cardMin : styles.card}>
                <div style={styles.groupedText}>
                    <Link to={`/products/${itemId}`}>
                        <img
                            src={image}
                            alt={title}
                            style={additionalComponent ? styles.imageMin : styles.image}
                        />
                    </Link>
                    {!additionalComponent && (
                        <IconButton sx={styles.favButton} onClick={handleFavClick}>
                            {isInFav ? (
                                <FavoriteOutlinedIcon color="error" fontSize="default"/>
                            ) : (
                                <FavoriteBorderOutlinedIcon fontSize="default"/>
                            )}
                        </IconButton>
                    )}
                    <CustomTooltip title={title}>
                        <Typography variant="h6" sx={styles.title}>
                            {getShortTitle(title)}
                        </Typography>
                    </CustomTooltip>
                </div>

                <div style={styles.purchase}>
                    {!additionalComponent && (
                        <div className="mb-3">
                            <div style={styles.wrapper}>
                                <Rate allowHalf disabled defaultValue={rate}/>
                                <Typography variant="h6" sx={styles.count}>
                                    <CommentIcon sx={styles.commentIcon}/> {count}
                                </Typography>
                            </div>
                            <div className="flex flex-row items-center gap-3">
                                <KrashComfy/>
                                <CreditComfy/>
                                <PetComfy/>
                                <AppleComfy/>
                            </div>
                        </div>
                    )}

                    <div style={styles.wrapper}>
                        <Box className="flex flex-col">
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
                                button={
                                    <Link to={routerNames.pageCart}>
                                        <Button sx={styles.button} variant="outlined">
                                            <AddShoppingCartIcon fontSize="medium" color="success"/>
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
                            <Button
                                sx={styles.button}
                                variant="contained"
                                onClick={handleAddProductClick}
                            >
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
    additionalComponent: PropTypes.bool,
};

export default ProductInList;
