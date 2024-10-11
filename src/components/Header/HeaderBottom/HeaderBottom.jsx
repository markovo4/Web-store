import {useEffect, useState} from "react";
import {Box, Button, Container, MenuItem, Tooltip, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Cookies from "js-cookie";
import {
    AccountCircle as AccountCircleIcon,
    Favorite as FavoriteIcon,
    FavoriteBorder as FavoriteBorderIcon,
    LoginOutlined as LoginOutlinedIcon,
    Logout as LogoutIcon,
    ShoppingCartOutlined as ShoppingCartOutlinedIcon
} from '@mui/icons-material';

import {styles} from "./styles";
import ProductsSelect from "../../UI/inputs/ProductsSelect";
import CategoriesDropdown from "../../UI/CategoriesDropdown";
import HeaderDropdown from "../../UI/HeaderDropdown";
import ModalLogin from "../../ModalsAuth/ModalLogin";
import {getFavUserProductList, getProductList} from "../../../redux/slices/localStorageSlice";
import {getTotalPrice} from "../../../utils/functions/functions";
import routerNames from "../../../router/routes/routerNames";
import stylesSCSS from './stylesSCSS.module.scss';
import ModalLoginMobile from "../../ModalsAuth/ModalLoginMobile/index.js";

const HeaderBottom = () => {
    const {
        orderList,
        favouriteList,
        favouriteUserList = [],
        currentUser = {}
    } = useSelector(state => state.localStorage);
    const {displayAuthButtons} = useSelector(state => state.modalsAuth);
    const dispatch = useDispatch();

    const [fixedHeader, setFixedHeader] = useState(false);

    // Update the state for fixed header on scroll
    useEffect(() => {
        const handleScroll = () => {
            setFixedHeader(window.scrollY > 1000 && window.location.pathname === routerNames.pageMain);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fetch the favorite products for the logged-in user
    const favouriteUserProducts = favouriteUserList
        .filter(user => user.email === currentUser.email)
        .flatMap(user => user.productsList || []);

    // Define the `favList` based on the logged-in status
    const [favList, setFavList] = useState([]);

    // Update favList whenever the relevant lists or login status change
    useEffect(() => {
        dispatch(getProductList());
        dispatch(getFavUserProductList());
    }, [dispatch]);

    useEffect(() => {
        const updatedFavList = Cookies.get('LoggedIn') ? favouriteUserProducts : favouriteList;

        // Only update state if the value actually changed
        setFavList((prev) => {
            if (prev !== updatedFavList) {
                return updatedFavList;
            }
            return prev;
        });
    }, [Cookies.get('LoggedIn'), favouriteUserList, currentUser.email, favouriteList]);


    // Logout handler
    const handleLogOut = () => {
        Cookies.remove('LoggedIn');
        window.location.reload();
    };

    return (
        <Box sx={fixedHeader ? styles.fixedHeader : styles.header}>
            <Box sx={styles.containerMd}>
                <ProductsSelect styles={styles.selectorMd}/>
                <Box sx={styles.authGroupMd}>
                    {displayAuthButtons ? (
                        <HeaderDropdown
                            title=""
                            icon={<AccountCircleIcon fontSize="large"/>}
                            iconStart
                        >
                            <MenuItem sx={styles.menuItem}>
                                <Link to={routerNames.pagePersonalCabinet}>
                                    <AccountCircleIcon fontSize="small" color="primary"/> My Cabinet
                                </Link>
                            </MenuItem>
                            <MenuItem sx={styles.menuItem}>
                                <Link to={routerNames.pageFavProducts}>
                                    <FavoriteIcon fontSize="small" color="error"/> Favourite
                                </Link>
                            </MenuItem>
                            <MenuItem sx={styles.menuItem} onClick={handleLogOut}>
                                <LogoutIcon fontSize="small" color="error"/> Logout
                            </MenuItem>
                        </HeaderDropdown>
                    ) : (
                        <ModalLoginMobile button={
                            <Button sx={styles.buttonLogIn} variant="contained">
                                LogIn <LoginOutlinedIcon sx={styles.loginIcon}/>
                            </Button>
                        }/>
                    )}
                </Box>
            </Box>

            <Container sx={styles.container}>
                <CategoriesDropdown/>
                <Box style={styles.wrapper}>
                    <ProductsSelect styles={styles.selector}/>
                </Box>
                <Box style={styles.wrapperButtonGroup}>
                    {displayAuthButtons ? (
                        <HeaderDropdown
                            title="Profile"
                            icon={<AccountCircleIcon fontSize="large"/>}
                            iconStart
                        >
                            <MenuItem sx={styles.menuItem}>
                                <Link to={routerNames.pagePersonalCabinet}>
                                    <AccountCircleIcon fontSize="small" color="primary"/> My Cabinet
                                </Link>
                            </MenuItem>
                            <MenuItem sx={styles.menuItem}>
                                <Link to={routerNames.pageFavProducts}>
                                    <FavoriteIcon fontSize="small" color="error"/> Favourite
                                </Link>
                            </MenuItem>
                            <MenuItem sx={styles.menuItem} onClick={handleLogOut}>
                                <LogoutIcon fontSize="small" color="error"/> Logout
                            </MenuItem>
                        </HeaderDropdown>
                    ) : (
                        <ModalLogin button={
                            <Button sx={styles.buttonLogIn} variant="contained">
                                LogIn <LoginOutlinedIcon sx={styles.loginIcon}/>
                            </Button>
                        }/>
                    )}

                    <div className={stylesSCSS.separator}/>

                    <Tooltip
                        title={favList.length < 1 ? 'Add items to favourites first!' : 'View your favourites!'}
                    >
                        <Link to={favList.length < 1 ? routerNames.pageMain : routerNames.pageFavProducts}>
                            <Button sx={styles.buttonFav} variant="contained">
                                <FavoriteBorderIcon/>
                            </Button>
                        </Link>
                    </Tooltip>

                    <Tooltip title={orderList.length < 1 ? 'Add items to proceed to the cart!' : 'View your cart'}>
                        <Link to={orderList.length < 1 ? routerNames.pageMain : routerNames.pageCart}>
                            <Button sx={styles.buttonCart} variant="contained">
                                <ShoppingCartOutlinedIcon/>
                                {orderList.length !== 0 && (
                                    <Typography variant='span' component='span' sx={styles.cartItemCounter}>
                                        {getTotalPrice(orderList).quantity}
                                    </Typography>
                                )}
                                {orderList.length !== 0 ? (
                                    <Box className='flex flex-col'>
                                        <Typography variant='p'>Total</Typography>
                                        <Typography variant='span' component='span'>
                                            ${getTotalPrice(orderList).price}
                                        </Typography>
                                    </Box>
                                ) : (
                                    <Typography variant='h6'>Cart</Typography>
                                )}
                            </Button>
                        </Link>
                    </Tooltip>
                </Box>
            </Container>
        </Box>
    );
};

export default HeaderBottom;
