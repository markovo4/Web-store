import PropTypes from "prop-types";
import {Box, Button, Modal, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {Link} from "react-router-dom";

import CartItem from "../../UI/cards/CartItem";
import {styles} from "./styles";
import routerNames from "../../../router/routes/routerNames";

const CartSide = ({
                      button,
                      onQuantityChange,
                      image,
                      price,
                      rating,
                      count,
                      id,
                      title,
                      open,
                      onClose,
                  }) => {
    const handleClose = () => {
        onClose();
    };

    return (
        <div>
            {button}
            <Modal
                sx={styles.modal}
                open={open}
                onClose={handleClose}
                aria-labelledby={title}
                aria-describedby={title}
            >
                <Box sx={styles.container}>
                    <div className="flex justify-between items-center">
                        <Typography
                            id={title}
                            variant="h6"
                            component="h2"
                            sx={styles.modalTitle}
                        >
                            Item has been added to the cart
                        </Typography>
                        <Button
                            onClick={handleClose}
                            variant="contained"
                            sx={styles.buttonClose}
                            aria-label="close cart modal"
                        >
                            <CloseIcon color="disabled" fontSize="large"/>
                        </Button>
                    </div>

                    <div>
                        <CartItem
                            image={image}
                            onQuantityChange={onQuantityChange}
                            price={price}
                            rating={rating}
                            count={count}
                            amount={1}
                            id={id}
                            title={title}
                        />
                    </div>

                    <Box className="flex justify-between items-center pl-12 pr-12" sx={styles.buttonGroup}>
                        <Button
                            sx={styles.buttonContinue}
                            variant="contained"
                            onClick={handleClose}
                        >
                            Continue shopping
                        </Button>

                        <div className="flex gap-5">
                            <Link to={routerNames.pageCart}>
                                <Button
                                    sx={styles.buttonChoice}
                                    variant="contained"
                                >
                                    Go to cart
                                </Button>
                            </Link>

                            <Link to={routerNames.pageCheckout}>
                                <Button
                                    sx={styles.buttonChoice}
                                    variant="outlined"
                                >
                                    Checkout
                                </Button>
                            </Link>
                        </div>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

CartSide.propTypes = {
    button: PropTypes.element.isRequired,
    onQuantityChange: PropTypes.func.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default CartSide;
