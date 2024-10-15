import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
    reducer:{
        auth : authSlice,
    }
});
// 🪶 store: tell me about all the reducers!

export default store;