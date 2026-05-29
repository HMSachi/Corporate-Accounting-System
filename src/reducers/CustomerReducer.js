import {
  CUSTOMER_REQUEST,
  CUSTOMER_SUCCESS,
  CUSTOMER_FAILURE,
} from "../constants/CustomerConstants";

const initialState = {
  isLoading: false,
  customers: [],
  error: null,
};

const GetCustomers = (state = initialState, action) => {
  switch (action.type) {
    case CUSTOMER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case CUSTOMER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        customers: action.payload,
        error: null,
      };
    case CUSTOMER_FAILURE:
      return {
        ...state,
        isLoading: false,
        customers: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default GetCustomers;
