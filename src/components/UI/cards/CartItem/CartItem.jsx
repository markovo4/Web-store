import {Avatar, Box, Button, ListItem, ListItemAvatar, ListItemText, Typography,} from "@mui/material";
import PropTypes from "prop-types";
import {styles} from "./styles.js";
import QuantityPicker from "../../inputs/QuantityPicker";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {useState} from "react";
import {removeProduct,} from "../../../../redux/slices/localStorageSlice.js";
import {useDispatch} from "react-redux";
import {useSnackbar} from "notistack";
import ModalDeleteProduct from "../../../ModalsProduct/ModalDeleteProduct/index.js";
import CheckIcon from '@mui/icons-material/Check';
import {Link} from "react-router-dom";
import useFavourite from "../../../../utils/hooks/useFavourite.js";

import stylesSCSS from './stylesSCSS.module.scss';
import {Image} from "antd";

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

    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();
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

    const handleOpenModal = () => {
        setOpenModal(!openModal);
    };

    const handleDelete = () => {
        dispatch(removeProduct(id));
        enqueueSnackbar("Item was removed from the Cart!", {variant: "error"});
        handleOpenModal();
    };

    const handleQuantityChange = (newAmount) => {
        onQuantityChange(id, newAmount);
    };

    return (
        <ListItem sx={styles.card}>
            <ListItemAvatar>
                <Avatar variant="square" sx={styles.productIcon}>
                    <Image src={image} alt={title} className={stylesSCSS.productImg}/>
                </Avatar>
            </ListItemAvatar>
            <Box sx={styles.infoContainer}>
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
                <Typography variant="span" sx={styles.code}>
                    Code: {id}
                </Typography>
                <Box sx={styles.buttonGroup}>
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
                        onClose={handleOpenModal}
                        onDelete={handleDelete}
                    />
                </Box>
            </Box>
            <Box sx={styles.priceCounter}>
                <Box sx={styles.priceInfoContainer}>
                    <Typography variant="h6" sx={styles.priceOriginal}>
                        <s className={stylesSCSS.priceStrike}>$ {price}</s>
                        <Typography sx={styles.discount}>-10%</Typography>
                    </Typography>
                    <Typography variant="h6" sx={styles.price}>
                        $ {(price * 0.9).toFixed(2)}
                    </Typography>
                </Box>
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
