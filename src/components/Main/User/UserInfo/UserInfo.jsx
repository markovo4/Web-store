import {styles} from './styles.js';
import {Avatar, Container, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCurrentUser} from "../../../../redux/slices/localStorageSlice.js";

const UserInfo = () => {

    const {currentUser} = useSelector(state => state.localStorage);
    const dispatch = useDispatch();

    const colorPicker = () => {
        if (currentUser) {
            const a = currentUser.firstName.charCodeAt(0);
            const b = currentUser.lastName.charCodeAt(0);
            return `#${(a + b).toString(16).padStart(4, '0')}`;
        }
    }

    useEffect(() => {
        dispatch(getCurrentUser())
    }, [dispatch])

    console.log(currentUser)

    return (
        <Container sx={styles.container}>
            {currentUser &&
                <Avatar
                    sx={{
                        width: '100px',
                        height: '100px',
                        background: `${colorPicker()}`
                    }}
                >
                    <Typography variant='h3' component='span' sx={styles.avatar}>
                        {`${currentUser.firstName.at(0).toUpperCase()}${currentUser.lastName.at(0).toUpperCase()}`}
                    </Typography>
                </Avatar>
            }
            User Info
        </Container>
    )
}

export default UserInfo;

