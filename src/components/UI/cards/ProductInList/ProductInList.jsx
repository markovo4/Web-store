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

const ProductInList = ({title, image, price, rate, count, itemId, description}) => {
    const {orderList} = useSelector(state => state.localStorage);
    const [click, setClick] = useState(orderList.some(product => product.id === itemId));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductList());
    }, [dispatch]);

    const handleButtonClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setClick(!click);

        let updatedList;
        if (click) {
            // Remove the item from the order list if it is already in the list
            updatedList = orderList.filter(product => product.id !== itemId);
        } else {
            // Add the item to the order list
            updatedList = [
                ...orderList,
                {
                    title: title,
                    description: description,
                    image: image,
                    price: price,
                    rating: rate,
                    count: count,
                    id: itemId
                }
            ];
        }

        dispatch(setProductList(updatedList));
    };

    return (
        <Link to={`/products/${itemId}`} style={styles.link}>
            <div style={styles.cardContainer}>
                <Card sx={styles.card}>
                    <div style={styles.groupedText}>
                        <img src={image} alt={title} style={styles.image}/>
                        <Typography variant="h6" sx={styles.title}>
                            {title}
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
                            {click ? (
                                <Button sx={styles.button} variant={'outlined'} onClick={handleButtonClick}>
                                    <AddShoppingCartIcon fontSize={'medium'} color={"success"}/>
                                </Button>
                            ) : (
                                <Button sx={styles.button} variant={'contained'} onClick={handleButtonClick}>
                                    <ShoppingCartIcon fontSize={'medium'}/>
                                </Button>
                            )}
                        </div>
                    </div>
                </Card>
            </div>
        </Link>
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
