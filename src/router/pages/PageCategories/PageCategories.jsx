import TemplateBasePage from "../../../templates/TemplateBasePage";
import CategoryDisplay from "../../../components/UI/cards/CategoryDisplay";
import PreviouslyViewed from "../../../components/Main/PreviouslyViewed/index.js";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getRecentlyViewed} from "../../../redux/slices/localStorageSlice.js";

const PageCategories = () => {
    const {recentlyViewed} = useSelector(state => state.localStorage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecentlyViewed())
    }, [dispatch]);

    return (
        <TemplateBasePage>
            <CategoryDisplay/>
            {recentlyViewed && recentlyViewed.length >= 1 && <PreviouslyViewed/>}
        </TemplateBasePage>
    )
}
export default PageCategories;