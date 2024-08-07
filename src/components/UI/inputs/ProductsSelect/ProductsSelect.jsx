import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PropTypes from "prop-types";
import {useGetAllProductsQuery} from "../../../../redux/productsApi/productsApi.js";
import {useNavigate} from 'react-router-dom';
import {stylesCard} from "./styles.js";

const ProductsSelect = ({styles}) => {
    const {data: products = [], isLoading, isError} = useGetAllProductsQuery();
    const navigate = useNavigate();
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading products</p>;

    const handleChange = (event, newValue) => {
        if (newValue) {
            navigate(`/products/${newValue.id}`); // Navigate to the new product page
        }
    }

    return (
        <Autocomplete
            disablePortal
            id="products-select"
            sx={{width: 600}}
            options={products}
            getOptionLabel={(product) => product.title}
            onChange={handleChange}
            renderOption={(props, option) => {
                const {key, ...restProps} = props; // Extract `key` from `props`
                return (
                    <li
                        key={key} // Set the `key` directly
                        {...restProps} // Spread the remaining props
                        style={stylesCard.li}
                    >
                        <img
                            src={option.image} // Display the product image
                            alt={option.title}
                            style={stylesCard.img}
                        />
                        {option.title}
                    </li>
                );
            }}
            renderInput={(params) => <TextField {...params} sx={styles} label="Search for Products"/>}
        />
    );
}

ProductsSelect.propTypes = {
    styles: PropTypes.object,
    key: PropTypes.any
}

export default ProductsSelect;
