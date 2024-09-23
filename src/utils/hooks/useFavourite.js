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

    // Check if the product is in the general favorite list
    const [isInFav, setIsInFav] = useState(
        favouriteList.some(p => p.id === id)
    );

    // Get the user's favorite product list
    const favouriteUserProducts = favouriteUserList
        .filter(user => user.email === currentUser.email)
        .flatMap(user => user.productsList || []);

    // Check if the product is in the user's specific favorite list
    const [isInUserFav, setIsInUserFav] = useState(
        favouriteUserProducts.some(p => p.id === id)
    );

    // Fetch user and favorites on initial render
    useEffect(() => {
        if (Cookies.get('LoggedIn')) {
            dispatch(getCurrentUser());
            dispatch(getFavUserProductList());
        }
        dispatch(getFavProductList());
    }, [dispatch]);

    // Handle favorite for non-logged-in users (general favorite list)
    const handleFavClick = () => {
        if (!isInFav) {
            enqueueSnackbar("Item Added to Favourites!", {variant: "success"});
            const updatedFavouriteList = [...favouriteList, product];
            dispatch(setFavProductList(updatedFavouriteList)); // Update general favorite list
        } else {
            dispatch(removeFavProduct(id)); // Remove from general favorite list
            enqueueSnackbar("Item removed from Favourites!", {variant: "info"});
        }
        setIsInFav(!isInFav); // Toggle local state
    };

    // Handle favorite for logged-in users (user-specific favorite list)
    const handleFavUserClick = () => {
        if (!isInUserFav) {
            enqueueSnackbar("Item Added to Favourites!", {variant: "success"});
            const updatedFavouriteList = [...favouriteUserProducts, product];
            dispatch(setFavUserProductList({
                email: currentUser.email,
                productsList: updatedFavouriteList // Update user-specific favorite list
            }));
        } else {
            dispatch(removeFavUserProduct({
                email: currentUser.email,
                productId: id // Remove from user-specific favorite list
            }));
            enqueueSnackbar("Item removed from Favourites!", {variant: "info"});
        }
        setIsInUserFav(!isInUserFav); // Toggle local state
    };

    // Determine which handler to return based on whether the user is logged in
    return {
        isInFav,
        handleFavClick: Cookies.get('LoggedIn') ? handleFavUserClick : handleFavClick
    };
};

export default useFavourite;
