import {styles} from "./styles.js";
import {Button, Container} from "@mui/material";
import CitiesSelect from "../../UI/inputs/CitiesSelect";
import Logo from "../../../assets/icons/Logo";

const HeaderTop = () => {
    return (
        <section style={styles.header}>
            <Container sx={styles.container}>
                <div style={styles.wrapper}>
                    <Logo/>
                    <CitiesSelect
                        styles={styles.selector}/>
                </div>
                <div style={styles.wrapper}>
                    <Button sx={styles.button} variant="contained">Log in</Button>
                    <Button sx={styles.button} variant="contained">Sign up</Button>
                </div>
            </Container>
        </section>
    );
}

export default HeaderTop;
