import TemplateBasePage from "../../../templates/TemplateBasePage";
import CategoriesList from "../../../components/Main/CategoriesList";
import Electronics from "../../../components/Main/Electronics";
import Jewelery from "../../../components/Main/Jewelery";
import ClothesFemale from "../../../components/Main/ClothesFemale";
import ClothesMale from "../../../components/Main/ClothesMale/index.js";
import Hero from "../../../components/Main/Hero/Hero.jsx";

const PageMain = () => {

    return (
        <TemplateBasePage>
            <Hero/>
            <CategoriesList/>
            <ClothesMale/>
            <Electronics/>
            <Jewelery/>
            <ClothesFemale/>
        </TemplateBasePage>
    )
}
export default PageMain;