import TemplateBasePage from "../../../templates/TemplateBasePage";
import CategoryDisplay from "../../../components/UI/cards/CategoryDisplay";
import PreviouslyViewed from "../../../components/Main/PreviouslyViewed/index.js";

const PageCategories = () => {
    return (
        <TemplateBasePage>
            <CategoryDisplay/>
            <PreviouslyViewed/>
        </TemplateBasePage>
    )
}
export default PageCategories;