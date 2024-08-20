import {styles} from "./styles.js";
import {Box, Container, List, ListItem, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getRecentlyViewed} from "../../../redux/slices/localStorageSlice.js";
import ProductInList from "../../UI/cards/ProductInList/index.js";

const PreviouslyViewed = () => {
    const {recentlyViewed} = useSelector(state => state.localStorage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecentlyViewed())
    }, [dispatch])
    return (
        <Box sx={styles.sectionViewed}>
            <Container>
                <Box sx={styles.container}>
                    <Typography
                        variant='h4'
                        component={'h4'}
                        sx={styles.title}>
                        Recently Viewed</Typography>

                    <Box sx={styles.list}>
                        {recentlyViewed.map((product, index) => {
                            return (
                                <ProductInList
                                    image={product.image}
                                    price={product.price}
                                    title={product.title}
                                    itemId={product.id}
                                    key={index}
                                    rate={product.rating}
                                    count={product.count}
                                    description={product.description}
                                    additionalComponent={true}
                                />
                            )
                        })}
                    </Box>

                    <List sx={styles.slideList}>
                        {recentlyViewed.map((product, index) => {
                            return (
                                <ListItem key={product.id} sx={styles.slideItem}>
                                    <ProductInList
                                        image={product.image}
                                        price={product.price}
                                        title={product.title}
                                        itemId={product.id}
                                        key={index}
                                        rate={product.rating}
                                        count={product.count}
                                        description={product.description}
                                        additionalComponent={true}
                                    />
                                </ListItem>
                            )
                        })}
                    </List>
                </Box>
            </Container>
        </Box>
    )
}

export default PreviouslyViewed;