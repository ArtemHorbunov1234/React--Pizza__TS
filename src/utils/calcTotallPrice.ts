import { initialStateType } from '../redux/slices/cartSlice';

export const calcTotalPrice = (items: initialStateType[]) => {
    return items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
    }, 0);
};
