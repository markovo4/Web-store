import {Container, Typography} from "@mui/material";
import Product from "../../UI/cards/Product";
import {useGetAllProductsByCategoryQuery} from "../../../redux/productsApi/productsApi.js";

const Electronics = () => {
    const electronics = useGetAllProductsByCategoryQuery('electronics');
    return (
        <section>
            <Container>
                <Typography variant={'h4'} component={'h4'}>Electronics</Typography>
                <div style={{display: 'flex'}}>
                    {electronics.data && electronics.data.map((product, index) => {
                        return (
                            <Product
                                image={product.image}
                                price={product.price}
                                title={product.title}
                                body={product.description}
                                itemId={product.id}
                                key={index}
                                rate={product.rating.rate}/>
                        )
                    })}
                </div>

            </Container>
        </section>
    )
}

export default Electronics;