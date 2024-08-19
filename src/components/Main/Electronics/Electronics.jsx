import {Box, CircularProgress, Container, List, ListItem, Typography} from "@mui/material";
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
            <Box sx={styles.progressBar}>
                <CircularProgress/>
            </Box>
        );
    }

    if (error) {
        return <Typography variant="h6" color="error">Error loading products</Typography>;
    }
    return (
        <Box sx={styles.section}>
            <Container>
                <Typography
                    variant='h4'
                    component={'h4'}
                    sx={styles.title}>
                    Electronics</Typography>

                <Box sx={styles.container}>
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

                <List sx={styles.slideList}>
                    {electronics.map(({id, image, price, title, rating, description}) => (
                        <ListItem key={id} sx={styles.slideItem}>
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
                        </ListItem>
                    ))}
                </List>

            </Container>
        </Box>
    )
}

export default Electronics;