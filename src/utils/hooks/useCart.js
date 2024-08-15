import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSnackbar} from "notistack";
import {getProductList, setProductList} from "../../redux/slices/localStorageSlice.js";

const useCart = (product) => {
    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();
    const {orderList, productQuantity} = useSelector((state) => state.localStorage);

    const [isInCart, setIsInCart] = useState(
        orderList.some((item) => item.id === product.id)
    );

    useEffect(() => {
        dispatch(getProductList());
    }, [dispatch]);

    useEffect(() => {
        setIsInCart(orderList.some((item) => item.id === product.id));
    }, [orderList, product.id]);

    const handleButtonClick = (id) => {
        const updatedList = isInCart
            ? orderList.filter((item) => item.id !== id)
            : [
                ...orderList,
                {
                    ...product,
                    amount: productQuantity,
                },
            ];

        dispatch(setProductList(updatedList));
        enqueueSnackbar('Item Added Successfully!', {variant: 'success'});
    };

    return {
        isInCart,
        handleButtonClick,
    };
};

export default useCart;
