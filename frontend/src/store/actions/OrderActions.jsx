// actions/OrderActions.js
import {
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
} from "../slices/OrderSlice";
import api from "@/utils/api";

// Fetch Orders
export const fetchOrders = () => async (dispatch) => {
  try {
    dispatch(getOrdersStart());
    const response = await api.get("/api/orders/");
    // console.log(response);
    dispatch(getOrdersSuccess(response.data.Orders));
  } catch (error) {
    dispatch(getOrdersFailure(error.message));
  }
};

// Create a new Order
export const createOrder = (data) => async (dispatch) => {
  try {
    dispatch(createOrderStart());
    const response = await api.post("/api/orders/", data);
    dispatch(createOrderSuccess(response.data));
  } catch (error) {
    dispatch(createOrderFailure(error.message));
  }
};

// Update an existing Order
export const updateOrder = (id, data) => async (dispatch) => {
  try {
    dispatch(updateOrderStart());
    const response = await api.put(`/api/orders/${id}`, data);
    dispatch(updateOrderSuccess(response.data));
  } catch (error) {
    dispatch(updateOrderFailure(error.message));
  }
};

// Delete a Order
export const deleteOrder = (id) => async (dispatch) => {
  try {
    dispatch(deleteOrderStart());
    await api.delete(`/api/orders/${id}`);
    dispatch(deleteOrderSuccess(id));
  } catch (error) {
    dispatch(deleteOrderFailure(error.message));
  }
};
