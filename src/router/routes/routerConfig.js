import PageMain from "../pages/PageMain";
import PageNotFound from "../pages/PageNotFound";
import PageCart from "../pages/PageCart";
import PageProduct from "../pages/PageProduct";
import PageCheckout from "../pages/PageCheckout";
import PageCategories from "../pages/PageCategories";
import PageFavProducts from "../pages/PageFavProducts";
import PageOrderInfo from "../pages/PageOrderInfo";
import PagePersonalCabinet from "../pages/PagePersonalCabinet";

import routerNames from "./routerNames";


const routerConfig = () => {
    const pageComponents = [
        PageMain,
        PageNotFound,
        PageCart,
        PageProduct,
        PageCheckout,
        PageCategories,
        PageFavProducts,
        PageOrderInfo,
        PagePersonalCabinet
    ];
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