import {styles} from "./styles.js";
import {Avatar, Button, Container} from "@mui/material";
import CitiesSelect from "../../UI/inputs/CitiesSelect";
import Logo from "../../../assets/icons/Logo";
import ModalRegister from "../../ModalsAuth/ModalRegister";
import ModalLogin from "../../ModalsAuth/ModalLogin";
import {useSelector} from "react-redux";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LogoutIcon from '@mui/icons-material/Logout';
import {useEffect, useState} from "react";
import Cookies from "js-cookie";

const HeaderTop = () => {
    const {displayAuthButtons} = useSelector(state => state.modalsAuth);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(!!displayAuthButtons);
    }, [displayAuthButtons]);

    const handleLogOut = () => {
        Cookies.remove('LoggedIn');
        setIsLoggedIn(false);
    };

    return (
        <section style={styles.header}>
            <Container sx={styles.container}>
                <div style={styles.wrapper}>
                    <Logo/>
                    <CitiesSelect styles={styles.selector}/>
                </div>
                {!isLoggedIn ? (
                    <div style={styles.wrapper}>
                        <ModalRegister button={<Button sx={styles.button} variant="contained">Sign up</Button>}/>
                        <div className="w-[1px] h-16 bg-gray-300"/>
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
                        <div className="w-[1px] h-16 bg-gray-300"/>
                        <Avatar/>
                        <div className="w-[1px] h-16 bg-gray-300"/>
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
            </Container>
        </section>
    );
};

export default HeaderTop;
