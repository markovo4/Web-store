import TemplateBasePage from "../../../templates/TemplateBasePage";
import Hero from "../../../components/Main/Hero";
import CategoriesList from "../../../components/Main/CategoriesList";
import Electronics from "../../../components/Main/Electronics";
import Jewelery from "../../../components/Main/Jewelery";
import ClothesMale from "../../../components/Main/ClothesMale";
import ClothesFemale from "../../../components/Main/ClothesFemale";

const PageMain = () => {
    return (
        <TemplateBasePage>
            <Hero/>
            <CategoriesList/>
            <Electronics/>
            <Jewelery/>
            <ClothesMale/>
            <ClothesFemale/>
        </TemplateBasePage>
    )
}
export default PageMain;