import {FormControl, Input, InputLabel} from "@mui/material";
import PropTypes from "prop-types";
import {styles} from "./styles.js";

const FormInput = ({id, name, type, touched, error, label, onChange, value, disabled}) => {
    return (
        <FormControl>
            <InputLabel htmlFor={id} sx={styles.inputLabel}>{label}</InputLabel>
            <Input
                sx={styles.formInput}
                id={id}
                name={name}
                type={type}
                autoComplete={'off'}
                onChange={onChange}
                value={value}
                disabled={disabled}
            />
            {touched && error ? (
                <div style={styles.errorText}>{error}</div>
            ) : null}
        </FormControl>
    );
}

FormInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    touched: PropTypes.bool,
    error: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    type: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
}

export default FormInput;
