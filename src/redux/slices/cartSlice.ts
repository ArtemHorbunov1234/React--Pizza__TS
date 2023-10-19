import { createSlice } from '@reduxjs/toolkit';

type initialStateType = {
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

const initialState: cartSliceState = {
    totalPrice: 0,
    items: [],
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
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price * obj.count + sum;
            }, 0);
        },
        minusItem(state, action) {
            const findItem = state.items.find((obj) => obj.id === action.payload.id);
            if (findItem && findItem.count > 1) {
                findItem.count--;
            }
        },
        removeItem(state, action) {
            state.items = state.items.filter((obj) => obj.id !== action.payload.id);
        },
        clearItem(state) {
            state.items = [];
            state.totalPrice = 0;
        },
    },
});

export const { addItem, removeItem, clearItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
