import {Box, Container, List, ListItem, Typography} from "@mui/material";
import {styles} from './styles.js';
import {useState} from "react";
import Profile from "../Profile";
import Orders from "../Orders";
import Bonuses from "../Bonuses";

const PersonalCabinet = () => {
    const [activeSection, setActiveSection] = useState('profile');

    const handleClick = (e) => {
        const {section} = e.currentTarget.dataset;
        setActiveSection(section);
    };

    const sectionDisplay = () => {
        switch (activeSection) {
            case 'profile':
                return <Profile/>
            case 'orders':
                return <Orders/>;
            case 'bonuses':
                return <Bonuses/>;
        }
    }

    return (
        <Box sx={styles.section}>
            <Container>
                <Box sx={styles.wrapper}>
                    <List sx={styles.optionsList} disablePadding={true}>

                        <ListItem
                            onClick={handleClick}
                            data-section="profile"
                            sx={activeSection === 'profile' ? styles.optionActive : styles.optionsListItem}
                        >
                            <Typography variant="h6" component="span" sx={styles.option}>
                                My Profile
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
                            data-section="bonuses"
                            sx={activeSection === 'bonuses' ? styles.optionActive : styles.optionsListItem}
                        >
                            <Typography variant="h6" component="span" sx={styles.option}>
                                Bonuses
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
