import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT
} from "./actiontypes";

const initState = {
  loading: false,
  error: false,
  token: "",
  loginState: false
};
export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        error: false,
        loading: false,
        token: payload,
        loginState: true
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        error: true
      };
    }
    case LOGOUT: {
      return {
        ...state,
        token: "",
        loginState: false
      };
    }
    default: {
      return state;
    }
  }
};
