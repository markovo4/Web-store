import {Box, ListItem, ListItemButton, Typography} from "@mui/material";
import {styles} from "./styles.js";
import PropTypes from "prop-types";
import {useState} from "react";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import stylesSCSS from "../../OrderReview/stylesSCSS.module.scss";

const ProductsList = ({id, date, order}) => {
    const [showMore, setShowMore] = useState(false);
    const handleClick = () => {
        setShowMore(!showMore);
    };

    return (
        <Box>
            <ListItemButton sx={styles.infoGroup} onClick={handleClick}>
                <Typography variant="h5" component="span" sx={styles.infoText}>
                    {id}
                </Typography>
                <Typography variant="h6" component="span" sx={styles.infoText}>
                    {date}
                </Typography>
                <Typography variant="h6" component="span" sx={styles.infoText}>
                    {showMore ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                </Typography>
            </ListItemButton>

            {showMore && (
                <ListItem sx={styles.productItem} className="flex flex-col">
                    {order && order.map((product) => (
                        <Box key={product.id} sx={styles.productBox}>
                            <Box sx={styles.productDetails}>
                                <img src={product.image} alt={product.title} className={stylesSCSS.image}/>
                                <Typography sx={styles.productTitle} variant="h6">
                                    {product.title}
                                </Typography>
                                <Box sx={styles.priceAmountWrapper}>
                                    <Typography sx={styles.productAmount} variant="h6">
                                        {product.amount} Itm.
                                    </Typography>
                                    <Typography sx={styles.productPrice} variant="h6">
                                        $ {(product.price * 0.9).toFixed(2)}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </ListItem>
            )}
        </Box>
    );
};

ProductsList.propTypes = {
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    order: PropTypes.array.isRequired,
};

export default ProductsList;
