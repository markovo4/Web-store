const routerNames = {
    pageMain: '/Web-store/',
    pageNotFound: '*',
    pageCart: '/Web-store/cart',
    pageProduct: '/Web-store/products/:productId',
    pageCheckout: '/Web-store/order',
    pageCategories: '/Web-store/categories/:categoryName',
    pageFavProducts: '/Web-store/favProducts',
    pageOrderInfo: '/Web-store/pageOrderInfo'
};

Object.freeze(routerNames);
export default routerNames;
