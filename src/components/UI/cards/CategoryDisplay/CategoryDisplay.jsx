import {Box, Container, Typography} from "@mui/material";
import {styles} from "./style.js";
import ProductInList from "../ProductInList/index.js";
import {useGetAllProductsByCategoryQuery} from "../../../../redux/productsApi/productsApi.js";
import {useLocation} from "react-router-dom";

const CategoryDisplay = () => {
    const location = useLocation();
    const category = decodeURIComponent(location.pathname.slice(12));
    const title = category.charAt(0).toUpperCase() + category.slice(1);
    const clothesMale = useGetAllProductsByCategoryQuery({category: category, limit: 10});

    return (
        <Box sx={styles.section}>
            <Container>
                <Typography
                    variant='h4'
                    component={'h4'}
                    sx={styles.title}>
                    {title}</Typography>

                <Box sx={styles.productsContainer}>
                    {clothesMale.data && clothesMale.data.map((product, index) => {
                        return (
                            <ProductInList
                                image={product.image}
                                price={product.price}
                                title={product.title}
                                itemId={product.id}
                                key={index}
                                rate={product.rating.rate}
                                count={product.rating.count}
                                description={product.description}
                            />
                        )
                    })}
                </Box>
            </Container>
        </Box>
    )
}

export default CategoryDisplay;
