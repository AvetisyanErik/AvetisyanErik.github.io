import { configureStore } from '@reduxjs/toolkit';
import listSlice from './slices/listSlice';
let store = configureStore({
    reducer: {
        lists: listSlice
    }
    
})
export default store;