import {List, ListItem, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {styles} from "./styles.js";

const FooterInfoList = ({title, content}) => {
    return (
        <List sx={styles.list}>
            <ListItem>
                <Typography variant='h6' component='span' sx={styles.title}>
                    {title}
                </Typography>
            </ListItem>
            {content.map((info, index) => {
                return (
                    <ListItem key={index} sx={styles.li}>
                        <Typography sx={styles.subtitle}>
                            <Link to={'/#'}>
                                {info}
                            </Link>
                        </Typography>
                    </ListItem>
                )
            })}
        </List>
    )
}

FooterInfoList.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.array.isRequired
}

export default FooterInfoList;