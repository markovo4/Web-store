import {Button, Container, Typography} from "@mui/material";
import {styles} from "./styles.js";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from "react-router-dom";
import routerNames from "../../../router/routes/routerNames.js";
import FormCard from "../../UI/cards/FormCard";

const CheckoutForm = () => {
    return (
        <section style={styles.sectionForm}>
            <Container>
                <div className={'flex items-center justify-between pt-4 pb-4'}>
                    <Typography variant={'h5'} component={'p'} sx={styles.checkoutTitle}>
                        Checkout
                    </Typography>
                    <Link to={routerNames.pageMain}>
                        <Button
                            variant={'outlined'}
                            startIcon={<ArrowBackIcon/>}
                            sx={styles.buttonBack}
                        >
                            Back to products
                        </Button>
                    </Link>
                </div>
                <div style={styles.wrapper}>
                    <form>
                        <FormCard formTitle={'Your order'}></FormCard>
                        <FormCard formTitle={'Your order'}></FormCard>
                        <div>Form</div>
                    </form>
                </div>
            </Container>
        </section>
    )
}

export default CheckoutForm;