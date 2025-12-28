import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItems = createAsyncThunk('items/fetchItems', async ({ page, limit }) => {
    const response = await axios.get(`http://localhost:5000/api/items?page=${page}&limit=${limit}`);
    return response.data;
});

const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        list: [],
        pagination: { total: 0, page: 1, limit: 5, totalPages: 0 },
        loading: false,
        error: null,
    },
    reducers: {
        clearList: (state) => {
            state.list = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItems.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchItems.fulfilled, (state, action) => {
                state.loading = false;
                // For lazy load demo, we append to the list if it's a new page
                if (action.payload.pagination.page === 1) {
                    state.list = action.payload.data;
                } else {
                    state.list = [...state.list, ...action.payload.data];
                }
                state.pagination = action.payload.pagination;
            })
            .addCase(fetchItems.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { clearList } = itemsSlice.actions;
export default itemsSlice.reducer;
