const routerNames = {
    pageMain: '/',
    pageNotFound: '*',
    pageCart: 'cart',
    pageProduct: 'products/:productId',
    pagePlaceOrder: 'order',
    pageCategories: '/:categoryName'
}

Object.freeze(routerNames);
export default routerNames;