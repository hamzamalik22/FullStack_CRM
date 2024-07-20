// actions/CustomerActions.js
import {
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
} from "../slices/CustomerSlice";
import api from "@/utils/api";

// Fetch customers
export const fetchCustomers = () => async (dispatch) => {
  try {
    dispatch(getCustomersStart());
    const response = await api.get("/api/customers/");
    dispatch(getCustomersSuccess(response.data.Customers));
  } catch (error) {
    dispatch(getCustomersFailure(error.message));
  }
};

// Create a new customer
export const createCustomer = (data) => async (dispatch) => {
  try {
    dispatch(createCustomerStart());
    const response = await api.post("/api/customers/", data);
    dispatch(createCustomerSuccess(response.data));
  } catch (error) {
    dispatch(createCustomerFailure(error.message));
  }
};

// Update an existing customer
export const updateCustomer = (id, data) => async (dispatch) => {
  try {
    dispatch(updateCustomerStart());
    const response = await api.put(`/api/customers/${id}`, data);
    dispatch(updateCustomerSuccess(response.data));
  } catch (error) {
    dispatch(updateCustomerFailure(error.message));
  }
};

// Delete a customer
export const deleteCustomer = (id) => async (dispatch) => {
  try {
    dispatch(deleteCustomerStart());
    await api.delete(`/api/customers/${id}`);
    dispatch(deleteCustomerSuccess(id));
  } catch (error) {
    dispatch(deleteCustomerFailure(error.message));
  }
};
