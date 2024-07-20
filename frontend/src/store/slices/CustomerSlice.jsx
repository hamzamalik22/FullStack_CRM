// slices/CustomerSlice.jsx
import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
  name: "customers",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Fetch customers actions
    getCustomersStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getCustomersSuccess: (state, action) => {
      state.list = action.payload;
      state.loading = false;
    },
    getCustomersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Create customer actions
    createCustomerStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    createCustomerSuccess: (state, action) => {
      state.list.push(action.payload);
      state.loading = false;
    },
    createCustomerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Update customer actions
    updateCustomerStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateCustomerSuccess: (state, action) => {
      const index = state.list.findIndex((customer) => customer.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
      state.loading = false;
    },
    updateCustomerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Delete customer actions
    deleteCustomerStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteCustomerSuccess: (state, action) => {
      state.list = state.list.filter((customer) => customer.id !== action.payload);
      state.loading = false;
    },
    deleteCustomerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getCustomersStart,
  getCustomersSuccess,
  getCustomersFailure,
  createCustomerStart,
  createCustomerSuccess,
  createCustomerFailure,
  updateCustomerStart,
  updateCustomerSuccess,
  updateCustomerFailure,
  deleteCustomerStart,
  deleteCustomerSuccess,
  deleteCustomerFailure,
} = customerSlice.actions;

export default customerSlice.reducer;
