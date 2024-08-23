import PropTypes from 'prop-types';
import {List, ListItem, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import {styles} from './styles.js';

const FooterInfoList = ({title, content}) => (
    <List sx={styles.list}>
        <ListItem>
            <Typography variant="h6" component="span" sx={styles.title}>
                {title}
            </Typography>
        </ListItem>
        {content.map((info, index) => (
            <ListItem key={index} sx={styles.li}>
                <Typography sx={styles.subtitle}>
                    <Link to="/#">
                        {info}
                    </Link>
                </Typography>
            </ListItem>
        ))}
    </List>
);

FooterInfoList.propTypes = {
    title: PropTypes.string,
    content: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FooterInfoList;
