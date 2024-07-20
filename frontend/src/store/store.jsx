import { configureStore } from "@reduxjs/toolkit";
import CustomerReducer from "./slices/CustomerSlice";
import OrderReducer from "./slices/OrderSlice";

export const store = configureStore({
  reducer: {
    customers: CustomerReducer,
    orders: OrderReducer,
    // UserReducer: UserReducer,
    // here inlcude link to your slices or reducers
  },
});
