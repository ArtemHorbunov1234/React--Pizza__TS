import { createSlice } from '@reduxjs/toolkit';
import { getCartLocalStorage } from '../../utils/getCartLocalStorage';
import { calcTotalPrice } from '../../utils/calcTotallPrice';

export type initialStateType = {
    id: string;
    name: string;
    price: number;
    imgUrl: string;
    types: number;
    size: number;
    count: number;
};
interface cartSliceState {
    totalPrice: number;
    items: initialStateType[];
}
const { items, totalPrice } = getCartLocalStorage();
const initialState: cartSliceState = {
    totalPrice: totalPrice,
    items: items,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const findItem = state.items.find((obj) => obj.id === action.payload.id);
            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                });
            }
            state.totalPrice = calcTotalPrice(state.items);
        },
        minusItem(state, action) {
            const findItem = state.items.find((obj) => obj.id === action.payload.id);
            if (findItem && findItem.count > 1) {
                findItem.count--;
            }
            state.totalPrice = calcTotalPrice(state.items);
        },
        removeItem(state, action) {
            state.items = state.items.filter((obj) => obj.id !== action.payload.id);
            state.totalPrice = calcTotalPrice(state.items);
        },
        clearItem(state) {
            state.items = [];
            state.totalPrice = 0;
        },
    },
});

export const { addItem, removeItem, clearItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
