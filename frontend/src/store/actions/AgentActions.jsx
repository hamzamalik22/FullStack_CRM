// actions/AgentActions.js
import {
  getAgentStart,
  getAgentSuccess,
  getAgentFailure,
  getUserRoleSuccess,
  getUserRoleFailure,
} from "../slices/AgentSlice";
import api from "@/utils/api";

export const fetchAgent = (id) => async (dispatch) => {
  try {
    dispatch(getAgentStart());
    const response = await api.get(`/api/agents/${id}`);
    // console.log("Hello", response);
    dispatch(getAgentSuccess(response.data.Agent));
  } catch (error) {
    console.error("Failed to fetch agent data:", error);
    dispatch(getAgentFailure(error.message));
  }
};

export const fetchUserRole = () => async (dispatch) => {
  try {
    const response = await api.get("/api/agent/role/");
    dispatch(getUserRoleSuccess(response.data.role.role));
    return response.data.role.id;
  } catch (error) {
    console.error("Failed to fetch user role:", error);
    return null;
  }
};
