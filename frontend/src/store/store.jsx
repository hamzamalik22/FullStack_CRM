import { configureStore } from "@reduxjs/toolkit";
import CustomerReducer from "./slices/CustomerSlice";

export const store = configureStore({
  reducer: {
    customers: CustomerReducer,
    // UserReducer: UserReducer,
    // here inlcude link to your slices or reducers
  },
});
