import PageMain from "../pages/PageMain";
import PageNotFound from "../pages/PageNotFound";
import PageCart from "../pages/PageCart";
import PageProduct from "../pages/PageProduct";
import PagePlaceOrder from "../pages/PagePlaceOrder";
import PageCategories from "../pages/PageCategories/index.js";
import routerNames from "./routerNames";


const routerConfig = () => {
    const pageComponents = [PageMain, PageNotFound, PageCart, PageProduct, PagePlaceOrder, PageCategories];
    const routeKeys = Object.keys(routerNames);

    if (pageComponents.length !== routeKeys.length) {
        console.error("The number of routes and components do not match.");
        return [];
    }

    return pageComponents.map((pageComponent, index) => {
        const keyName = routeKeys[index];
        return {
            path: routerNames[keyName],
            component: pageComponent,
            id: index,
        }
    });
}

export default routerConfig;