import {Container} from "@mui/material";
import Benefit from "../../UI/cards/Benefit";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import UTurnLeftIcon from '@mui/icons-material/UTurnLeft';
import {styles} from "./styles.js";

const FooterTop = () => {
    return (
        <section style={styles.footerTop}>
            <Container>
                <ul style={styles.list}>
                    <Benefit
                        title={'Delivery'}
                        body={'Pickup from the Comfy store, delivery to the address or to the ' +
                            'Novaya Poshta and Meest branches'}>
                        <LocalShippingIcon color="success"/></Benefit>
                    <Benefit
                        title={'Warranty'}
                        body={'Certified equipment with an official guarantee from the ' +
                            'manufacturer.'}>
                        <VerifiedUserIcon color="success"/></Benefit>
                    <Benefit
                        title={'Payment'}
                        body={'You can pay for your purchase in cash, by card or by bank transfer.'}>
                        <AccountBalanceIcon color="success"/></Benefit>
                    <Benefit
                        title={'Refund Policy'}
                        body={'Products can be returned within 14 days of purchase, in accordance ' +
                            'with applicable law.'}>
                        <UTurnLeftIcon color="success"/></Benefit>
                </ul>
            </Container>

        </section>
    )
}

export default FooterTop;