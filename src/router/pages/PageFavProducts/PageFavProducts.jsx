import TemplateBasePage from "../../../templates/TemplateBasePage";
import FavProductsDisplay from "../../../components/Main/FavProductsDisplay";
import PreviouslyViewed from "../../../components/Main/PreviouslyViewed/index.js";

const PageFavProducts = () => {
    return (
        <TemplateBasePage>
            <FavProductsDisplay/>
            <PreviouslyViewed/>
        </TemplateBasePage>
    )
}
export default PageFavProducts;