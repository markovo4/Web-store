import {Box, Container, List, ListItem, Typography} from "@mui/material";
import {styles} from "./styles.js";
import ProductsList from "../ListItemInfo/ProductsList.jsx";

const Orders = () => {
    const date = new Date().toLocaleDateString(); // Format date to display properly

    return (
        <Box sx={styles.wrapper}>
            <Container>
                <List>
                    <ListItem sx={styles.infoGroup}>
                        <Typography variant="h5" component="span">
                            ID
                        </Typography>
                        <Typography variant="h6" component="span" sx={styles.infoText}>
                            Date
                        </Typography>
                        <Typography variant="h6" component="span" sx={styles.infoText}>
                            Action
                        </Typography>
                    </ListItem>
                    {/* Example of a product item */}
                    <ProductsList id="uoyfyfYTF^RD7575" date={date}/>
                </List>
            </Container>
        </Box>
    );
};

export default Orders;
