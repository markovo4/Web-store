import {styles} from "../PreviouslyViewed/styles.js";
import {Box, Container, List, ListItem, Typography} from "@mui/material";
import {useGetAllProductsByCategoryQuery} from "../../../redux/productsApi/productsApi.js";
import ProductInList from "../../UI/cards/ProductInList/index.js";
import PropTypes from "prop-types";

const SimilarItems = ({category}) => {

    const products = useGetAllProductsByCategoryQuery({category: category, limit: 5});

    return (
        <Box sx={styles.sectionViewed}>
            <Container>
                <Box sx={styles.container}>
                    <Typography
                        variant='h4'
                        component={'h4'}
                        sx={styles.title}>
                        Similar Items</Typography>

                    <Box sx={styles.list}>
                        {products.data && products.data.map((product, index) => {
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
                                    additionalComponent={true}
                                />
                            )
                        })}
                    </Box>

                    <List sx={styles.slideList}>
                        {products.data && products.data.map((product, index) => {
                            return (
                                <ListItem key={product.id} sx={styles.slideItem}>
                                    <ProductInList
                                        image={product.image}
                                        price={product.price}
                                        title={product.title}
                                        itemId={product.id}
                                        key={index}
                                        rate={product.rating.rate}
                                        count={product.rating.count}
                                        description={product.description}
                                        additionalComponent={true}
                                    />
                                </ListItem>
                            )
                        })}
                    </List>
                </Box>
            </Container>
        </Box>
    )
}

SimilarItems.propTypes = {
    category: PropTypes.string.isRequired,

}

export default SimilarItems;