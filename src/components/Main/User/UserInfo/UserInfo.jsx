import {styles} from './styles.js';
import {Avatar, Box, Container, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCurrentUser, getFavUserProductList, getListOfOrders} from "../../../../redux/slices/localStorageSlice.js";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const UserInfo = () => {

    const {currentUser, listOfOrders = [], favouriteUserList = []} = useSelector(state => state.localStorage);
    const dispatch = useDispatch();

    const colorPicker = () => {
        if (currentUser) {
            const a = currentUser.firstName.charCodeAt(0);
            const b = currentUser.lastName.charCodeAt(0);
            return `#${(a + b).toString(16).padStart(4, '0')}`;
        }
    }
    useEffect(() => {
        dispatch(getFavUserProductList())
        dispatch(getListOfOrders())
        dispatch(getCurrentUser())
    }, [dispatch])

    const favouriteUserProducts = favouriteUserList
        .filter(user => user.email === currentUser.email)
        .flatMap(user => user.productsList || []);

    console.log(currentUser)

    return (
        currentUser && <Container sx={styles.containerOuter}>
            <Box sx={styles.containerInner}>

                <Box sx={styles.containerUser}>
                    <Avatar
                        sx={{
                            width: '100px',
                            height: '100px',
                            background: `${colorPicker()}`
                        }}>
                        <Typography variant='h3' component='span' sx={styles.avatar}>
                            {`${currentUser.firstName.at(0).toUpperCase()}${currentUser.lastName.at(0).toUpperCase()}`}
                        </Typography>
                    </Avatar>
                    <Typography variant='h6' component='span' sx={styles.userFullName}>
                        {currentUser.firstName} {currentUser.lastName}
                    </Typography>
                </Box>

                <Box sx={styles.personalStatsContainer}>
                    <Typography variant='h6' component='span' sx={styles.userFullName}>
                        <ReceiptLongIcon/> My Orders {listOfOrders.length}
                    </Typography>
                    <Typography variant='h6' component='span' sx={styles.userFullName}>
                        <FavoriteBorderIcon/> My Favourites {favouriteUserProducts.length}
                    </Typography>
                </Box>
            </Box>
        </Container>
    )
}

export default UserInfo;

