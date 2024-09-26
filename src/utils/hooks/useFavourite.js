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

    const favouriteUserProducts = favouriteUserList
        .filter(user => user.email === currentUser.email)
        .flatMap(user => user.productsList || []);

    useEffect(() => {
        setIsInFav(favouriteList.some(p => p.id === id))
    }, [favouriteList, id]);

    useEffect(() => {
        setIsInUserFav(favouriteUserProducts.some(p => p.id === id))
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
            const updatedFavouriteList = [...favouriteList, product];
            dispatch(setFavProductList(updatedFavouriteList));

            enqueueSnackbar("Item Added to Favourites!", {variant: "success"});
        } else {

            dispatch(removeFavProduct(id));
            enqueueSnackbar("Item removed from Favourites!", {variant: "info"});
        }

        setIsInFav(!isInFav);
    };

    const handleFavUserClick = () => {
        if (!isInUserFav) {
            const updatedFavouriteList = [...favouriteUserProducts, product];

            dispatch(setFavUserProductList({
                email: currentUser.email,
                productsList: updatedFavouriteList
            }));

            enqueueSnackbar("Item Added to Favourites!", {variant: "success"});
        } else {

            dispatch(removeFavUserProduct({
                email: currentUser.email,
                productId: id
            }));

            enqueueSnackbar("Item removed from Favourites!", {variant: "info"});
        }

        setIsInUserFav(!isInUserFav);
    };

    return {
        isInFav: Cookies.get('LoggedIn') ? isInUserFav : isInFav,
        handleFavClick: Cookies.get('LoggedIn') ? handleFavUserClick : handleFavClick,
        favouriteUserProducts
    };
};

export default useFavourite;
