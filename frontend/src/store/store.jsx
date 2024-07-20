import { configureStore } from "@reduxjs/toolkit";
import CustomerReducer from "./slices/CustomerSlice";
import OrderReducer from "./slices/OrderSlice";
import AgentReducer from "./slices/AgentSlice";

export const store = configureStore({
  reducer: {
    customers: CustomerReducer,
    orders: OrderReducer,
    agent: AgentReducer,
    // here inlcude link to your slices or reducers
  },
});
