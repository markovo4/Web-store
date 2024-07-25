import {Box, Button, Container, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {styles} from "./style.js";
import {Rate} from "antd";
import CommentIcon from '@mui/icons-material/Comment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useState} from "react";

const Product = ({
                     id,
                     title,
                     description,
                     image,
                     price,
                     rating,
                     count
                 }) => {

    const [addToCart, setAddToCart] = useState(false);
    const [addToFav, setAddToFav] = useState(false);
    const handleCartClick = () => {
        setAddToCart(!addToCart)
    };
    const handleFavClick = () => {
        setAddToFav(!addToFav)
    };
    return (
        <Container sx={{display: "flex", flexDirection: 'row'}}>
            <Box sx={styles.imageWrapper}>
                <img alt={title} src={image} style={styles.image}/>
            </Box>
            <Box sx={styles.info}>

                <Box sx={styles.wrapper}>
                    <div>
                        <Typography variant="h3" component={'h3'} sx={styles.price}>
                            {title}
                        </Typography>
                    </div>

                    <div style={styles.rating}>
                        <Rate allowHalf disabled defaultValue={rating}/>
                        <Typography variant="h6" sx={styles.count}>
                            <CommentIcon/> {count}
                        </Typography>
                    </div>
                </Box>

                <Box sx={styles.wrapperPurchase}>
                    <Typography variant="h6" sx={styles.price}>
                        $ {price}
                    </Typography>
                    <div style={styles.buttonGroup}>
                        {!addToCart ?
                            (<Button sx={styles.button} variant={'contained'} onClick={handleCartClick}>
                                    <ShoppingCartIcon fontSize={'medium'}/>
                                </Button>
                            ) : (
                                <Button sx={styles.button} variant={'outlined'} onClick={handleCartClick}>
                                    <AddShoppingCartIcon fontSize={'medium'} color={"success"}/>
                                </Button>)}
                        <Button sx={styles.button} variant={'outlined'} onClick={handleFavClick}>
                            {!addToFav ? (<FavoriteBorderIcon color={'success'}/>
                            ) : (
                                <FavoriteIcon color={'error'}/>)}
                        </Button>
                    </div>
                </Box>
                <Box sx={styles.wrapperDescription}>
                    <Typography variant="h5">
                        Description
                    </Typography>
                    <Typography variant="h6">
                        {description}
                    </Typography>
                </Box>
            </Box>
        </Container>
    )
}
Product.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired
}


export default Product;