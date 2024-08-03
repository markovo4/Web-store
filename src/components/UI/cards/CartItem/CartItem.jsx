import {Avatar, Box, Button, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import PropTypes from "prop-types";
import {styles} from "./styles.js";
import QuantityPicker from "../../inputs/QuantityPicker"; // Ensure correct spelling here
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useEffect, useState} from "react";
import {
    getFavProductList,
    removeFavProduct,
    removeProduct,
    setFavProductList
} from "../../../../redux/slices/localStorageSlice.js";
import {useDispatch, useSelector} from "react-redux";

const CartItem = ({
                      title,
                      description,
                      image,
                      price,
                      rating,
                      count,
                      id,
                      onQuantityChange,
                      amount
                  }) => {

    const dispatch = useDispatch();
    const {favouriteList} = useSelector((state) => state.localStorage);
    const {orderList} = useSelector(state => state.localStorage);
    const [addToFav, setAddToFav] = useState(favouriteList.some((product) => product.id === id));

    const handleDelete = () => {
        dispatch(removeProduct(id)); // Pass id directly
    }

    useEffect(() => {
        dispatch(getFavProductList());
    }, [dispatch, orderList]);

    const handleFavClick = () => {
        setAddToFav((prevAddToFav) => !prevAddToFav);
        if (!addToFav) {
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
                }
            ];
            dispatch(setFavProductList(updatedFavouriteList));
        } else {
            dispatch(removeFavProduct(id));
        }
    };

    const handleQuantityChange = (newAmount) => {
        onQuantityChange(id, newAmount); // Pass newAmount instead of newCount
    }

    return (
        <ListItem sx={styles.card}>
            <ListItemAvatar>
                <Avatar variant="square" sx={styles.productIcon}>
                    <img src={image} alt={title} style={styles.productImg}/>
                </Avatar>
            </ListItemAvatar>
            <Box>
                <ListItemText
                    sx={styles.listItemTextTitle}
                    primaryTypographyProps={{sx: styles.listItemTextTitle.primary}}
                    primary={title}
                />
                <div className={'flex gap-5'}>
                    <Button
                        sx={styles.button}
                        variant={"outlined"}
                        startIcon={<FavoriteBorderIcon color={addToFav ? 'error' : 'disabled'}/>}
                        onClick={handleFavClick}
                    >
                        Favourite
                    </Button>
                    <Button
                        sx={styles.button}
                        variant={"outlined"}
                        startIcon={<DeleteForeverIcon color={'disabled'}/>}
                        onClick={handleDelete}
                    >
                        Delete
                    </Button>
                </div>
            </Box>

            <Box sx={styles.priceCounter}>
                <ListItemText
                    sx={styles.listItemTextPrice}
                    primaryTypographyProps={{sx: styles.listItemTextPrice.primary}}
                    primary={`$${price}`}
                />
                <QuantityPicker
                    initialAmount={amount}
                    onChange={handleQuantityChange}
                />
            </Box>
        </ListItem>
    )
}

CartItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    onQuantityChange: PropTypes.func.isRequired,
    amount: PropTypes.number
}

export default CartItem;
