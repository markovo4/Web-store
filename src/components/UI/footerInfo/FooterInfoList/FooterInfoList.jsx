import PropTypes from 'prop-types';
import {List, ListItem, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import {styles} from './styles.js';

const FooterInfoList = ({title, content}) => {
    return (
        <List sx={styles.list}>
            <ListItem disablePadding={true}>
                <Typography variant="h6" component="span" sx={styles.title}>
                    {title}
                </Typography>
            </ListItem>
            {content.map((info, index) => {
                console.log(info)
                return (<ListItem key={index} sx={styles.li} disablePadding={true}>
                    <Typography sx={styles.subtitle}>
                        <Link to="/#">
                            {info}
                        </Link>
                    </Typography>
                </ListItem>)
            })}
        </List>
    )
};

FooterInfoList.propTypes = {
    title: PropTypes.string,
    content: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FooterInfoList;
