import {useEffect, useState} from "react";
import {Box, Button, Container, MenuItem, Tooltip, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Cookies from "js-cookie";
import {
    AccountCircle as AccountCircleIcon,
    Favorite as FavoriteIcon,
    FavoriteBorder as FavoriteBorderIcon,
    LocalMall as LocalMallIcon,
    LoginOutlined as LoginOutlinedIcon,
    Logout as LogoutIcon,
    ShoppingCartOutlined as ShoppingCartOutlinedIcon
} from '@mui/icons-material';

import {styles} from "./styles";
import ProductsSelect from "../../UI/inputs/ProductsSelect";
import CategoriesDropdown from "../../UI/CategoriesDropdown";
import HeaderDropdown from "../../UI/HeaderDropdown";
import ModalLogin from "../../ModalsAuth/ModalLogin";
import {getProductList} from "../../../redux/slices/localStorageSlice";
import {getTotalPrice} from "../../../utils/functions/functions";
import routerNames from "../../../router/routes/routerNames";
import stylesSCSS from './stylesSCSS.module.scss';

const HeaderBottom = () => {
    const {orderList, favouriteList} = useSelector(state => state.localStorage);
    const {displayAuthButtons} = useSelector(state => state.modalsAuth);
    const dispatch = useDispatch();

    const [fixedHeader, setFixedHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setFixedHeader(window.scrollY > 1000 && window.location.pathname === routerNames.pageMain);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        dispatch(getProductList());
    }, [dispatch]);

    const handleLogOut = () => {
        Cookies.remove('LoggedIn');
        console.log(1)
        window.location.reload();
    };

    return (
        <Box sx={fixedHeader ? styles.fixedHeader : styles.header}>
            <Box sx={styles.containerMd}>
                <ProductsSelect styles={styles.selectorMd}/>
                <Box sx={styles.authGroupMd}>
                    {displayAuthButtons ? (
                        <HeaderDropdown
                            title="Profile"
                            icon={<AccountCircleIcon fontSize="large"/>}
                            iconStart
                        >
                            <MenuItem sx={styles.menuItem}>
                                <AccountCircleIcon fontSize="small" color="primary"/> My Cabinet
                            </MenuItem>
                            <MenuItem sx={styles.menuItem}>
                                <LocalMallIcon fontSize="small" color="success"/> My Orders
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
                                <AccountCircleIcon fontSize="small" color="primary"/> My Cabinet
                            </MenuItem>
                            <MenuItem sx={styles.menuItem}>
                                <LocalMallIcon fontSize="small" color="success"/> My Orders
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
                        title={favouriteList.length < 1 ? 'Add items to favourites first!' : 'View your favourites!'}>
                        <Link to={favouriteList.length < 1 ? routerNames.pageMain : routerNames.pageFavProducts}>
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
                                        <Typography variant='span'
                                                    component='span'>${getTotalPrice(orderList).price}</Typography>
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
