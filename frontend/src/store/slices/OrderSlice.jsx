// slices/Orderslice.jsx
import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orderList: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Fetch Orders actions
    getOrdersStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getOrdersSuccess: (state, action) => {
      state.orderList = action.payload;
      state.loading = false;
    },
    getOrdersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Create customer actions
    createOrderStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    createOrderSuccess: (state, action) => {
      state.orderList.push(action.payload);
      state.loading = false;
    },
    createOrderFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Update customer actions
    updateOrderStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateOrderSuccess: (state, action) => {
      const index = state.orderList.findIndex(
        (order) => order.id === action.payload.id
      );
      if (index !== -1) {
        state.orderList[index] = action.payload;
      }
      state.loading = false;
    },
    updateOrderFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Delete customer actions
    deleteOrderStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteOrderSuccess: (state, action) => {
      state.orderList = state.orderList.filter(
        (order) => order.id !== action.payload
      );
      state.loading = false;
    },
    deleteOrderFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getOrdersStart,
  getOrdersSuccess,
  getOrdersFailure,
  createOrderStart,
  createOrderSuccess,
  createOrderFailure,
  updateOrderStart,
  updateOrderSuccess,
  updateOrderFailure,
  deleteOrderStart,
  deleteOrderSuccess,
  deleteOrderFailure,
} = orderSlice.actions;

export default orderSlice.reducer;
