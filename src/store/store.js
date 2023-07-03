import { configureStore } from "@reduxjs/toolkit";
import authslice from "./auth-slice";
import globalSlice from "./globalSlice";

const store = configureStore(
    {
        reducer: {
            auth: authslice,
            global: globalSlice
        }
    }
)
export default store;