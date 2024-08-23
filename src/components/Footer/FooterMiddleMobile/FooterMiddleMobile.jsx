import {useState} from 'react';
import {Box, Button, Collapse, Container, List, ListItem, ListItemButton, Typography} from "@mui/material";
import ComfyQRC from "../../../assets/icons/comfy_QRC";
import FormInput from "../../UI/inputs/FormInput";
import LoveEmoji from "../../../assets/icons/LoveEmoji";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useFormik} from "formik";
import subscribeValidation from "../../../utils/validationSchemas/subscribeValidation";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FooterInfoList from "../../UI/footerInfo/FooterInfoList";
import {comfy, customerHelp, services} from '../../../assets/footerContent/footerContent';
import {styles} from "./styles";
import stylesSCSS from './stylesSCSS.module.scss';
import FooterInfoStructure from "../../UI/footerInfo/FooterInfoStructure";

const FooterMiddleMobile = () => {
    const [expanded, setExpanded] = useState({
        comfy: false,
        services: false,
        customerHelp: false
    });

    const formik = useFormik({
        initialValues: {email: ''},
        validationSchema: subscribeValidation,
        onSubmit: (values, {resetForm}) => {
            resetForm();
        },
    });

    const handleClick = (item) => {
        setExpanded((prev) => ({
            ...prev,
            [item]: !prev[item],
        }));
    };

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


                    <ListItemButton sx={styles.li} onClick={() => handleClick('comfy')}>
                        <Box sx={styles.titleContainer}>
                            <Typography sx={styles.title}>
                                Comfy
                            </Typography>
                            {expanded.comfy ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                        </Box>

                        <Collapse in={expanded.comfy} timeout="auto" unmountOnExit sx={styles.collapse}>
                            <FooterInfoList
                                content={comfy}
                            />
                        </Collapse>
                    </ListItemButton>

                    <ListItemButton sx={styles.li} onClick={() => handleClick('services')}>
                        <Box sx={styles.titleContainer}>
                            <Typography sx={styles.title}>
                                Services & Conditions
                            </Typography>
                            {expanded.services ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                        </Box>

                        <Collapse in={expanded.services} timeout="auto" unmountOnExit sx={styles.collapse}>
                            <FooterInfoList
                                content={services}
                            />
                        </Collapse>
                    </ListItemButton>

                    <ListItemButton sx={styles.li} onClick={() => handleClick('customerHelp')}>
                        <Box sx={styles.titleContainer}>
                            <Typography sx={styles.title}>
                                Customer Help
                            </Typography>
                            {expanded.customerHelp ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                        </Box>

                        <Collapse in={expanded.customerHelp} timeout="auto" unmountOnExit sx={styles.collapse}>
                            <FooterInfoList
                                content={customerHelp}
                            />
                        </Collapse>
                    </ListItemButton>


                    <FooterInfoStructure/>
                </List>
            </Container>
        </Box>
    );
};

export default FooterMiddleMobile;
