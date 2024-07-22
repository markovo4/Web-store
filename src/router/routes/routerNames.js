const routerNames = {
    pageMain: '/',
    pageNotFound: '*',
    pageCart: 'cart',
    pageProduct: 'products/:productId',
    pagePlaceOrder: 'order',
}

Object.freeze(routerNames);
export default routerNames;