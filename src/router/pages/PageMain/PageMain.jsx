import TemplateBasePage from "../../../templates/TemplateBasePage";
import Hero from "../../../components/Main/Hero";
import CategoriesList from "../../../components/Main/CategoriesList";
import Electronics from "../../../components/Main/Electronics";

const PageMain = () => {
    return (
        <TemplateBasePage>
            <Hero/>
            <CategoriesList/>
            <Electronics/>
            <div>PageMain</div>
        </TemplateBasePage>
    )
}
export default PageMain;