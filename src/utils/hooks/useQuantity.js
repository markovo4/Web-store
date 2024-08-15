import {setProductList} from "../../redux/slices/localStorageSlice.js";
import {useDispatch, useSelector} from "react-redux";

const useQuantity = () => {
    const dispatch = useDispatch();
    const {orderList} = useSelector((state) => state.localStorage);

    return (id, newAmount) => {
        const productIndex = orderList.findIndex((product) => product.id === id);

        if (productIndex !== -1) {
            const updatedProduct = {
                ...orderList[productIndex],
                amount: newAmount,
            };

            const updatedList = [
                ...orderList.slice(0, productIndex),
                updatedProduct,
                ...orderList.slice(productIndex + 1),
            ];

            dispatch(setProductList(updatedList));
        }
    };
};

export default useQuantity;
