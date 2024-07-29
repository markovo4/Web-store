import {Box, Button, Container, List, ListItem, Typography} from "@mui/material";
import {styles} from "./styles.js";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from "react-router-dom";
import routerNames from "../../../router/routes/routerNames.js";
import FormCard from "../../UI/cards/FormCard";
import CitiesSelect from "../../UI/inputs/CitiesSelect/index.js";
import {useGetAllProductsQuery} from "../../../redux/productsApi/productsApi.js";
import ProductCheckout from "../../UI/cards/ProductCheckout/index.js";
import EditIcon from '@mui/icons-material/Edit';

const CheckoutForm = () => {
    const productsTEST = useGetAllProductsQuery();

    return (
        <section style={styles.sectionForm}>
            <Container>
                <div className={'flex items-center justify-between pt-4 pb-4'}>
                    <Typography variant={'h5'} component={'p'} sx={styles.checkoutTitle}>
                        Checkout
                    </Typography>
                    <Link to={routerNames.pageMain}>
                        <Button
                            variant={'outlined'}
                            startIcon={<ArrowBackIcon/>}
                            sx={styles.buttonBack}
                        >
                            Back to products
                        </Button>
                    </Link>
                </div>
                <div style={styles.wrapper}>

                    <form>
                        <FormCard formTitle={'Your order'}>
                            <Box sx={styles.selectorContainer}>
                                <Typography variant={'span'} sx={styles.selectorTitle}>Your City</Typography>
                                <CitiesSelect styles={styles.selector}/>
                            </Box>
                            <List className={'w-[800px]'} sx={styles.checkoutList}>
                                <ListItem sx={styles.titleList}>
                                    <Typography variant={'h6'}>Your order</Typography>
                                    <Link to={routerNames.pageCart}>
                                        <Button variant={"outlined"} startIcon={<EditIcon/>}
                                                sx={styles.buttonBack}>Edit</Button>
                                    </Link>
                                </ListItem>
                                {productsTEST.data && productsTEST.data.map((product, index) => {
                                    return (
                                        <ProductCheckout
                                            key={index}
                                            title={product.title}
                                            image={product.image}
                                            count={product.id}
                                            price={product.price}
                                        />
                                    )
                                })
                                }
                            </List>
                        </FormCard>
                    </form>

                </div>
            </Container>
        </section>
    )
}

export default CheckoutForm;