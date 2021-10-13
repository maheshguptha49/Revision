import axios from "axios";
import { baseUrl } from "../../utills/link";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT
} from "./actiontypes";
export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  };
};
export const loginSucess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload
  };
};
export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE
  };
};

export const loginAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(loginRequest());
      let token = await axios.get(`${baseUrl}`);
      dispatch(loginSucess(token));
    } catch (error) {
      dispatch(loginFailure());
    }
  };
};

export const logout = () => {
  return { type: LOGOUT };
};
