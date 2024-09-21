import {Box, Container, List, ListItem, Typography} from "@mui/material";
import {styles} from './styles.js';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCurrentUser} from "../../../../redux/slices/localStorageSlice.js";

const Profile = () => {
    const {currentUser} = useSelector(state => state.localStorage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentUser());
    }, [dispatch])

    return (
        <Box sx={styles.wrapper}>
            <Container>
                {currentUser &&
                    <List>
                        <ListItem sx={styles.infoGroup}>
                            <Typography variant='h5' component='span'>Full Name:</Typography>
                            <Typography variant='h6' component='span'
                                        sx={styles.infoText}>{`${currentUser.firstName} ${currentUser.lastName}`}</Typography>
                        </ListItem>

                        <ListItem sx={styles.infoGroup}>
                            <Typography variant='h5' component='span'>Phone number:</Typography>
                            <Typography variant='h6' component='span'
                                        sx={styles.infoText}>{currentUser.phoneNumber}</Typography>
                        </ListItem>

                        <ListItem sx={styles.infoGroup}>
                            <Typography variant='h5' component='span'>E-mail:</Typography>
                            <Typography variant='h6' component='span'
                                        sx={styles.infoText}>{currentUser.email}</Typography>
                        </ListItem>
                    </List>
                }
            </Container>
        </Box>
    )
}

export default Profile;