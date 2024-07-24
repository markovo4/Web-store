import {Container, Typography} from "@mui/material";
import Product from "../../UI/cards/Product";
import {useGetAllProductsByCategoryQuery} from "../../../redux/productsApi/productsApi.js";
import {styles} from "./style.js";

const Electronics = () => {
    const electronics = useGetAllProductsByCategoryQuery({category: 'electronics', limit: 4});
    return (
        <section style={styles.section}>
            <Container>
                <Typography
                    variant={'h4'}
                    component={'h4'}
                    sx={styles.title}>
                    Electronics</Typography>

                <div style={{display: 'flex'}}>
                    {electronics.data && electronics.data.map((product, index) => {
                        return (
                            <Product
                                image={product.image}
                                price={product.price}
                                title={product.title}
                                itemId={product.id}
                                key={index}
                                rate={product.rating.rate}
                                count={product.rating.count}
                            />
                        )
                    })}
                </div>

            </Container>
        </section>
    )
}

export default Electronics;