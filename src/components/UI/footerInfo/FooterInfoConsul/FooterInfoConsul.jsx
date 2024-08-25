import {List, ListItem, Typography} from "@mui/material";
import {styles} from "./styles.js";
import {Link} from "react-router-dom";
import NotListedLocationIcon from "@mui/icons-material/NotListedLocation";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import WifiCalling3OutlinedIcon from "@mui/icons-material/WifiCalling3Outlined";
import SendIcon from "@mui/icons-material/Send";
import PropTypes from "prop-types";

const FooterInfoConsul = ({padding}) => {
    return (
        <ListItem sx={styles.li}>
            <List sx={styles.consulWrapper}>
                <ListItem disablePadding={padding}>
                    <Typography variant='h6' component='span' sx={styles.title}>
                        Consultation
                    </Typography>
                </ListItem>
                <ListItem sx={styles.phoneNumberLi} disablePadding={padding}>
                    <Typography variant='h6' component='span' sx={styles.phoneNumber}>
                        <a href='tel:+380-800-303-505'>0-800-303-505</a>
                    </Typography>
                </ListItem>
                <ListItem sx={styles.phoneNumberLi} disablePadding={padding}>
                    <Typography variant='h6' component='span' sx={styles.phoneNumber}>
                        <a href='tel:+380-800-600-506'>0-800-600-506</a>
                    </Typography>
                </ListItem>
                <ListItem disablePadding={padding}>
                    <Typography variant='h6' component='span' sx={styles.subtitle}>
                        <Link to='#'>
                            Free across Ukraine <br/> 08:00-21:00 Mon-Sat
                        </Link>
                    </Typography>
                </ListItem>

                <ListItem sx={styles.iconWrapper}>
                    <Link to='#'>
                        <Typography sx={styles.linkServices}>
                            <NotListedLocationIcon sx={styles.serviceIconHelp}/>
                            Help Center
                        </Typography>
                    </Link>
                </ListItem>
                <ListItem sx={styles.iconWrapper}>
                    <Link to='#'>
                        <Typography sx={styles.linkServices}>
                            <ChatOutlinedIcon sx={styles.serviceIconChat}/>
                            Live Chat
                        </Typography>
                    </Link>
                </ListItem>
                <ListItem sx={styles.iconWrapper}>
                    <Link to='#'>
                        <Typography sx={styles.linkServices}>
                            <SendOutlinedIcon sx={styles.serviceIconMessenger}/>
                            Messenger
                        </Typography>
                    </Link>
                </ListItem>
                <ListItem sx={styles.iconWrapper}>
                    <Link to='#'>
                        <Typography sx={styles.linkServices}>
                            <WifiCalling3OutlinedIcon sx={styles.serviceIconViber}/>
                            Viber
                        </Typography>
                    </Link>
                </ListItem>
                <ListItem sx={styles.iconWrapper}>
                    <Link to='#'>
                        <Typography sx={styles.linkServices}>
                            <SendIcon sx={styles.serviceIconTelegram}/>
                            Telegram
                        </Typography>
                    </Link>
                </ListItem>
            </List>
        </ListItem>
    )
}

FooterInfoConsul.propTypes = {
    padding: PropTypes.bool
}
export default FooterInfoConsul;