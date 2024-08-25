import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import cities from "../../../../assets/cities/cities.js";
import PropTypes from "prop-types";

const CitiesSelect = ({styles, onChange, value, defaultValue, header}) => {

    const handleChangeCityForm = (event, newValue) => {
        onChange({target: {name: 'city', value: newValue}});
    };

    const handleChangeCity = (event, newValue) => {
        onChange('city', newValue);
    };

    return (
        <Autocomplete
            disablePortal
            id="city-select"
            sx={{
                width: {
                    lg: '700px',
                    md: '86vw',
                    xs: '86vw',
                }
            }}
            value={value}
            defaultValue={defaultValue}
            onChange={header ? handleChangeCity : handleChangeCityForm}
            options={cities}
            isOptionEqualToValue={(option, value) => option.city === value.city}
            getOptionLabel={(option) => option.city}
            renderInput={(params) => <TextField {...params} sx={styles} label="City"/>}
        />
    );
}

CitiesSelect.propTypes = {
    styles: PropTypes.object,
    onChange: PropTypes.func,
    value: PropTypes.object,
    defaultValue: PropTypes.object,
    header: PropTypes.bool
}

export default CitiesSelect;

