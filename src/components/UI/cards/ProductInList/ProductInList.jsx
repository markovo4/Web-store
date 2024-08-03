import PropTypes from "prop-types";
import {Button, Card, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {styles} from "./styles.js";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CommentIcon from '@mui/icons-material/Comment';
import {useEffect, useState} from "react";
import {Rate} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getProductList, setProductList} from "../../../../redux/slices/localStorageSlice.js";
import routerNames from "../../../../router/routes/routerNames.js";

const ProductInList = ({title, image, price, rate, count, itemId, description}) => {
    const {orderList} = useSelector(state => state.localStorage);
    const dispatch = useDispatch();

    // Synchronize local state with Redux state
    const [isInCart, setIsInCart] = useState(orderList.some(product => product.id === itemId));

    useEffect(() => {
        setIsInCart(orderList.some(product => product.id === itemId));
    }, [orderList, itemId]);

    useEffect(() => {
        dispatch(getProductList());
    }, [dispatch]);

    const handleButtonClick = () => {
        let updatedList;
        if (isInCart) {
            updatedList = orderList.filter(product => product.id !== itemId);
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
                    amount: 1,
                }
            ];
        }
        dispatch(setProductList(updatedList));
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
                            <Link to={routerNames.pageCart}>
                                <Button sx={styles.button} variant={'outlined'} onClick={handleButtonClick}>
                                    <AddShoppingCartIcon fontSize={'medium'} color={"success"}/>
                                </Button>
                            </Link>
                        ) : (
                            <Button sx={styles.button} variant={'contained'} onClick={handleButtonClick}>
                                <ShoppingCartIcon fontSize={'medium'}/>
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
