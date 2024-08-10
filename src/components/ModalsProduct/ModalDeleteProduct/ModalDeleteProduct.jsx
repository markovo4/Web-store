import ModalTemplate from "../../UI/ModalTemplate/index.js";
import PropTypes from "prop-types";
import {Box, Button, Typography} from "@mui/material";
import {styles} from "./styles.js";

const ModalDeleteProduct = ({
                                button,
                                image,
                                price,
                                rating,
                                count,
                                id,
                                title,
                                open,
                                onClose,
                                onDelete,
                            }) => {

    const handleClose = (event) => {
        const {name} = event.target;
        if (name === 'delete') {
            onDelete();
            onClose();
        } else if (name !== 'delete') {
            onClose();
        }
    };

    return (
        <ModalTemplate
            title={'Are you sure you want to remove this Item?'}
            button={button}
            open={open}
            handleClose={handleClose}
        >
            <Box sx={styles.productContainer}>
                <img src={image} style={styles.img}/>
                <Typography sx={styles.title}>
                    {title}
                </Typography>
            </Box>
            <div className={'flex items-center justify-between'}>
                <Button
                    name={'delete'}
                    onClick={handleClose}
                    variant='contained'
                    sx={styles.buttonDelete}
                >Delete</Button>
                <Button
                    name={'cancel'}
                    onClick={handleClose}
                    variant='contained'
                    sx={styles.buttonCancel}
                >Cancel</Button>
            </div>
        </ModalTemplate>
    );
};

ModalDeleteProduct.propTypes = {
    button: PropTypes.object.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};


export default ModalDeleteProduct;