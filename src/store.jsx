import { configureStore } from "@reduxjs/toolkit";
import UsersSlice from "./Slice/UsersSlice";


export const CustomStore=configureStore({
    reducer:{
        users: UsersSlice,
    }
})