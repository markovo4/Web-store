import TemplateBasePage from "../../../templates/TemplateBasePage";
import ProductSingleItem from "../../../components/Main/ProductSingleItem";
import PreviouslyViewed from "../../../components/Main/PreviouslyViewed/index.js";

const PageProduct = () => {
    return (
        <TemplateBasePage>
            <ProductSingleItem/>
            <PreviouslyViewed/>
        </TemplateBasePage>
    )
}
export default PageProduct;