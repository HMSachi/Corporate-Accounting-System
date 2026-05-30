import {
    ADMIN_MODULE_FAILURE,
    ADMIN_MODULE_REQUEST,
    ADMIN_MODULE_SUCCESS,
} from "../constants/AdminModuleConstants";

const initialState = {
    isLoading: false,
    module: null,
    activeModuleKey: null,
    error: null,
};

const AdminModuleReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADMIN_MODULE_REQUEST:
            return {
                ...state,
                isLoading: true,
                module: null,
                activeModuleKey: action.payload,
                error: null,
            };
        case ADMIN_MODULE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                module: action.payload,
                error: null,
            };
        case ADMIN_MODULE_FAILURE:
            return {
                ...state,
                isLoading: false,
                module: null,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default AdminModuleReducer;
