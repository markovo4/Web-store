import {Typography} from "@mui/material";
import {styles} from "./styles.js";
import PropTypes from "prop-types";

const Benefits = ({title, body, children}) => {
    return (
        <li style={styles.block}>
            <Typography
                variant="h6"
                component="h6"
                style={styles.title}>
                {children}{title}
            </Typography>

            <Typography
                variant="body"
                component="p"
                style={styles.body}>
                {body}
            </Typography>
        </li>
    )
}

Benefits.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,

}

export default Benefits;