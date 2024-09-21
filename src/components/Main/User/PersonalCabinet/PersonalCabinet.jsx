import {Box, Container, List, ListItem, Typography} from "@mui/material";
import {styles} from './styles.js';
import {useEffect, useState} from "react";
import Profile from "../Profile";
import Orders from "../Orders";
import Favourites from "../Favourites";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import routerNames from "../../../../router/routes/routerNames.js";

const PersonalCabinet = () => {
    const navigate = useNavigate();

    const [activeSection, setActiveSection] = useState('profile');

    const handleClick = (e) => {
        const {section} = e.currentTarget.dataset;
        setActiveSection(section);
    };

    const handleLogOut = () => {
        Cookies.remove('LoggedIn');
        window.location.reload();
        navigate(routerNames.pageMain)
    }

    useEffect(() => {
        if (!Cookies.get('LoggedIn')) {
            navigate(routerNames.pageMain)
        }
    }, [window.location])


    const sectionDisplay = () => {
        switch (activeSection) {
            case 'profile':
                return <Profile/>
            case 'orders':
                return <Orders/>;
            case 'favourites':
                return <Favourites/>;
        }
    }

    return (
        <Box sx={styles.section}>
            <Container sx={styles.container}>
                <Box sx={styles.wrapper}>
                    <List sx={styles.optionsList} disablePadding={true}>

                        <ListItem
                            onClick={handleClick}
                            data-section="profile"
                            sx={activeSection === 'profile' ? styles.optionActive : styles.optionsListItem}
                        >
                            <Typography variant="h6" component="span" sx={styles.option}>
                                Profile
                            </Typography>
                        </ListItem>

                        <ListItem
                            onClick={handleClick}
                            data-section="orders"
                            sx={activeSection === 'orders' ? styles.optionActive : styles.optionsListItem}
                        >
                            <Typography variant="h6" component="span" sx={styles.option}>
                                My Orders
                            </Typography>
                        </ListItem>

                        <ListItem
                            onClick={handleClick}
                            data-section="favourites"
                            sx={activeSection === 'favourites' ? styles.optionActive : styles.optionsListItem}
                        >
                            <Typography variant="h6" component="span" sx={styles.option}>
                                Favourites
                            </Typography>
                        </ListItem>

                        <ListItem
                            onClick={handleLogOut}
                            sx={styles.optionsListItemLast}
                        >
                            <Typography variant="h6" component="span" sx={styles.option}>
                                Log out
                            </Typography>
                        </ListItem>

                    </List>
                </Box>
                <Box>
                    {sectionDisplay()}
                </Box>
            </Container>
        </Box>
    );
};

export default PersonalCabinet;
