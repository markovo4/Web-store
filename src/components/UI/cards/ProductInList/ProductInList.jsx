import PropTypes from "prop-types";
import {Button, Card, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {styles} from "./styles.js";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CommentIcon from '@mui/icons-material/Comment';
import {useEffect, useMemo, useState} from "react";
import {Rate} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getProductList, setProductList} from "../../../../redux/slices/localStorageSlice.js";
import CartSide from "../../../Main/CartSide/index.js";
import routerNames from "../../../../router/routes/routerNames.js";
import TitlePopOver from "../../popOvers/TitlePopOver/index.js";
import {useSnackbar} from "notistack";

const ProductInList = ({title, image, price, rate, count, itemId, description}) => {
    const {enqueueSnackbar} = useSnackbar();
    const {orderList, productQuantity} = useSelector(state => state.localStorage);
    const dispatch = useDispatch();

    const [openModal, setOpenModal] = useState(false);

    const handleOpenCartSide = () => {
        setOpenModal(!openModal)
    };

    const handleClickVariant = (variant) => () => {
        enqueueSnackbar('Item Added Successfully!', {variant});
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

    useEffect(() => {
        setIsInCart(orderList.some(product => product.id === itemId));
    }, [orderList, itemId]);

    useEffect(() => {
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
        handleClickVariant('success')()
    };

    return (
        <div style={styles.cardContainer}>
            <Card sx={styles.card}>
                <div style={styles.groupedText}>
                    <Link to={`/products/${itemId}`} style={styles.link}>
                        <img src={image} alt={title} style={styles.image}/>
                    </Link>
                    <Typography variant="h6" sx={styles.title}>
                        <TitlePopOver
                            entireTitle={title}
                            title={getShortTitle(title)}
                        />
                    </Typography>
                </div>

                <div style={styles.purchase}>
                    <div style={styles.wrapper}>
                        <Rate allowHalf disabled defaultValue={rate}/>
                        <Typography variant="h6" sx={styles.count}>
                            <CommentIcon/> {count}
                        </Typography>
                    </div>

                    <div style={styles.wrapper}>
                        <Typography variant="h6" sx={styles.price}>
                            $ {price}
                        </Typography>
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
};

export default ProductInList;
