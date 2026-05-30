import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE, 
} from "../constants/LoginConstants";

const initialState = {
  isLoading: false,
  user: null,
  error: null,
  isAuthenticated: false,
};

const GetLogin = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: 
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        error: null,
        isAuthenticated: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        user: null,
        error: action.payload,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default GetLogin;
