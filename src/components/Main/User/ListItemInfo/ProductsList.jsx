import {Box, ListItemButton, Typography} from "@mui/material";
import {styles} from "./styles.js";
import PropTypes from "prop-types";
import {useState} from "react";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const ProductsList = ({id, date}) => {
    const [showMore, setShowMore] = useState(false);

    const handleClick = () => {
        setShowMore(!showMore)
    }
    return (
        <Box>
            <ListItemButton sx={styles.infoGroup} onClick={handleClick}>
                <Typography variant='h5' component='span'>{id}</Typography>
                <Typography variant='h6' component='span' sx={styles.infoText}>{date}</Typography>
                <Typography variant='h6' component='span' sx={styles.infoText}>{showMore ? <ExpandLessIcon/> :
                    <ExpandMoreIcon/>}</Typography>
            </ListItemButton>
            {showMore ?
                <ListItemButton sx={styles.infoGroup} onClick={handleClick}>
                    <Typography variant='h5' component='span'>{id}</Typography>
                    <Typography variant='h6' component='span' sx={styles.infoText}>{date}</Typography>
                    <Typography variant='h6' component='span' sx={styles.infoText}><ExpandMoreIcon/></Typography>
                </ListItemButton>
                : ''}
        </Box>

    )
}
ProductsList.propTypes = {
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}
export default ProductsList;