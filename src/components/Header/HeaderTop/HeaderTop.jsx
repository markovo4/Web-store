import {styles} from "./styles.js";
import {Button, Container, List, ListItem, MenuItem, Typography} from "@mui/material";
import CitiesSelect from "../../UI/inputs/CitiesSelect";
import Logo from "../../../assets/icons/Logo";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import routerNames from "../../../router/routes/routerNames.js";
import {Link} from "react-router-dom";
import {useFormik} from "formik";
import {setCity} from "../../../redux/slices/headerCitySlice.js";
import cities from "../../../assets/cities/cities.js";
import HeaderDropdown from "../../UI/HeaderDropdown/index.js";
import {KeyboardArrowDownSharp} from "@mui/icons-material";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';
import SendIcon from '@mui/icons-material/Send';
import ModalRegister from "../../ModalsAuth/ModalRegister/index.js";
import LogoutIcon from '@mui/icons-material/Logout';

const HeaderTop = () => {
    const {displayAuthButtons} = useSelector(state => state.modalsAuth);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const dispatch = useDispatch();
    const {city} = useSelector(state => state.headerCity);

    const defaultCity = cities.find(c => c.city === city) || null;

    const formik = useFormik({
        initialValues: {city: defaultCity},
    });


    useEffect(() => {
        setIsLoggedIn(!!displayAuthButtons);
    }, [displayAuthButtons]);

    useEffect(() => {
        dispatch(setCity(formik.values.city ? formik.values.city.city : ''))
    }, [formik.values.city, dispatch])

    const handleLogOut = () => {
        Cookies.remove('LoggedIn');
        setIsLoggedIn(false);
        window.location.reload();
    };


    return (
        <section style={styles.header}>
            <Container sx={styles.container}>
                <div style={styles.wrapper}>
                    <Link to={routerNames.pageMain}>
                        <Logo/>
                    </Link>
                    <CitiesSelect
                        styles={styles.selector}
                        value={formik.values.city}
                        defaultValue={defaultCity}
                        onChange={formik.setFieldValue}
                        header={true}
                    />
                </div>
                {window.location.pathname === routerNames.pageCart || window.location.pathname === routerNames.pageCheckout ? (
                    <List sx={styles.navList}>
                        <ListItem sx={styles.liPhone}>
                            <Typography sx={styles.phoneNumber}>
                                Free across Ukraine: <a href={'tel:+380-800-303-505'}
                                                        style={styles.number}>0-800-303-505</a>
                            </Typography>
                        </ListItem>

                        <ListItem sx={styles.liPhone}>
                            <div className="w-[1px] h-5 bg-gray-300"/>
                            <Typography sx={styles.phoneNumberLast}>
                                Free across Kyiv: <a href={'tel:+38044-39-39-505'}
                                                     style={styles.number}>044-39-39-505</a>
                            </Typography>
                        </ListItem>

                    </List>
                ) : (
                    <List sx={styles.navList}>
                        <ListItem sx={styles.li}>
                            <Link to={'/#'}>
                                <Typography sx={styles.discounts}>
                                    Discounts
                                </Typography>
                            </Link>
                        </ListItem>

                        <ListItem sx={styles.li}>
                            <Typography sx={styles.giftCards}>
                                Gift Cards
                            </Typography>
                        </ListItem>

                        <ListItem sx={styles.li}>
                            <Link to={'/#'}>
                                <Typography sx={styles.giftCards}>
                                    Stores
                                </Typography>
                            </Link>

                        </ListItem>

                        <ListItem sx={styles.liMore}>
                            <div className="w-[1px] h-12 bg-gray-300"/>
                            <HeaderDropdown
                                title={'More'}
                                icon={<KeyboardArrowDownSharp/>}
                            >
                                <MenuItem sx={styles.menuItem}><Typography
                                    variant='span'>Delivery</Typography></MenuItem>
                                <MenuItem sx={styles.menuItem}><Typography variant='span'>Refund</Typography></MenuItem>
                                <MenuItem sx={styles.menuItem}><Typography
                                    variant='span'>Trade-in</Typography></MenuItem>
                                <MenuItem sx={styles.menuItem}><Typography variant='span'>Blog</Typography></MenuItem>
                                <MenuItem sx={styles.menuItem}><Typography variant='span'>COMFY
                                    Help</Typography></MenuItem>
                            </HeaderDropdown>
                        </ListItem>

                        <ListItem sx={styles.liContact}>
                            <div className="w-[1px] h-12 bg-gray-300"/>
                            <HeaderDropdown
                                title={'Contact Us'}
                                icon={<PhoneInTalkIcon/>}
                            >
                                <MenuItem sx={styles.menuItem}> <NotListedLocationIcon fontSize='small'
                                                                                       color='error'/> |
                                    Help
                                    Center</MenuItem>
                                <MenuItem sx={styles.menuItem}><ChatOutlinedIcon fontSize='small' color='success'/> |
                                    Live
                                    Chat</MenuItem>
                                <MenuItem sx={styles.menuItem}><SendOutlinedIcon fontSize='small' color='primary'/> |
                                    Messenger</MenuItem>
                                <MenuItem sx={styles.menuItem}><WifiCalling3OutlinedIcon fontSize='small'
                                                                                         color='secondary'/> |
                                    Viber</MenuItem>
                                <MenuItem sx={styles.menuItem}><SendIcon fontSize='small' color='primary'/> |
                                    Telegram</MenuItem>
                            </HeaderDropdown>
                        </ListItem>
                        <ListItem sx={styles.liContact}>
                            <div className="w-[1px] h-12 bg-gray-300"/>
                            {isLoggedIn ? (
                                <Button
                                    onClick={handleLogOut}
                                    sx={styles.button}
                                    variant="contained"
                                    endIcon={<LogoutIcon/>}>
                                    <Typography
                                        variant='h6'>Logout
                                    </Typography>
                                </Button>
                            ) : (
                                <ModalRegister
                                    button={<Button sx={styles.button} variant="contained"><Typography variant='h6'>Sign
                                        up</Typography></Button>}/>
                            )}
                        </ListItem>
                    </List>
                )}
            </Container>
        </section>
    );
};

export default HeaderTop;
