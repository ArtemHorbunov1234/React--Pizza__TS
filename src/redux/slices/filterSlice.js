import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categoryId: 0,
    sort: { name: 'популярности', sortProperty: 'rating' },
    searchItem: '',
    currentPage: 1,
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategory(state, action) {
            state.categoryId = action.payload;
        },
        setSort(state, action) {
            state.sort = action.payload;
        },
        setSearchItem(state, action) {
            state.searchItem = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        setFilters(state, action) {
            state.sort = action.payload.sort;
            state.currentPage = Number(action.payload.currentPage);
            state.categoryId = Number(action.payload.categoryId);
        },
    },
});

export const { setCategory, setSort, setSearchItem, setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
