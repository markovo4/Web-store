import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import countries from "../../../../assets/countries/countries";

const CountrySelect = () => {
    return (
        <Autocomplete
            disablePortal
            id="country-select"
            options={countries}
            sx={{width: 300}}
            renderInput={(params) => <TextField {...params} label="Movie"/>}
        />
    );
}

export default CountrySelect;