import PageMain from "../pages/PageMain/index.js";
import PageNotFound from "../pages/PageNotFound/index.js";
import PageCart from "../pages/PageCart/index.js";
import PageProduct from "../pages/PageProduct/index.js";
import PagePlaceOrder from "../pages/PagePlaceOrder/index.js";
import routerNames from "./routerNames.js";


const routerConfig = () => {
    const pageComponents = [PageMain, PageNotFound, PageCart, PageProduct, PagePlaceOrder];
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