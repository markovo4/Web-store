const routerNames = {
    pageMain: '/',
    pageNotFound: '/*',
    pageCart: '/cart',
    pageProduct: '/products/:productId',
    pageCheckout: '/order',
    pageCategories: '/categories/:categoryName',
    pageFavProducts: '/favProducts',
    pageOrderInfo: '/orderInfo',
    pagePersonalCabinet: '/personalCabinet'
};

Object.freeze(routerNames);
export default routerNames;
