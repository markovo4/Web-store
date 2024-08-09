import {Container, Typography} from "@mui/material";
import {styles} from "./styles.js";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import Visa from "../../../assets/icons/Visa.jsx";
import MasterCard from "../../../assets/icons/MasterCard.jsx";

const FooterBottom = () => {
    return (
        <section style={styles.footerBottom}>
            <Container style={styles.container}>

                <Typography
                    variant='body1'
                    component={'div'}
                    sx={styles.rights}>
                    © All Rights Reserved 2024
                    <div className={'flex items-baseline gap-4'}>
                        <Visa/>
                        <MasterCard/>
                    </div>

                </Typography>

                <div>
                    <ul style={styles.socials}>
                        <li><a href="#"><FacebookIcon style={styles.icon}/></a></li>
                        <li><a href="#"><YouTubeIcon style={styles.icon}/></a></li>
                        <li><a href="#"><InstagramIcon style={styles.icon}/></a></li>
                        <li><a href="#"><TelegramIcon style={styles.icon}/></a></li>
                        <li><a href="#"><PhoneInTalkIcon style={styles.icon}/></a></li>
                    </ul>
                </div>

            </Container>
        </section>
    )
}

export default FooterBottom;