import {Box, ListItem, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {styles} from "./styles.js";
import stylesSCSS from './stylesSCSS.module.scss';

const ProductCheckout = ({image, title, count, price, id}) => {
    return (
        <ListItem
            sx={styles.listStyles}>
            <Box>
                <img src={image} alt={title} className={stylesSCSS.img}/>
            </Box>

            <Box sx={styles.productInfo}>
                <Typography variant='span' component={'span'} sx={styles.title}>
                    {title}
                </Typography>

                <Typography variant="span" sx={styles.code}>
                    Code: {id}
                </Typography>
            </Box>
            <Typography variant='span' component={'span'} sx={styles.itemCount}>
                {count} Itm.
            </Typography>
            <Box sx={styles.priceContainer}>
                <Typography variant='span' component={'span'} sx={styles.itemCountMobile}>
                    {count} Itm.
                </Typography>
                <Box sx={styles.priceDiscount}>
                    <Typography
                        sx={styles.totalPriceOriginalMain}
                        variant="h6"
                        component={"span"}
                    >
                        <s style={styles.priceStrike}>$ {price}</s>

                    </Typography>
                    <Typography className={'w-[100px]'} sx={styles.price}>
                        $ {(price * 0.9).toFixed(2)}
                    </Typography>
                </Box>

            </Box>

        </ListItem>
    )
}

ProductCheckout.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
}

export default ProductCheckout;