import {ListItem, Typography} from "@mui/material";
import {styles} from "./styles.js";
import PropTypes from "prop-types";

const Benefit = ({title, body, children}) => {
    return (
        <ListItem sx={styles.block}>
            <Typography
                variant="h6"
                component="h6"
                sx={styles.title}>
                {children}{title}
            </Typography>

            <Typography
                variant="body"
                component="p"
                sx={styles.body}>
                {body}
            </Typography>
        </ListItem>
    )
}

Benefit.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,

}

export default Benefit;