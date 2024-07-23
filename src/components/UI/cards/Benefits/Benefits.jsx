import {Typography} from "@mui/material";
import {styles} from "./styles.js";

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

export default Benefits;