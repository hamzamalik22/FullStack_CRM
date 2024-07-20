// slices/AgentSlice.jsx
import { createSlice } from "@reduxjs/toolkit";

const agentSlice = createSlice({
  name: "agent",
  initialState: {
    data: null,
    role: "",
    loading: false,
    error: null,
  },
  reducers: {
    getAgentStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getAgentSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    getAgentFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getUserRoleSuccess: (state, action) => {
      // Add new reducer for user role
      state.role = action.payload;
    },
    getUserRoleFailure: (state, action) => {
      // Add new reducer for user role failure
      state.error = action.payload;
    },
  },
});

export const {
  getAgentStart,
  getAgentSuccess,
  getAgentFailure,
  getUserRoleSuccess,
  getUserRoleFailure,
} = agentSlice.actions;
export default agentSlice.reducer;
