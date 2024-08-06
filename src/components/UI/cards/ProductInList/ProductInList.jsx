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

const ProductInList = ({title, image, price, rate, count, itemId, description}) => {
    const {orderList, productQuantity} = useSelector(state => state.localStorage);
    const dispatch = useDispatch();

    const [openModal, setOpenModal] = useState(false);

    const handleOpenCartSide = () => {
        setOpenModal(!openModal)
    };

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
    };

    return (
        <div style={styles.cardContainer}>
            <Card sx={styles.card}>
                <Link to={`/products/${itemId}`} style={styles.link}>
                    <div style={styles.groupedText}>
                        <img src={image} alt={title} style={styles.image}/>
                        <Typography variant="h6" sx={styles.title}>
                            {title}
                        </Typography>
                    </div>
                </Link>
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
