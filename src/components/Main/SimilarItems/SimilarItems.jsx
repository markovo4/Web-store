import {styles} from "../PreviouslyViewed/styles.js";
import {Container, Typography} from "@mui/material";
import {useGetAllProductsByCategoryQuery} from "../../../redux/productsApi/productsApi.js";
import ProductInList from "../../UI/cards/ProductInList/index.js";
import PropTypes from "prop-types";

const SimilarItems = ({category}) => {

    const products = useGetAllProductsByCategoryQuery({category: category, limit: 5});

    return (
        <section style={styles.sectionViewed}>
            <Container>
                <div style={styles.container}>
                    <Typography
                        variant='h4'
                        component={'h4'}
                        sx={styles.title}>
                        Similar Items</Typography>

                    <div className={'flex justify-center'}>
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
                    </div>
                </div>
            </Container>
        </section>
    )
}

SimilarItems.propTypes = {
    category: PropTypes.string.isRequired,

}

export default SimilarItems;