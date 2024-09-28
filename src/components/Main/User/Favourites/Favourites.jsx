import {Box, Container, Typography} from "@mui/material";
import {styles} from "./styles.js";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getFavUserProductList} from "../../../../redux/slices/localStorageSlice.js";
import ProductInList from "../../../UI/cards/ProductInList/index.js";

const Favourites = () => {
    const dispatch = useDispatch();
    const {favouriteUserList = [], currentUser = {}} = useSelector(state => state.localStorage);

    useEffect(() => {
        dispatch(getFavUserProductList())
    }, [dispatch])

    const favouriteUserProducts = favouriteUserList
        .filter(user => user.email === currentUser.email)
        .flatMap(user => user.productsList || []);

    return (
        <Box sx={styles.wrapper}>
            <Container>
                <Typography variant="h5" component="span" sx={styles.infoTextTitle}>
                    Favourite Items
                </Typography>
                <Box sx={styles.container}>
                    {favouriteUserProducts && favouriteUserProducts.map((product, index) => {
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
                {favouriteUserProducts.length === 0 && <Box sx={styles.container}>
                    <Typography variant='h4' component='span' sx={styles.infoText}>
                        No Favorites!
                    </Typography>
                </Box>}


            </Container>
        </Box>
    )
}

export default Favourites;