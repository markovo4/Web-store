import {styles} from "./styles.js";
import {Button, Container} from "@mui/material";
import CountrySelect from "../../UI/inputs/CountrySelect";
import Logo from "../../../assets/icons/Logo";

const HeaderTop = () => {
    return (
        <header style={styles.header}>
            <Container sx={styles.container}>
                <div style={styles.wrapper}>
                    <Logo/>
                    <CountrySelect
                        styles={styles.selector}/>
                </div>
                <div style={styles.wrapper}>
                    <Button sx={styles.button} variant="contained">Log in</Button>
                    <Button sx={styles.button} variant="contained">Sign up</Button>
                </div>
            </Container>
        </header>
    );
}

export default HeaderTop;
