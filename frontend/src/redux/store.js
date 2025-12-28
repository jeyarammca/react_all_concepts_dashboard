import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from '../features/dashboard/dashboardSlice';
import itemsReducer from '../features/items/itemsSlice';

export const store = configureStore({
    reducer: {
        dashboard: dashboardReducer,
        items: itemsReducer,
    },
});
