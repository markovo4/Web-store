const routerNames = {
    pageMain: '/',
    pageNotFound: '*',
    pageCart: '/cart',
    pageProduct: '/products/:productId',
    pageCheckout: '/order',
    pageCategories: '/:categoryName'
};

Object.freeze(routerNames);
export default routerNames;
