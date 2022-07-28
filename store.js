import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import authSlice from "./slices/authSlice";

const makeStore = () => {
    return configureStore({
        reducer:{
            auth: authSlice
        }
    })
}

export const wrapper = createWrapper(makeStore);