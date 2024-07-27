import CartItem from "../../UI/cards/CartItem";
import {Box, Button, Container, IconButton, List, ListItem, Typography} from "@mui/material";
import {styles} from "./styles.js";
import {useGetAllProductsQuery} from "../../../redux/productsApi/productsApi.js";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import {useNavigate} from "react-router-dom";

const CartList = () => {
    const productsTEST = useGetAllProductsQuery();
    const navigate = useNavigate();

    const getTotalPrice = (products) => {
        const priceTotal = products.reduce((totalPrice, price) => {
            totalPrice += price.price;
            return totalPrice;
        }, 0);
        return parseFloat(priceTotal.toFixed(2));
    }

    const handleBackClick = () => {
        navigate(-1);
    }
    return (
        <section style={styles.section}>
            <Container sx={styles.container}>
                <Box className={'flex flex-row items-center pt-6 mb-4'}>
                    <IconButton onClick={handleBackClick}>
                        <ArrowBackIcon/>
                    </IconButton>
                    <Typography
                        variant={'h5'}
                        component={'p'}
                        className={'pl-7'}
                        sx={styles.titleBack}
                    >
                        Cart
                    </Typography>

                    {productsTEST.data &&
                        <Typography
                            variant={'span'}
                            component={'p'}
                            className={'pl-7'}
                            sx={styles.titleCount}
                        >
                            {`${productsTEST.data.length} 
                        ${productsTEST.data.length < 2 ? productsTEST.data.length === 1 ? 'item' : 'items' : 'items'} `}
                        </Typography>}
                </Box>

                <div style={styles.wrapper}>
                    <List sx={styles.productsList}>
                        <ListItem className={'bg-white'}>
                            <Button
                                variant={'outlined'}
                                startIcon={<DeleteForeverIcon color={'disabled'} fontSize={'large'}/>}
                                sx={styles.deleteButton}
                            >
                                Delete All
                            </Button>
                        </ListItem>
                        {productsTEST.data && productsTEST.data.map((product, index) => {

                            return (
                                <CartItem
                                    key={index}
                                    title={product.title}
                                    image={product.image}
                                    price={product.price}
                                    id={product.id}
                                />
                            )
                        })}
                    </List>

                    <Box sx={styles.placeOrder}>
                        <List>
                            <ListItem sx={styles.sideBar}>
                                <Button
                                    sx={styles.loginButton}
                                    variant={'outlined'}
                                    endIcon={<ArrowCircleRightIcon color={'success'}/>}
                                >Log in</Button>
                            </ListItem>
                            <ListItem className={'flex flex-col'} sx={styles.sideBar}>
                                <Button sx={styles.buttonPlaceOrder} variant={'outlined'}>
                                    Place order
                                </Button>
                                <List className={'flex flex-col gap-5'}>
                                    <ListItem sx={styles.totalPrice}>
                                        {productsTEST.data && <Typography>
                                            {`${productsTEST.data.length}
                                        ${productsTEST.data.length < 2 ?
                                                productsTEST.data.length === 1 ?
                                                    'item' : 'items' : 'items'} `}
                                        </Typography>}
                                        {productsTEST.data && <Typography sx={styles.totalPriceSub}>
                                            $ {getTotalPrice(productsTEST.data)}
                                        </Typography>}
                                    </ListItem>
                                    <ListItem sx={styles.totalPrice}>
                                        <Typography>Discount</Typography>
                                        <Typography sx={styles.totalPriceSub}>$ 0</Typography>
                                    </ListItem>
                                    <ListItem sx={styles.totalPrice}>
                                        <Typography
                                            variant={'h6'}
                                            component={'span'}
                                        >Total:</Typography>
                                        {productsTEST.data &&
                                            <Typography
                                                sx={styles.totalPriceSub}
                                                variant={'h6'}
                                                component={'span'}
                                            >$ {getTotalPrice(productsTEST.data)}</Typography>}
                                    </ListItem>
                                </List>
                            </ListItem>
                        </List>
                    </Box>

                </div>
            </Container>
        </section>
    )
}

export default CartList;