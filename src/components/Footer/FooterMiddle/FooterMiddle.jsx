import {Box, Button, Container, List, ListItem, Typography} from "@mui/material";
import ComfyQRC from "../../../assets/icons/comfy_QRC";
import FormInput from "../../UI/inputs/FormInput";
import LoveEmoji from "../../../assets/icons/LoveEmoji";
import {useFormik} from "formik";
import subscribeValidation from "../../../utils/validationSchemas/subscribeValidation";
import FooterInfoList from "../../UI/footerInfo/FooterInfoList";
import {comfy, customerHelp, services} from '../../../assets/footerContent/footerContent';
import {styles} from "./styles";
import stylesSCSS from './stylesSCSS.module.scss';
import FooterInfoConsul from "../../UI/footerInfo/FooterInfoConsul/index.js";

const FooterMiddle = () => {
    const formik = useFormik({
        initialValues: {email: ''},
        validationSchema: subscribeValidation,
        onSubmit: (values, {resetForm}) => {
            resetForm();
        },
    });

    return (
        <Box sx={styles.section}>
            <Container sx={styles.container}>
                <List sx={styles.list}>
                    {/* QR Code and Subscription Form */}
                    <ListItem sx={styles.liForm}>
                        <Box sx={styles.qRCodeContainer}>
                            <ComfyQRC/>
                            <Typography variant='p' component='p' sx={styles.qRCodeText}>
                                {`It's more convenient in the app! Download COMFY on your smartphone.`}
                            </Typography>
                        </Box>
                        <Box sx={styles.formContainer}>
                            <form className={stylesSCSS.form} onSubmit={formik.handleSubmit}>
                                <Typography variant='h6' component="span" sx={styles.formTitle}>
                                    Subscribe for discounts!
                                </Typography>
                                <Typography sx={styles.formSubtitle}>
                                    No worries, we do not spam <LoveEmoji/>
                                </Typography>
                                <FormInput
                                    placeholder='email@email.com'
                                    value={formik.values.email.trim()}
                                    touched={formik.touched.email}
                                    error={formik.errors.email}
                                    onChange={formik.handleChange}
                                    label='Email'
                                    name='email'
                                    type='text'
                                />
                                <Button variant='contained' type='submit' sx={styles.emailSubmit}>
                                    Send
                                </Button>
                            </form>
                        </Box>
                    </ListItem>

                    {/* Footer Info Lists */}
                    <ListItem sx={styles.li}>
                        <FooterInfoList
                            title='Comfy'
                            content={comfy}
                        />
                    </ListItem>
                    <ListItem sx={styles.li}>
                        <FooterInfoList
                            title='Services & Conditions'
                            content={services}
                        />
                    </ListItem>
                    <ListItem sx={styles.li}>
                        <FooterInfoList
                            title='Customer Help'
                            content={customerHelp}
                        />
                    </ListItem>
                    <FooterInfoConsul/>
                </List>
            </Container>
        </Box>
    );
};

export default FooterMiddle;
