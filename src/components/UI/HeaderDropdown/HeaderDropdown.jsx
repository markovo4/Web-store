import {useState} from 'react';
import {Box, Menu, Typography} from '@mui/material';
import {styles} from './styles';
import PropTypes from "prop-types";

const HeaderDropdown = ({children, title, icon, iconStart}) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMouseEnter = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMouseLeave = () => {
        setAnchorEl(null);
    };

    return (
        <Box
            style={styles.dropdownContainer}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >

            {iconStart ? (
                <Typography variant='h6' sx={styles.startIcon}>
                    {icon} {title}
                </Typography>
            ) : (
                <Typography variant='span' sx={styles.endIcon}>
                    {title} {icon}
                </Typography>
            )}
            <Menu
                id="categories-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMouseLeave}
                MenuListProps={{onMouseLeave: handleMouseLeave}}
                sx={styles.menu}
            >
                {children}
            </Menu>
        </Box>
    );
};

HeaderDropdown.propTypes = {
    children: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    iconStart: PropTypes.bool

}

export default HeaderDropdown;