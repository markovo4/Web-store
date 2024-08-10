import ModalTemplate from "../../UI/ModalTemplate/index.js";
import PropTypes from "prop-types";
import {Button} from "@mui/material";
import {styles} from "./styles.js";

const ModalDeleteAllProducts = ({
                                    button,
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
            title={'Remove all products?'}
            button={button}
            open={open}
            handleClose={handleClose}
        >
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

ModalDeleteAllProducts.propTypes = {
    button: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};


export default ModalDeleteAllProducts;