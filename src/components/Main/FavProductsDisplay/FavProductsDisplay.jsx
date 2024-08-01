import {Container} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProductList} from "../../../redux/slices/localStorageSlice.js";
import ProductInList from "../../UI/cards/ProductInList/index.js";

const FavProductsDisplay = () => {
    const dispatch = useDispatch();
    const {orderList} = useSelector(state => state.localStorage);
    useEffect(() => {
        dispatch(getProductList())
    }, [])
    return (
        <section style={{backgroundColor: '#eeeeee'}}>
            <Container>
                <ul className='flex place-items-center flex-wrap gap-y-5'>
                    {orderList && orderList.map((product, index) => (
                        <ProductInList
                            image={product.image}
                            price={product.price}
                            title={product.title}
                            itemId={product.id}
                            key={index}
                            rate={product.rating}
                            count={product.count}
                        />
                    ))}
                </ul>
            </Container>
        </section>
    )
}

export default FavProductsDisplay;