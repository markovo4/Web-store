import {styles} from "./styles.js";
import {Avatar, Button, Container, Typography} from "@mui/material";
import CitiesSelect from "../../UI/inputs/CitiesSelect";
import Logo from "../../../assets/icons/Logo";
import ModalRegister from "../../ModalsAuth/ModalRegister";
import ModalLogin from "../../ModalsAuth/ModalLogin";
import {useSelector} from "react-redux";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LogoutIcon from '@mui/icons-material/Logout';
import React, {useEffect, useState} from "react";
import Cookies from "js-cookie";
import routerNames from "../../../router/routes/routerNames.js";
import {Link} from "react-router-dom";
import {useFormik} from "formik";
import deliveryOptionsValidation from "../../../utils/validationSchemas/deliveryOptionsValidation.js";

const HeaderTop = () => {
    const {displayAuthButtons} = useSelector(state => state.modalsAuth);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(!!displayAuthButtons);
    }, [displayAuthButtons]);

    const handleLogOut = () => {
        Cookies.remove('LoggedIn');
        setIsLoggedIn(false);
        window.location.reload();
    };
    const formik = useFormik({
        initialValues: {city: null},
        validationSchema: deliveryOptionsValidation,
        onSubmit: (values, {resetForm}) => {
            resetForm();
        }
    })
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
                        onChange={formik.handleChange}
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
