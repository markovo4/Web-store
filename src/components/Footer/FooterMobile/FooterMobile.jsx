import {Box, Container, List, ListItem, Typography} from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {styles} from "./styles.js";
import {Link} from "react-router-dom";
import routerNames from "../../../router/routes/routerNames.js";
import {useEffect, useState} from "react";
import {useGetAllCategoriesQuery} from "../../../redux/productsApi/productsApi.js";
import {useDispatch, useSelector} from "react-redux";
import {getProductList} from "../../../redux/slices/localStorageSlice.js";


const FooterMobile = () => {

    const {orderList} = useSelector(state => state.localStorage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductList());
    }, [dispatch]);

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const {data: categories} = useGetAllCategoriesQuery();
    const [catalogOpen, setCatalogOpen] = useState(false);

    const handleToggle = () => {
        setCatalogOpen(!catalogOpen);
    };

    return (
        <Container sx={styles.container}>

            <List sx={catalogOpen ? styles.listCategories : styles.listCategoriesNone}>
                {categories && categories.map((category, index) => (
                    <ListItem key={index} sx={styles.category}>
                        <Link to={`/categories/${category}`} onClick={() => {
                            handleToggle();
                            scrollToTop();
                        }}>
                            <Typography sx={styles.categoryItem}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                                <ArrowForwardIosIcon fontSize='20px'/>
                            </Typography>
                        </Link>
                    </ListItem>
                ))}
            </List>

            <List sx={styles.list}>

                <ListItem sx={styles.li}>

                    <Link to={routerNames.pageMain} onClick={scrollToTop}>
                        <Box sx={styles.li}>
                            <Box>
                                <HomeOutlinedIcon/>
                            </Box>
                            <Typography>
                                Main
                            </Typography>
                        </Box>

                    </Link>
                </ListItem>

                <ListItem sx={styles.li} onClick={handleToggle}>
                    <Box>
                        <GridViewOutlinedIcon/>
                    </Box>
                    <Typography>
                        Catalog
                    </Typography>
                </ListItem>

                <ListItem sx={styles.li}>
                    <Link to={routerNames.pageCart} onClick={scrollToTop}>
                        <Box sx={styles.li}>
                            <Box sx={styles.cart}>
                                <Box sx={orderList.length >= 1 ? styles.cartNotify : styles.cartNotifyNot}></Box>
                                <ShoppingCartOutlinedIcon/>
                            </Box>

                            <Typography>
                                Cart
                            </Typography>
                        </Box>

                    </Link>
                </ListItem>

                <ListItem sx={styles.li}>
                    <Link to={routerNames.pageFavProducts} onClick={scrollToTop}>
                        <Box sx={styles.li}>
                            <Box>
                                <FavoriteBorderOutlinedIcon/>
                            </Box>
                            <Typography>
                                Favourites
                            </Typography>
                        </Box>

                    </Link>
                </ListItem>

            </List>
        </Container>
    );
};

export default FooterMobile;
