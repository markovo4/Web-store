import {styles} from "./styles";
import {Box, Button, Container, MenuItem, Tooltip, Typography} from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ProductsSelect from "../../UI/inputs/ProductsSelect";
import {Link} from "react-router-dom";
import routerNames from "../../../router/routes/routerNames.js";
import CategoriesDropdown from "../../UI/CategoriesDropdown/index.js";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import ModalLogin from "../../ModalsAuth/ModalLogin/index.js";
import {useDispatch, useSelector} from "react-redux";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HeaderDropdown from "../../UI/HeaderDropdown/index.js";
import Cookies from "js-cookie";
import {useEffect, useState} from "react";
import {getProductList} from "../../../redux/slices/localStorageSlice.js";

const HeaderBottom = () => {
    const {orderList} = useSelector(state => state.localStorage);
    const dispatch = useDispatch();

    const [fixedHeader, setFixedHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1000) {
                setFixedHeader(true);
            } else {
                setFixedHeader(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        dispatch(getProductList());
    }, [dispatch]);

    const getTotalPrice = (products) => {
        const priceTotal = products.reduce((totalPrice, product) => {
            return {
                price: totalPrice.price + product.price * product.amount,
                quantity: totalPrice.quantity + product.amount
            }
        }, {price: 0, quantity: 0});
        return {price: parseFloat(priceTotal.price.toFixed(2)), quantity: priceTotal.quantity};
    }

    const {displayAuthButtons} = useSelector(state => state.modalsAuth);

    const handleLogOut = () => {
        Cookies.remove('LoggedIn');
        window.location.reload();
    };

    return (
        <section style={fixedHeader ? styles.fixedHeader : styles.header}>
            <Container sx={styles.container}>
                <CategoriesDropdown/>
                <div style={styles.wrapper}>
                    <ProductsSelect styles={styles.selector}/>
                </div>
                <div style={styles.wrapperButtonGroup}>
                    {displayAuthButtons ? (
                        <HeaderDropdown
                            title={'Profile'}
                            icon={<AccountCircleIcon fontSize='large'/>}
                            iconStart={true}
                        >
                            <MenuItem sx={styles.menuItem}>
                                <AccountCircleIcon fontSize='small' color='primary'/> My Cabinet
                            </MenuItem>
                            <MenuItem sx={styles.menuItem}>
                                <LocalMallIcon fontSize='small' color='success'/> My Orders
                            </MenuItem>
                            <MenuItem sx={styles.menuItem}>
                                <Link to={routerNames.pageFavProducts}>
                                    <FavoriteIcon fontSize='small' color='error'/> Favourite
                                </Link>
                            </MenuItem>
                            <MenuItem sx={styles.menuItem}>
                                <LogoutIcon fontSize='small' onClick={handleLogOut} color='error'/> Logout
                            </MenuItem>
                        </HeaderDropdown>
                    ) : (
                        <ModalLogin button={
                            <Button sx={styles.buttonLogIn} variant="contained">
                                <LoginOutlinedIcon/>
                                <Typography variant='h6'>LogIn</Typography>
                            </Button>
                        }/>
                    )}

                    <div className="w-[1px] h-9" style={styles.separator}/>

                    <Tooltip title={'View your favorites'}>
                        <Link to={routerNames.pageFavProducts}>
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
                                    <span style={styles.cartItemCounter}>
                                        {getTotalPrice(orderList).quantity}
                                    </span>
                                )}
                                {orderList.length !== 0 ? (
                                    <Box className='flex flex-col'>
                                        <Typography variant='p'>Total</Typography>
                                        <span>${getTotalPrice(orderList).price}</span>
                                    </Box>
                                ) : (
                                    <Typography variant='h6'>Cart</Typography>
                                )}
                            </Button>
                        </Link>
                    </Tooltip>
                </div>
            </Container>
        </section>
    )
}

export default HeaderBottom;
