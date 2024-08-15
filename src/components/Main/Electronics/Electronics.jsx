import {Box, CircularProgress, Container, Typography} from "@mui/material";
import ProductInList from "../../UI/cards/ProductInList";
import {useGetAllProductsByCategoryQuery} from "../../../redux/productsApi/productsApi.js";
import {styles} from "./style.js";

const Electronics = () => {
    const {data: electronics = [], error, isLoading} = useGetAllProductsByCategoryQuery({
        category: 'electronics',
        limit: 4
    });

    if (isLoading) {
        return (
            <Box sx={{display: 'flex', justifyContent: 'center', padding: '20px'}}>
                <CircularProgress/>
            </Box>
        );
    }

    if (error) {
        return <Typography variant="h6" color="error">Error loading products</Typography>;
    }
    return (
        <section style={styles.section}>
            <Container>
                <Typography
                    variant={'h4'}
                    component={'h4'}
                    sx={styles.title}>
                    Electronics</Typography>

                <Box sx={{display: 'flex'}}>
                    {electronics.map(({id, image, price, title, rating, description}) => (
                        <ProductInList
                            key={id}
                            image={image}
                            price={price}
                            title={title}
                            itemId={id}
                            rate={rating.rate}
                            count={rating.count}
                            description={description}
                        />
                    ))}
                </Box>

            </Container>
        </section>
    )
}

export default Electronics;