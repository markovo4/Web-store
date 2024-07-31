import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import cities from "../../../../assets/cities/cities.js";
import PropTypes from "prop-types";

const CitiesSelect = ({styles, handleChange, value}) => {

    const handleChangeCity = (event, value) => {
        handleChange(value);
    };
    return (
        <Autocomplete
            disablePortal
            id="city-select"
            sx={{width: 600}}
            value={value}
            onChange={handleChangeCity}
            options={cities}
            getOptionLabel={(option) => option.city}
            renderInput={(params) => <TextField {...params} sx={styles} label="City"/>}
        />
    );
}

CitiesSelect.propTypes = {
    styles: PropTypes.object,
    handleChange: PropTypes.object,
    value: PropTypes.string
}

export default CitiesSelect;