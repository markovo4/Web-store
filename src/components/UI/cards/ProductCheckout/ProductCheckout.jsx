import {Box, ListItem, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {styles} from "./styles.js";

const ProductCheckout = ({image, title, count, price, id}) => {
    return (
        <ListItem className={'flex items-center bg-white'}
                  sx={styles.listStyles}>
            <Box>
                <img src={image} alt={title} style={styles.image}/>
            </Box>

            <Box className={'flex flex-col items-start gap-3'}>
                <Typography variant='span' component={'span'} className={'w-[260px]'}>
                    {title}
                </Typography>

                <Typography variant="span" sx={styles.code}>
                    Code: {id}
                </Typography>
            </Box>
            <Typography variant='span' component={'span'} className={'w-[80px]'}>
                {count} Itm.
            </Typography>
            <Box sx={styles.priceContainer}>
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