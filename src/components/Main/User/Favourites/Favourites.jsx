import {Box, Container, Typography} from "@mui/material";
import {styles} from "./styles.js";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getFavProductList} from "../../../../redux/slices/localStorageSlice.js";
import ProductInList from "../../../UI/cards/ProductInList/index.js";

const Favourites = () => {
    const dispatch = useDispatch();
    const {favouriteList} = useSelector(state => state.localStorage);

    useEffect(() => {
        dispatch(getFavProductList())
    }, [dispatch])
    return (
        <Box sx={styles.wrapper}>
            <Container>
                <Box sx={styles.container}>
                    {favouriteList && favouriteList.map((product, index) => {
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
                {favouriteList.length === 0 && <Box sx={styles.container}>
                    <Typography variant='h4' component='span' sx={styles.infoText}>
                        No Favorites!
                    </Typography>
                </Box>}


            </Container>
        </Box>
    )
}

export default Favourites;