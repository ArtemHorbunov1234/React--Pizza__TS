import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

type Pizza = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
    rating: number;
};
type SearchPizzaParams = {
    sort: string;
    category: string;
    search: string;
    currentPage: number;
};

export const fetchPizzas = AsyncThunk<Pizza[]>('pizza/fetchPizzasStatus', async (params: SearchPizzaParams) => {
    if (params) {
        const { search, category, sort, currentPage } = params;

        const { data } = await axios.get(
            `https://6509be44f6553137159befd1.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sort.sortProperty}&order=desc${search}`
        );
        return data;
    }
});
const FETCH_PIZZAS_PENDING = fetchPizzas.pending.type;
const FETCH_PIZZAS_FULFILLED = fetchPizzas.fulfilled.type;
const FETCH_PIZZAS_REJECTED = fetchPizzas.rejected.type;

const initialState = {
    items: [],
    status: 'loading ',
};

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
    },
    extraReducers: {
        [FETCH_PIZZAS_PENDING]: (state) => {
            state.items = [];
            state.status = 'loading';
        },
        [FETCH_PIZZAS_FULFILLED]: (state, action) => {
            state.items = action.payload;
            state.status = 'success';
        },
        [FETCH_PIZZAS_REJECTED]: (state) => {
            state.items = [];
            state.status = 'error';
        },
    },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
