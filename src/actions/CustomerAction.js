import {
    CUSTOMER_REQUEST,
    CUSTOMER_SUCCESS,
    CUSTOMER_FAILURE
} from '../constants/CustomerConstants';
import customerService from '../services/CustomerService';

export const GetCustomers = () => {
    return async (dispatch) => {
        dispatch({ type: CUSTOMER_REQUEST });
        try {
            const response = await customerService.GetCustomers();
            dispatch({ type: CUSTOMER_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: CUSTOMER_FAILURE, payload: error.message });
        }
    };
};
