import {Box, Button, InputLabel, TextField} from '@mui/material';
import PropTypes from 'prop-types';
import {styles} from "./styles.js";

const InputWithButton = ({
                             buttonText,
                             onButtonClick,
                             inputProps,
                             buttonProps,
                             labelInput,
                             placeHolder,
                             handleChange
                         }) => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <InputLabel sx={{textAlign: 'left', mb: 1}}>{labelInput}</InputLabel>
            <Box sx={{display: 'flex', alignItems: 'center', marginBottom: '25px'}}>
                <TextField {...inputProps} sx={styles.textField} placeholder={placeHolder} onChange={handleChange}/>
                <Button
                    variant="contained"
                    onClick={onButtonClick}
                    {...buttonProps}
                    sx={styles.button}
                >
                    {buttonText}
                </Button>
            </Box>
        </Box>
    );
}

InputWithButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    onButtonClick: PropTypes.func.isRequired,
    inputProps: PropTypes.object,
    buttonProps: PropTypes.object,
    labelInput: PropTypes.string.isRequired,
    placeHolder: PropTypes.string,
    handleChange: PropTypes.func
};

export default InputWithButton;
