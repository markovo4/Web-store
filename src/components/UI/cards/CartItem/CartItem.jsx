import {Avatar, Box, Button, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import PropTypes from "prop-types";
import {styles} from "./styles.js";
import QuantityPickier from "../../inputs/QuantityPicker";

const CartItem = ({
                      title,
                      image,
                      price,
                      id
                  }) => {
    return (
        <ListItem
            sx={styles.card}
        >
            <ListItemAvatar>
                <Avatar variant="square" sx={styles.productIcon}>
                    <img src={image} alt={title} style={styles.productImg}/>
                </Avatar>
            </ListItemAvatar>
            <Box>
                <ListItemText
                    sx={styles.listItemTextTitle}
                    primaryTypographyProps={{sx: styles.listItemTextTitle.primary}}
                    primary={title}
                />
                <div>
                    <Button>Favourite</Button>
                    <Button>Delete</Button>
                </div>
            </Box>


            <Box sx={styles.priceCounter}>
                <ListItemText
                    sx={styles.listItemTextPrice}
                    primaryTypographyProps={{sx: styles.listItemTextPrice.primary}}
                    primary={`$${price}`}
                />
                <QuantityPickier/>
            </Box>
        </ListItem>
    )
}

CartItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
}

export default CartItem;
