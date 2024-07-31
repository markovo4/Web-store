import {ListItem, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {styles} from "./styles.js";

const ProductCheckout = ({image, title, count, price}) => {
    return (
        <ListItem className={'flex items-center bg-white gap-x-20'}
                  sx={styles.listStyles}>
            <img src={image} alt={title} className={'w-[50px] h-[60px]'}/>
            <Typography variant={'span'} component={'span'} className={'w-[300px]'}>
                {title}
            </Typography>
            <Typography variant={'span'} component={'span'} className={'w-[80px]'}>
                {count} Itm.
            </Typography>
            <Typography className={'w-[100px]'} sx={styles.price}>
                $ {price}
            </Typography>
        </ListItem>
    )
}

ProductCheckout.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
}

export default ProductCheckout;