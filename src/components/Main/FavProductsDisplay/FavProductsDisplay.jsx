import {Box, Container, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getFavProductList, getFavUserProductList} from "../../../redux/slices/localStorageSlice.js";
import ProductInList from "../../UI/cards/ProductInList/index.js";
import {styles} from "./styles.js";
import {useNavigate} from "react-router-dom";
import routerNames from "../../../router/routes/routerNames.js";
import Cookies from "js-cookie";

const FavProductsDisplay = () => {
    const dispatch = useDispatch();
    const {favouriteList = [], favouriteUserList = [], currentUser = {}} = useSelector(state => state.localStorage);
    const navigate = useNavigate();

    const favouriteUserProducts = favouriteUserList
        .filter(user => user.email === currentUser.email)
        .flatMap(user => user.productsList || []);

    useEffect(() => {
        dispatch(getFavProductList())
        dispatch(getFavUserProductList())
    }, [dispatch])

    const [favList, setFavList] = useState(Cookies.get('LoggedIn') ? favouriteUserProducts : favouriteList)

    useEffect(() => {
        const updatedFavList = Cookies.get('LoggedIn') ? favouriteUserProducts : favouriteList;

        setFavList((prev) => {
            if (prev !== updatedFavList) {
                return updatedFavList;
            }
            return prev;
        });

        if (favList < 1) {
            navigate(routerNames.pageMain)
        }

    }, [Cookies.get('LoggedIn'), favouriteUserList, currentUser.email, favouriteList]);

    return (
        <Box sx={styles.section}>
            <Container>
                <Typography
                    variant='h4'
                    component={'h4'}
                    sx={styles.title}>
                    Favourite Products</Typography>
                <Box sx={styles.container}>
                    {favList && favList.map((product, index) => {
                        return (
                            <ProductInList
                                image={product.image}
                                price={product.price}
                                title={product.title}
                                itemId={product.id}
                                key={index}
                                rate={product.rating}
                                count={product.count}
                            />
                        )

                    })}
                </Box>
            </Container>
        </Box>
    )
}

export default FavProductsDisplay;