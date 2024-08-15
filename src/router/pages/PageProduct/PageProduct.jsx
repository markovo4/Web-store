import TemplateBasePage from "../../../templates/TemplateBasePage";
import ProductSingleItem from "../../../components/Main/ProductSingleItem";
import PreviouslyViewed from "../../../components/Main/PreviouslyViewed/index.js";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getRecentlyViewed} from "../../../redux/slices/localStorageSlice.js";

const PageProduct = () => {
    const {recentlyViewed} = useSelector(state => state.localStorage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecentlyViewed())
    }, [dispatch]);

    return (
        <TemplateBasePage>
            <ProductSingleItem/>
            {recentlyViewed && recentlyViewed.length >= 1 && <PreviouslyViewed/>}
        </TemplateBasePage>
    )
}
export default PageProduct;