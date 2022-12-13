import apiServices from '../../api-services/request-handler';
import { ModalHandler } from './modal-action';

export const getCategories = () => {
    return async dispatch => {
        try {
            dispatch({ type: 'GET_CATEGORIES_PROGRESS' });
            const response = await apiServices.getCategories();
            if (response?.data?.success) {
                dispatch({ type: 'GET_CATEGORIES_SUCCESS', payload: response?.data?.data });
            } else {
                dispatch(ModalHandler({
                    message: response?.data?.message,
                    show: true,
                    type: "Error"
                }))
                dispatch({ type: 'GET_CATEGORIES_ERROR' });
            }
        } catch (error) {
            dispatch({ type: 'GET_CATEGORIES_ERROR' });
            console.log('error', error);
        }
    };
};
export const getSubCategories = (data) => {
    return async dispatch => {
        try {
            dispatch({ type: 'GET_SUB_CATEGORIES_PROGRESS' });
            const response = await apiServices.getSubCategories(data);
            console.log("SubCategiriesssssResposeee", response?.data)
            if (response?.data?.success) {
                dispatch({ type: 'GET_SUB_CATEGORIES_SUCCESS', payload: response?.data?.data });
            } else {
                dispatch(ModalHandler({
                    show: true,
                    message: response?.data?.data?.message,
                    type: "Error",
                }))
                dispatch({ type: 'GET_SUB_CATEGORIES_ERROR' });
            }
        } catch (error) {
            console.log('error', error);
            dispatch({ type: 'GET_SUB_CATEGORIES_ERROR' });
        }
    };
};

