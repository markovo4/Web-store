import {styles} from "./styles.js";
import {Box, Button, Modal, Typography} from "@mui/material";
import CartItem from "../../UI/cards/CartItem/index.js";
import PropTypes from "prop-types";

const CartSide = ({
                      button,
                      onQuantityChange,
                      image,
                      price,
                      rating,
                      count,
                      id,
                      title,
                      open
                  }) => {

    // const [openModal, setOpenModal] = useState(false);
    // const handleOpenCartSide = () => {
    //     setOpenModal(!openModal)
    // };

    const handleClose = () => {
        // setOpenModal(false); // Close the modal explicitly
    };

    // const buttonWithOnClick = cloneElement(button, {
    //     onClick: handleOpenCartSide,
    // });

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
                    <Typography
                        id={title}
                        variant="h6"
                        component="h2"
                        sx={styles.modalTitle}
                    >
                        {title}
                    </Typography>
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

                    <Button type="submit" variant="contained" onClick={handleClose}>
                        Log in
                    </Button>
                </Box>
            </Modal>
        </div>
    );
};

CartSide.propTypes = {
    button: PropTypes.object.isRequired,
    onQuantityChange: PropTypes.func.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
}

export default CartSide;
