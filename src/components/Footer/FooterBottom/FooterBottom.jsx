import {Box, Container, List, ListItem, Typography} from "@mui/material";
import {styles} from "./styles.js";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import Visa from "../../../assets/icons/Visa.jsx";
import MasterCard from "../../../assets/icons/MasterCard.jsx";
import {Link} from "react-router-dom";

const FooterBottom = () => {
    return (
        <Box sx={styles.footerBottom}>
            <Container sx={styles.container}>

                <Typography
                    variant='body1'
                    component={'div'}
                    sx={styles.rights}>
                    © All Rights Reserved 2024
                    <Box>
                        <List sx={styles.socialsMd}>
                            <ListItem sx={styles.liItem}><Link to="#"><FacebookIcon sx={styles.icon}/></Link></ListItem>
                            <ListItem sx={styles.liItem}><Link to="#"><YouTubeIcon sx={styles.icon}/></Link></ListItem>
                            <ListItem sx={styles.liItem}><Link to="#"><InstagramIcon
                                sx={styles.icon}/></Link></ListItem>
                            <ListItem sx={styles.liItem}><Link to="#"><TelegramIcon sx={styles.icon}/></Link></ListItem>
                            <ListItem sx={styles.liItem}><Link to="#"><PhoneInTalkIcon
                                sx={styles.icon}/></Link></ListItem>
                        </List>
                    </Box>
                    <Box className={'flex items-baseline gap-4'}>
                        <Visa/>
                        <MasterCard/>
                    </Box>

                </Typography>

                <Box>
                    <List sx={styles.socials}>
                        <ListItem sx={styles.liItem}><Link to="#"><FacebookIcon sx={styles.icon}/></Link></ListItem>
                        <ListItem sx={styles.liItem}><Link to="#"><YouTubeIcon sx={styles.icon}/></Link></ListItem>
                        <ListItem sx={styles.liItem}><Link to="#"><InstagramIcon sx={styles.icon}/></Link></ListItem>
                        <ListItem sx={styles.liItem}><Link to="#"><TelegramIcon sx={styles.icon}/></Link></ListItem>
                        <ListItem sx={styles.liItem}><Link to="#"><PhoneInTalkIcon sx={styles.icon}/></Link></ListItem>
                    </List>
                </Box>

            </Container>
        </Box>
    )
}

export default FooterBottom;