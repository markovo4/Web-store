import {Box, Container, List, ListItem, Typography} from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {styles} from "./styles.js";
import {Link} from "react-router-dom";
import routerNames from "../../../router/routes/routerNames.js";

const FooterMobile = () => {
    return (
        <Container sx={styles.container}>
            <List sx={styles.list}>

                <ListItem sx={styles.li}>
                    <Box>
                        <HomeOutlinedIcon/>
                    </Box>
                    <Link to={routerNames.pageMain}>
                        <Typography>
                            Main
                        </Typography>
                    </Link>

                </ListItem>

                <ListItem sx={styles.li}>
                    <Box>
                        <GridViewOutlinedIcon/>
                    </Box>
                    <Typography>
                        Catalog
                    </Typography>
                </ListItem>

                <ListItem sx={styles.li}>
                    <Box sx={styles.cart}>
                        <Box sx={styles.cartNotify}></Box>
                        <ShoppingCartOutlinedIcon/>
                    </Box>
                    <Link to={routerNames.pageCart}>
                        <Typography>
                            Cart
                        </Typography>
                    </Link>
                </ListItem>

                <ListItem sx={styles.li}>
                    <Box>
                        <FavoriteBorderOutlinedIcon/>
                    </Box>
                    <Link to={routerNames.pageFavProducts}>
                        <Typography>
                            Favourites
                        </Typography>
                    </Link>
                </ListItem>

            </List>
        </Container>

    )
}

export default FooterMobile;