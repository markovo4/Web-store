import {styles} from "./styles";
import {Button, Container, MenuItem, Typography} from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ProductsSelect from "../../UI/inputs/ProductsSelect";
import {Link} from "react-router-dom";
import routerNames from "../../../router/routes/routerNames.js";
import Categories from "../../UI/Categories/index.js";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import ModalLogin from "../../ModalsAuth/ModalLogin/index.js";
import {useDispatch, useSelector} from "react-redux";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HeaderDropdown from "../../UI/HeaderDropdown/index.js";
import Cookies from "js-cookie";
import {useEffect} from "react";
import {getProductList} from "../../../redux/slices/localStorageSlice.js";

const HeaderBottom = () => {

    const {orderList} = useSelector(state => state.localStorage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductList());
    }, [dispatch]);

    const {displayAuthButtons} = useSelector(state => state.modalsAuth);

    const handleLogOut = () => {
        Cookies.remove('LoggedIn');
        window.location.reload();
    };

    return (
        <section style={styles.header}>
            <Container sx={styles.container}>
                <Categories/>
                <div style={styles.wrapper}>
                    <ProductsSelect
                        styles={styles.selector}/>
                </div>
                <div style={styles.wrapperButtonGroup}>
                    {displayAuthButtons ? (
                        <HeaderDropdown
                            title={'Profile'}
                            icon={<AccountCircleIcon fontSize='large'/>}
                            iconStart={true}
                        >
                            <MenuItem sx={styles.menuItem}> <AccountCircleIcon fontSize='small' color='primary'/> My
                                Cabinet</MenuItem>
                            <MenuItem sx={styles.menuItem}><LocalMallIcon fontSize='small' color='success'/> My
                                Orders</MenuItem>
                            <MenuItem sx={styles.menuItem}><Link to={routerNames.pageFavProducts}><FavoriteIcon
                                fontSize='small'
                                color='error'/> Favourite</Link></MenuItem>
                            <MenuItem sx={styles.menuItem}><LogoutIcon fontSize='small' onClick={handleLogOut}
                                                                       color='error'/>
                                Logout</MenuItem>
                        </HeaderDropdown>
                    ) : (
                        <ModalLogin button={
                            <Button sx={styles.buttonLogIn}
                                    variant="contained"><LoginOutlinedIcon/>
                                <Typography variant={'h6'}>LogIn</Typography></Button>
                        }/>
                    )}


                    <div className="w-[1px] h-9" style={styles.separator}/>
                    <Link to={routerNames.pageFavProducts}>
                        <Button sx={styles.buttonFav} variant="contained"><FavoriteBorderIcon/></Button></Link>
                    <Link to={routerNames.pageCart}>
                        <Button
                            sx={styles.buttonCart}
                            variant="contained">
                            <ShoppingCartOutlinedIcon/>
                            {orderList.length !== 0 && <span style={styles.cartItemCounter}>{orderList.length}</span>}

                            <Typography variant={'h6'}>Cart </Typography>
                        </Button>
                    </Link>

                </div>
            </Container>
        </section>

    )
}

export default HeaderBottom;