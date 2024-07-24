import {Container, Typography} from "@mui/material";
import Product from "../../UI/cards/Product";
import {useGetAllProductsByCategoryQuery} from "../../../redux/productsApi/productsApi.js";
import {styles} from "./style.js";

const Jewelery = () => {
    const jewelery = useGetAllProductsByCategoryQuery({category: 'jewelery', limit: 4});
    return (
        <section style={styles.section}>
            <Container>
                <Typography
                    variant={'h4'}
                    component={'h4'}
                    sx={styles.title}>
                    Jewelery</Typography>

                <div style={{display: 'flex'}}>
                    {jewelery.data && jewelery.data.map((product, index) => {
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

export default Jewelery;