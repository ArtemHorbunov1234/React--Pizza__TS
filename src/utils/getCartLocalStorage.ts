import { calcTotalPrice } from './calcTotallPrice';

export const getCartLocalStorage = () => {
    const data = localStorage.getItem('cart');
    const items = data ? JSON.parse(data) : [];
    const totalPrice = calcTotalPrice(items);

    return {
        items,
        totalPrice,
    };
};
