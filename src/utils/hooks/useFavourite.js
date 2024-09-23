import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
    getCurrentUser,
    getFavProductList,
    removeFavProduct,
    setFavProductList,
} from "../../redux/slices/localStorageSlice.js";
import {useSnackbar} from "notistack";

const useFavourite = (id, product) => {
    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();
    const {favouriteList} = useSelector((state) => state.localStorage);
    const [isInFav, setIsInFav] = useState(
        favouriteList.some(product => product.id === id)
    );

    useEffect(() => {
        dispatch(getFavProductList());
        dispatch(getCurrentUser())
    }, [dispatch]);

    const handleFavClick = () => {
        if (!isInFav) {
            enqueueSnackbar("Item Added to Favourites!", {variant: "success"});
            const updatedFavouriteList = [...favouriteList, product];
            dispatch(setFavProductList(updatedFavouriteList));
        } else {
            dispatch(removeFavProduct(id));
            enqueueSnackbar("Item removed from Favourites!", {variant: "info"});
        }
        setIsInFav(!isInFav);
    };

    return {
        isInFav,
        handleFavClick,
    };
};

export default useFavourite;