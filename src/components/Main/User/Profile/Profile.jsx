import {Box, Button, Container, List, ListItem, Typography} from "@mui/material";
import {styles} from './styles.js';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
    getCurrentUser,
    setCurrentUser,
    setUser,
    updateFavUserProductList
} from "../../../../redux/slices/localStorageSlice.js";
import {useFormik} from "formik";
import FormInput from "../../../UI/inputs/FormInput/index.js";
import {formatPhoneNumber} from "../../../../utils/functions/functions.js";
import profileInfoEditValidation from "../../../../utils/validationSchemas/profileInfoEditValidation.js";
import EditIcon from '@mui/icons-material/Edit';

const Profile = () => {
    const dispatch = useDispatch();
    const {currentUser, favouriteUserList = []} = useSelector(state => state.localStorage);
    const [isEdit, setIsEdit] = useState(false);

    const favouriteUserProducts = favouriteUserList
        .filter(user => user.email === currentUser.email)
        .flatMap(user => user.productsList || []);

    const handleClick = () => setIsEdit(prev => !prev);

    const handlePhoneNumberChange = (event) => {
        const {value} = event.target;
        formik.setFieldValue('phoneNumber', formatPhoneNumber(value));
    };

    useEffect(() => {
        if (!currentUser) {
            dispatch(getCurrentUser());
        }
    }, [dispatch, currentUser]);

    const formik = useFormik({
        initialValues: {
            firstName: currentUser?.firstName || '',
            lastName: currentUser?.lastName || '',
            phoneNumber: currentUser?.phoneNumber || '',
            email: currentUser?.email || '',
            favProducts: currentUser?.favProducts || [],
        },
        enableReinitialize: true,
        validationSchema: profileInfoEditValidation,
        onSubmit: (values) => {
            const newUserInfo = {
                firstName: values.firstName.trim(),
                lastName: values.lastName.trim(),
                phoneNumber: values.phoneNumber.trim(),
                email: values.email.trim(),
            };
            dispatch(setCurrentUser({...currentUser, ...newUserInfo}));
            dispatch(setUser({...currentUser, ...newUserInfo}))
            dispatch(updateFavUserProductList({
                newEmail: values.email.trim(),
                oldEmail: currentUser.email,
                productsList: favouriteUserProducts
            }))
            setIsEdit(false);
        }
    });

    return (
        <Box sx={styles.wrapper}>
            <Container>
                {currentUser && (
                    <>
                        {!isEdit ? (
                            <List>
                                <ListItem sx={styles.infoEditGroup}>
                                    <Button variant={'contained'} sx={styles.editButton}
                                            onClick={handleClick}>Edit Profile<EditIcon fontSize={'medium'}/></Button>
                                </ListItem>
                                <ListItem>
                                    <Typography variant='h5' component='span' sx={styles.infoTextTitle}>
                                        Your Contact Information
                                    </Typography>
                                </ListItem>
                                <ListItem sx={styles.infoGroup}>
                                    <Typography variant='h6' component='span' sx={styles.infoText}>
                                        {`${currentUser.firstName} ${currentUser.lastName}`}
                                    </Typography>
                                </ListItem>
                                <ListItem sx={styles.infoGroup}>
                                    <Typography variant='h6' component='span' sx={styles.infoText}>
                                        {currentUser.phoneNumber}
                                    </Typography>
                                </ListItem>
                                <ListItem sx={styles.infoGroup}>
                                    <Typography variant='h6' component='span' sx={styles.infoText}>
                                        {currentUser.email}
                                    </Typography>
                                </ListItem>
                            </List>
                        ) : (
                            <form onSubmit={formik.handleSubmit}>
                                <Box sx={styles.formContainer}>
                                    <FormInput
                                        onChange={formik.handleChange}
                                        value={formik.values.firstName}
                                        touched={formik.touched.firstName}
                                        error={formik.errors.firstName}
                                        label="First Name:"
                                        name="firstName"
                                        id="firstName"
                                        type="text"
                                    />
                                    <FormInput
                                        onChange={formik.handleChange}
                                        value={formik.values.lastName}
                                        touched={formik.touched.lastName}
                                        error={formik.errors.lastName}
                                        label="Last Name:"
                                        name="lastName"
                                        id="lastName"
                                        type="text"
                                    />
                                    <FormInput
                                        onChange={handlePhoneNumberChange}
                                        value={formik.values.phoneNumber}
                                        touched={formik.touched.phoneNumber}
                                        error={formik.errors.phoneNumber}
                                        label="Phone Number:"
                                        name="phoneNumber"
                                        id="phoneNumber"
                                        type="tel"
                                    />
                                    <FormInput
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        touched={formik.touched.email}
                                        error={formik.errors.email}
                                        label="Email:"
                                        name="email"
                                        id="email"
                                        type="text"
                                    />
                                    <Button type="submit" sx={styles.signUpButton} variant="contained">
                                        Save
                                    </Button>
                                </Box>
                            </form>
                        )}
                    </>
                )}
            </Container>
        </Box>
    );
};

export default Profile;
