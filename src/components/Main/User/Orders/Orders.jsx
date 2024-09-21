import {Box, Container, List, ListItem, Typography} from "@mui/material";
import {styles} from "./styles.js";
import ProductsList from "../ListItemInfo/ProductsList.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getListOfOrders} from "../../../../redux/slices/localStorageSlice.js";

const Orders = () => {
    const {listOfOrders} = useSelector(state => state.localStorage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListOfOrders())
    }, [dispatch])

    return (
        <Box sx={styles.wrapper}>
            <Container>
                <List>
                    <ListItem sx={styles.infoGroup}>
                        <Typography variant="h5" component="span">
                            ID
                        </Typography>
                        <Typography variant="h6" component="span" sx={styles.infoText}>
                            Date
                        </Typography>
                        <Typography variant="h6" component="span" sx={styles.infoText}>
                            Action
                        </Typography>
                    </ListItem>
                    {listOfOrders && listOfOrders.map((order, index) => {
                        return (<ProductsList key={index} id={order.orderId} date={order.date} order={order.order}/>)
                    })}

                </List>
            </Container>
        </Box>
    );
};

export default Orders;
