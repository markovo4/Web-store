import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
    getCurrentUser,
    getFavProductList,
    setCurrentUser,
    setFavProductList,
    setUser,
} from "../../redux/slices/localStorageSlice.js";
import {useSnackbar} from "notistack";

const useFavourite = (id, product) => {
    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();
    const {favouriteList, currentUser} = useSelector((state) => state.localStorage);
    const [isInFav, setIsInFav] = useState(
        favouriteList.some(favProduct => favProduct.id === id)
    );

    useEffect(() => {
        dispatch(getFavProductList());
        dispatch(getCurrentUser());
    }, [dispatch]);

    const handleFavClick = () => {
        let updatedFavouriteList;

        if (!isInFav) {
            enqueueSnackbar("Item Added to Favourites!", {variant: "success"});
            updatedFavouriteList = [...favouriteList, product]; // Add product to list
        } else {
            updatedFavouriteList = favouriteList.filter(favProduct => favProduct.id !== id); // Remove product from list
            enqueueSnackbar("Item removed from Favourites!", {variant: "info"});
        }

        dispatch(setFavProductList(updatedFavouriteList));

        const updatedUserFavList = {
            ...currentUser,
            favProducts: updatedFavouriteList, // Update only favProducts
        };

        dispatch(setCurrentUser(updatedUserFavList));

        dispatch(setUser(updatedUserFavList));


        setIsInFav(!isInFav);
    };

    return {
        isInFav,
        handleFavClick,
    };
};

export default useFavourite;
