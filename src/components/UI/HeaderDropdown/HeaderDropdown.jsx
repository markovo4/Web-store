import {useState} from 'react';
import {Box, Menu, Typography} from '@mui/material';
import PropTypes from 'prop-types';
import {styles} from "./styles.js";


const HeaderDropdown = ({children, title, icon, iconStart}) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl((prevAnchorEl) => (prevAnchorEl ? null : event.currentTarget));
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box
            style={styles.dropdownContainer}
            onClick={handleClick}
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
                disableScrollLock={true}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{onMouseLeave: handleClose}}
                sx={styles.menu}
            >
                {children}
            </Menu>
        </Box>
    );
};

HeaderDropdown.propTypes = {
    children: PropTypes.node.isRequired, // Changed from array to node to support various types of children
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,    // Changed from object to node for flexibility
    iconStart: PropTypes.bool
};

export default HeaderDropdown;
