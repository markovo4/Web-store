import TemplateBasePage from "../../../templates/TemplateBasePage";
import {Box, Button, Container, Typography} from "@mui/material";
import {styles} from "./styles.js";
import {useNavigate} from "react-router-dom";
import routerNames from "../../routes/routerNames.js";

const PageNotFound = () => {
    const navigate = useNavigate();

    const handleBackToMain = () => {
        navigate(routerNames.pageMain)
    }
    return (
        <TemplateBasePage>
            <section style={styles.section}>
                <Container>
                    <Box sx={styles.container}>
                        <Typography variant='h2' sx={styles.notFound}>
                            Oops! Page not Found
                        </Typography>
                        <Button
                            variant='contained'
                            sx={styles.button}
                            onClick={handleBackToMain}>
                            Go back to main
                        </Button>
                    </Box>
                </Container>
            </section>
        </TemplateBasePage>
    )
}
export default PageNotFound;