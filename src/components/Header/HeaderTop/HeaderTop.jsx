import {styles} from "./styles.js";
import {Button, Container} from "@mui/material";

const HeaderTop = () => {
    return (
        <header style={styles.header}>
            <Container sx={styles.container}>
                <div style={styles.wrapper}>
                    <Button sx={styles.button}>Log in</Button>
                    <Button sx={styles.button}>Sign up</Button>
                </div>
            </Container>
        </header>
    );
}

export default HeaderTop;
