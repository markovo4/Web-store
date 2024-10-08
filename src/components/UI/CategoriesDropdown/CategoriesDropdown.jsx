import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useGetAllCategoriesQuery} from '../../../redux/productsApi/productsApi.js';
import {Box, Button, CircularProgress, Menu, MenuItem, Typography} from '@mui/material';
import {KeyboardArrowDownSharp} from '@mui/icons-material';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import {styles} from './styles';

const CategoriesDropdown = () => {
    const {data: categories = [], error, isLoading} = useGetAllCategoriesQuery();
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl((prevAnchorEl) => (prevAnchorEl ? null : event.currentTarget));
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleSelectCategory = (category) => {
        navigate(`/categories/${category}`);
        setAnchorEl(null);
    };

    if (isLoading) return <CircularProgress/>;
    if (error) return <p>Error loading categories</p>;

    return (
        <Box style={styles.dropdownContainer}>
            <Button
                aria-controls="categories-menu"
                aria-haspopup="true"
                onClick={handleClick}
                sx={styles.button}
            >
                <CategoryOutlinedIcon/>
                Products Catalog
                <KeyboardArrowDownSharp sx={styles.arrowIcon}/>
            </Button>
            <Menu
                id="categories-menu"
                anchorEl={anchorEl}
                keepMounted
                disableScrollLock={true}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{onMouseLeave: handleClose}}
                sx={styles.menu}
            >
                {categories.map((category, index) => (
                    <MenuItem
                        key={index}
                        onClick={() => handleSelectCategory(category)}
                        sx={styles.menuItem}
                    >
                        <Typography variant='h6' sx={styles.menuTitle}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                            <ArrowForwardOutlinedIcon color='success'/>
                        </Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};

export default CategoriesDropdown;
