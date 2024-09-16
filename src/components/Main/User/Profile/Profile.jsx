import {Box, Container, List, ListItem, Typography} from "@mui/material";
import {styles} from './styles.js';

const Profile = () => {
    return (
        <Box sx={styles.wrapper}>
            <Container>
                <List>
                    <ListItem sx={styles.infoGroup}>
                        <Typography variant='h5' component='span'>Full Name:</Typography>
                        <Typography variant='h6' component='span' sx={styles.infoText}>Volodymyr Kirillov</Typography>
                    </ListItem>

                    <ListItem sx={styles.infoGroup}>
                        <Typography variant='h5' component='span'>Phone number:</Typography>
                        <Typography variant='h6' component='span' sx={styles.infoText}>+380639327793</Typography>
                    </ListItem>

                    <ListItem sx={styles.infoGroup}>
                        <Typography variant='h5' component='span'>E-mail:</Typography>
                        <Typography variant='h6' component='span'
                                    sx={styles.infoText}>volodymyrkirillov@gmail.com</Typography>
                    </ListItem>
                </List>
            </Container>
        </Box>
    )
}

export default Profile;