const routerNames = {
    pageMain: '/',
    pageNotFound: '*',
    pageCart: '/cart',
    pageProduct: '/products/:productId',
    pageCheckout: '/order',
    pageCategories: '/:categoryName',
    pageFavProducts: '/favProducts'
};

Object.freeze(routerNames);
export default routerNames;
