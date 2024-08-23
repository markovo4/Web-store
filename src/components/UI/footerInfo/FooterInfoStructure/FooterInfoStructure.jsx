import {List, ListItem, Typography} from "@mui/material";
import {styles} from "./styles.js";
import {Link} from "react-router-dom";
import NotListedLocationIcon from "@mui/icons-material/NotListedLocation";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import WifiCalling3OutlinedIcon from "@mui/icons-material/WifiCalling3Outlined";
import SendIcon from "@mui/icons-material/Send";

const FooterInfoStructure = () => {
    return (
        <ListItem sx={styles.li}>
            <List>
                <ListItem>
                    <Typography variant='h6' component='span' sx={styles.title}>
                        Consultation
                    </Typography>
                </ListItem>
                <ListItem sx={styles.phoneNumberLi}>
                    <Typography variant='h6' component='span' sx={styles.phoneNumber}>
                        <a href='tel:+380-800-303-505'>0-800-303-505</a>
                    </Typography>
                </ListItem>
                <ListItem sx={styles.phoneNumberLi}>
                    <Typography variant='h6' component='span' sx={styles.phoneNumber}>
                        <a href='tel:+380-800-600-506'>0-800-600-506</a>
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='h6' component='span' sx={styles.subtitle}>
                        <Link to='#'>
                            Free across Ukraine <br/> 08:00-21:00 Mon-Sat
                        </Link>
                    </Typography>
                </ListItem>

                <ListItem>
                    <Link to='#'>
                        <Typography sx={styles.linkServices}>
                            <NotListedLocationIcon fontSize='small' color='error'/>
                            Help Center
                        </Typography>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to='#'>
                        <Typography sx={styles.linkServices}>
                            <ChatOutlinedIcon fontSize='small' color='success'/>
                            Live Chat
                        </Typography>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to='#'>
                        <Typography sx={styles.linkServices}>
                            <SendOutlinedIcon fontSize='small' color='primary'/>
                            Messenger
                        </Typography>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to='#'>
                        <Typography sx={styles.linkServices}>
                            <WifiCalling3OutlinedIcon fontSize='small' color='secondary'/>
                            Viber
                        </Typography>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to='#'>
                        <Typography sx={styles.linkServices}>
                            <SendIcon fontSize='small' color='primary'/>
                            Telegram
                        </Typography>
                    </Link>
                </ListItem>
            </List>
        </ListItem>
    )
}

export default FooterInfoStructure;