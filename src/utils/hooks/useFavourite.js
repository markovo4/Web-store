import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
    getCurrentUser,
    getFavProductList,
    getFavUserProductList,
    removeFavProduct,
    removeFavUserProduct,
    setFavProductList,
    setFavUserProductList,
} from "../../redux/slices/localStorageSlice.js";
import {useSnackbar} from "notistack";
import Cookies from "js-cookie";

const useFavourite = (id, product) => {
    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();
    const {favouriteList = [], favouriteUserList = [], currentUser = {}} = useSelector((state) => state.localStorage);

    const [isInFav, setIsInFav] = useState(false);
    const [isInUserFav, setIsInUserFav] = useState(false);

    useEffect(() => {
        setIsInFav(favouriteList.some(p => p.id === id));
    }, [favouriteList, id]);

    const favouriteUserProducts = favouriteUserList
        .filter(user => user.email === currentUser.email)
        .flatMap(user => user.productsList || []);

    useEffect(() => {
        setIsInUserFav(favouriteUserProducts.some(p => p.id === id));
    }, [favouriteUserProducts, id]);

    useEffect(() => {
        if (Cookies.get('LoggedIn')) {
            dispatch(getCurrentUser());
            dispatch(getFavUserProductList());
        }
        dispatch(getFavProductList());
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
        // Optionally, call the effect to update the local state
        setIsInFav(!isInFav); // Toggle local state
    };

    const handleFavUserClick = () => {
        if (!isInUserFav) {
            enqueueSnackbar("Item Added to Favourites!", {variant: "success"});
            const updatedFavouriteList = [...favouriteUserProducts, product];
            dispatch(setFavUserProductList({
                email: currentUser.email,
                productsList: updatedFavouriteList
            }));
        } else {
            dispatch(removeFavUserProduct({
                email: currentUser.email,
                productId: id
            }));
            enqueueSnackbar("Item removed from Favourites!", {variant: "info"});
        }
        // Optionally, call the effect to update the local state
        setIsInUserFav(!isInUserFav);
    };

    return {
        isInFav: Cookies.get('LoggedIn') ? isInUserFav : isInFav,
        handleFavClick: Cookies.get('LoggedIn') ? handleFavUserClick : handleFavClick,
        favouriteUserProducts
    };
};

export default useFavourite;
