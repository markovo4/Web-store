import CartItem from "../../UI/cards/CartItem";
import {Box, Container, List} from "@mui/material";
import {styles} from "./styles.js";
import {useGetAllProductsQuery} from "../../../redux/productsApi/productsApi.js";

const CartList = () => {
    const productsTEST = useGetAllProductsQuery();
    return (
        <section style={styles.section}>
            <Container sx={styles.container}>
                <div style={styles.wrapper}>
                    <List sx={styles.productsList}>
                        {productsTEST.data && productsTEST.data.map((product, index) => {
                            return (
                                <CartItem
                                    key={index}
                                    title={product.title}
                                    image={product.image}
                                    price={product.price}
                                    id={product.id}
                                />
                            )
                        })}
                    </List>

                    <Box sx={styles.placeOrder}>
                        <div>Hello World</div>
                    </Box>

                </div>
            </Container>
        </section>
    )
}

export default CartList;