import {Container, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getFavProductList} from "../../../redux/slices/localStorageSlice.js";
import ProductInList from "../../UI/cards/ProductInList/index.js";
import {styles} from "./styles.js";

const FavProductsDisplay = () => {
    const dispatch = useDispatch();
    const {favouriteList} = useSelector(state => state.localStorage);
    useEffect(() => {
        dispatch(getFavProductList())
    }, [])
    return (
        <section style={{backgroundColor: '#eeeeee'}}>
            <Container>
                <Typography
                    variant={'h4'}
                    component={'h4'}
                    sx={styles.title}>
                    Favourite Products</Typography>
                <ul className='flex place-items-center flex-wrap gap-y-5'>
                    {favouriteList && favouriteList.map((product, index) => (
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
                    ))}
                </ul>
            </Container>
        </section>
    )
}

export default FavProductsDisplay;