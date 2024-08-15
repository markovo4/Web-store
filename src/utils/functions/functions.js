export const formatPhoneNumber = (value) => {
    const cleaned = ('' + value).replace(/[^\d+]/g, '');
    const match = cleaned.match(/^(\+38)?\s?(\d{0,3})\s?(\d{0,3})\s?(\d{0,2})\s?(\d{0,2})\s?(\d{0,2})$/);
    if (match) {
        return [
            match[1],
            match[2],
            match[3],
            match[4],
            match[5]
        ].filter(Boolean).join(' ').replace(/^(\+38)\s?(\d{3})\s?(\d{3})\s?(\d{2})\s?(\d{2})$/, '+38 ($2) $3-$4-$5');
    }
    return value;
};

export const getTotalPrice = (products) => {
    const priceTotal = products.reduce((totalPrice, product) => {
        return {
            price: totalPrice.price + product.price * product.amount,
            quantity: totalPrice.quantity + product.amount
        }
    }, {price: 0, quantity: 0});
    return {price: parseFloat(priceTotal.price.toFixed(2)), quantity: priceTotal.quantity};
}