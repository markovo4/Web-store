import {styles} from "./styles.js";
import {Container, Typography} from "@mui/material";
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
        <section style={styles.section}>
            <Container>
                <Typography
                    variant='h4'
                    component={'h4'}
                    sx={styles.title}>
                    Recently Viewed</Typography>

                <div style={{display: 'flex'}}>
                    {recentlyViewed && recentlyViewed.map((product, index) => {
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
                            />
                        )
                    })}
                </div>

            </Container>
        </section>
    )
}

export default PreviouslyViewed;