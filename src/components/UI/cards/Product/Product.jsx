import PropTypes from "prop-types";
import {Card, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {styles} from "./styles.js";

const Product = ({title, body, image, price, rate, itemId}) => {
    return (

        <Link to={`/products/${itemId}`} style={styles.link}>
            <Card sx={styles.card}>
                <img src={image} alt={title} style={styles.image}/>
                <Typography variant="h6" sx={styles.title}>
                    {title}
                </Typography>
                <Typography variant="h6" sx={styles.price}>
                    ${price}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={styles.rating}>
                    Rating: {rate}
                </Typography>
            </Card>
        </Link>
    );
};

Product.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    itemId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default Product;
