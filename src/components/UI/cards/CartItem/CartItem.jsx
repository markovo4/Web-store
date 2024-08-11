import {Avatar, Box, Button, ListItem, ListItemAvatar, ListItemText, Typography,} from "@mui/material";
import PropTypes from "prop-types";
import {styles} from "./styles.js";
import QuantityPicker from "../../inputs/QuantityPicker";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {useEffect, useState} from "react";
import {
    getFavProductList,
    removeFavProduct,
    removeProduct,
    setFavProductList,
} from "../../../../redux/slices/localStorageSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {useSnackbar} from "notistack";
import ModalDeleteProduct from "../../../ModalsProduct/ModalDeleteProduct/index.js";
import CheckIcon from '@mui/icons-material/Check';
import {Link} from "react-router-dom";

const CartItem = ({
                      title,
                      description,
                      image,
                      price,
                      rating,
                      count,
                      id,
                      onQuantityChange,
                      amount,
                  }) => {
    const {enqueueSnackbar} = useSnackbar();
    const dispatch = useDispatch();
    const {favouriteList} = useSelector((state) => state.localStorage);

    const [openModal, setOpenModal] = useState(false);

    const handleOpenCartSide = () => {
        setOpenModal(!openModal);
    };

    const [isInFav, setIsInFav] = useState(false);

    useEffect(() => {
        setIsInFav(favouriteList.some((product) => product.id === id));
    }, [favouriteList, id]);

    useEffect(() => {
        dispatch(getFavProductList());
    }, [dispatch]);

    const handleDelete = () => {
        dispatch(removeProduct(id));
        enqueueSnackbar("Item was removed from the Cart!", {variant: "error"});
        handleOpenCartSide();
    };

    const handleFavClick = () => {
        if (!isInFav) {
            enqueueSnackbar("Item Added to Favourites!", {variant: "success"});
            const updatedFavouriteList = [
                ...favouriteList,
                {
                    id,
                    title,
                    description,
                    image,
                    price,
                    rating,
                    count,
                },
            ];
            dispatch(setFavProductList(updatedFavouriteList));
        } else {
            dispatch(removeFavProduct(id));
            enqueueSnackbar("Item removed from Favourites!", {variant: "info"});
        }
        setIsInFav(!isInFav);
    };

    const handleQuantityChange = (newAmount) => {
        onQuantityChange(id, newAmount);
    };

    return (
        <ListItem sx={styles.card}>
            <ListItemAvatar>
                <Avatar variant="square" sx={styles.productIcon}>
                    <img src={image} alt={title} style={styles.productImg}/>
                </Avatar>
            </ListItemAvatar>
            <Box>
                <Typography sx={styles.availabilityText}>
                    <CheckIcon fontSize={'small'}/>Available for the pickup today
                </Typography>
                <Link to={`/products/${id}`}>
                    <ListItemText
                        sx={styles.listItemTextTitle}
                        primaryTypographyProps={{sx: styles.listItemTextTitle.primary}}
                        primary={title}
                    />
                </Link>

                <div className={"flex gap-5"}>
                    <Button
                        sx={styles.button}
                        variant="outlined"
                        startIcon={
                            <FavoriteBorderIcon color={isInFav ? "error" : "disabled"}/>
                        }
                        onClick={handleFavClick}
                    >
                        Favourite
                    </Button>
                    <ModalDeleteProduct
                        button={
                            <Button
                                sx={styles.button}
                                variant="outlined"
                                startIcon={<DeleteForeverIcon color="disabled"/>}
                            >
                                Delete
                            </Button>
                        }
                        image={image}
                        price={price}
                        rating={rating}
                        count={count}
                        id={id}
                        title={title}
                        open={openModal}
                        onClose={handleOpenCartSide}
                        onDelete={handleDelete}
                    />
                </div>
            </Box>

            <Box sx={styles.priceCounter}>
                <ListItemText
                    sx={styles.listItemTextPrice}
                    primaryTypographyProps={{sx: styles.listItemTextPrice.primary}}
                    primary={`$${price}`}
                />
                {onQuantityChange && (
                    <QuantityPicker initialAmount={amount} onChange={handleQuantityChange}/>
                )}
            </Box>
        </ListItem>
    );
};

CartItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    onQuantityChange: PropTypes.func,
    amount: PropTypes.number,
};

export default CartItem;
