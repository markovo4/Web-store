import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import cities from "../../../../assets/cities/cities";
import PropTypes from "prop-types";

const CountrySelect = ({styles}) => {
    return (
        <Autocomplete
            disablePortal
            id="city-select"
            options={cities}
            getOptionLabel={(option) => option.city}
            sx={{width: 600}}
            renderInput={(params) => <TextField {...params} sx={styles} label="City"/>}
        />
    );
}

CountrySelect.propTypes = {
    styles: PropTypes.object
}

export default CountrySelect;
