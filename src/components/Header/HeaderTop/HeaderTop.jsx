import {styles} from "./styles.js";
import {Avatar, Button, Container, Typography} from "@mui/material";
import CitiesSelect from "../../UI/inputs/CitiesSelect";
import Logo from "../../../assets/icons/Logo";
import ModalRegister from "../../ModalsAuth/ModalRegister";
import ModalLogin from "../../ModalsAuth/ModalLogin";
import {useDispatch, useSelector} from "react-redux";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LogoutIcon from '@mui/icons-material/Logout';
import React, {useEffect, useState} from "react";
import Cookies from "js-cookie";
import routerNames from "../../../router/routes/routerNames.js";
import {Link} from "react-router-dom";
import {useFormik} from "formik";
import deliveryOptionsValidation from "../../../utils/validationSchemas/deliveryOptionsValidation.js";
import {setCity} from "../../../redux/slices/headerCitySlice.js";
import cities from "../../../assets/cities/cities.js";

const HeaderTop = () => {
    const {displayAuthButtons} = useSelector(state => state.modalsAuth);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const dispatch = useDispatch();
    const {city} = useSelector(state => state.headerCity);

    const defaultCity = cities.find(c => c.city === city) || null;

    const formik = useFormik({
        initialValues: {city: defaultCity},
        validationSchema: deliveryOptionsValidation,
        onSubmit: (values, {resetForm}) => {
            resetForm();
        }
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
                    {formik.touched.city && formik.errors.city ? (
                        <Typography sx={{color: 'red'}}>
                            {formik.errors.city}
                        </Typography>
                    ) : null}
                </div>
                {window.location.pathname !== routerNames.pageCart &&
                    <React.Fragment>
                        {!isLoggedIn ? (
                            <div style={styles.wrapper}>
                                <ModalRegister
                                    button={<Button sx={styles.button} variant="contained">Sign up</Button>}/>
                                <div className="w-[1px] h-12 bg-gray-300"/>
                                <ModalLogin button={<Button sx={styles.button} variant="contained">Log in</Button>}/>
                            </div>
                        ) : (
                            <div style={styles.wrapper}>
                                <Button
                                    sx={styles.button}
                                    variant="contained"
                                    endIcon={<ArrowForwardIcon/>}
                                >
                                    Your Cabinet
                                </Button>
                                <div className="w-[1px] h-12 bg-gray-300"/>
                                <Avatar/>
                                <div className="w-[1px] h-12 bg-gray-300"/>
                                <Button
                                    sx={styles.buttonLogOut}
                                    onClick={handleLogOut}
                                    variant="contained"
                                    endIcon={<LogoutIcon/>}
                                >
                                    Log Out
                                </Button>
                            </div>
                        )}
                    </React.Fragment>}
            </Container>
        </section>
    );
};

export default HeaderTop;
