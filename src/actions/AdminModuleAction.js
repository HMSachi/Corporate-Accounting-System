import {
    ADMIN_MODULE_FAILURE,
    ADMIN_MODULE_REQUEST,
    ADMIN_MODULE_SUCCESS,
} from "../constants/AdminModuleConstants";
import adminModuleService from "../services/AdminModuleService";

export const GetAdminModule = (moduleKey) => {
    return async (dispatch) => {
        dispatch({ type: ADMIN_MODULE_REQUEST, payload: moduleKey });

        try {
            const response = await adminModuleService.GetAdminModule(moduleKey);
            dispatch({ type: ADMIN_MODULE_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: ADMIN_MODULE_FAILURE, payload: error.message });
        }
    };
};
