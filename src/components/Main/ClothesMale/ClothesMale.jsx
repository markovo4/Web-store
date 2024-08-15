import {Box, CircularProgress, Container, Typography} from "@mui/material";
import ProductInList from "../../UI/cards/ProductInList";
import {useGetAllProductsByCategoryQuery} from "../../../redux/productsApi/productsApi.js";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {styles} from "./style.js";
import {Link} from "react-router-dom";

const ClothesMale = () => {
    const {data: clothesMale = [], error, isLoading} = useGetAllProductsByCategoryQuery({
        category: "men's clothing",
        limit: 4,
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
        <section style={styles.section}>
            <Container>
                <Link to="/categories/men's clothing">
                    <Typography variant="h4" component="h4" sx={styles.title}>
                        For him <ArrowForwardIcon color="error" fontSize="large"/>
                    </Typography>
                </Link>

                <Box sx={styles.container}>
                    {clothesMale.map(({id, image, price, title, rating, description}) => (
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
    );
};

export default ClothesMale;
