import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchStats = createAsyncThunk('dashboard/fetchStats', async () => {
    const response = await axios.get('http://localhost:5000/api/stats');
    return response.data;
});

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        stats: { total: 0, active: 0, completed: 0 },
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStats.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchStats.fulfilled, (state, action) => {
                state.loading = false;
                state.stats = action.payload;
            })
            .addCase(fetchStats.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default dashboardSlice.reducer;
