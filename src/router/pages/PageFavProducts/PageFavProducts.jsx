import TemplateBasePage from "../../../templates/TemplateBasePage";
import FavProductsDisplay from "../../../components/Main/FavProductsDisplay";
import PreviouslyViewed from "../../../components/Main/PreviouslyViewed/index.js";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getRecentlyViewed} from "../../../redux/slices/localStorageSlice.js";

const PageFavProducts = () => {
    const {recentlyViewed} = useSelector(state => state.localStorage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecentlyViewed())
    }, [dispatch]);

    return (
        <TemplateBasePage>
            <FavProductsDisplay/>
            {recentlyViewed && recentlyViewed.length >= 1 && <PreviouslyViewed/>}
        </TemplateBasePage>
    )
}
export default PageFavProducts;