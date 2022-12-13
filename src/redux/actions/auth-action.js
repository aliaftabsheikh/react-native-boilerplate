import apiServices from '../../api-services/request-handler';
import { loginKey, saveUser, setToken } from "../../utils/auth.util"
import { ModalHandler } from './modal-action';

export const clientLogin = (data, goToHome) => {
    return async dispatch => {
        try {
            dispatch({ type: 'LOGIN_PROGRESS' });
            const response = await apiServices.loginClient(data);
            if (response?.data?.success) {
                await setToken({ key: response?.data?.authKey })
                dispatch({ type: 'LOGIN_SUCCESS', payload: response?.data?.data });
                await loginKey()
                goToHome()
            } else {
                dispatch(ModalHandler({
                    message: response?.data?.data?.message,
                    show: true,
                    type: "Error"
                }))
                dispatch({ type: 'LOGIN_ERROR' });
            }
        } catch (error) {
            dispatch({ type: 'LOGIN_ERROR' });
            console.log('error', error);
        }
    };
};
export const lawyerLogin = (data, goToHome) => {
    return async dispatch => {
        try {
            dispatch({ type: 'LOGIN_PROGRESS' });
            const response = await apiServices.loginLawyer(data);
            if (response?.data?.success) {
                await saveUser(response?.data?.data)
                await loginKey()
                dispatch({ type: 'LOGIN_SUCCESS', payload: response?.data?.data });
                goToHome()
            } else {
                dispatch(ModalHandler({
                    show: true,
                    message: response?.data?.data?.message,
                    type: "Error",
                }))
                dispatch({ type: 'LOGIN_ERROR' });
            }
        } catch (error) {
            console.log('error', error);
            dispatch({ type: 'LOGIN_ERROR' });
        }
    };
};
export const lawfirmLogin = (data, goToHome) => {
    return async dispatch => {
        try {
            dispatch({ type: 'LOGIN_PROGRESS' });
            const response = await apiServices.loginLawfirm(data);
            if (response?.data?.responseCode == 200) {
                await saveUser(response?.data?.data)
                dispatch({ type: 'LOGIN_SUCCESS', payload: response?.data?.data });
                await loginKey()
                goToHome()
            } else {
                dispatch(ModalHandler({
                    show: true,
                    message: response?.data?.message,
                    type: "Error",
                }))
                dispatch({ type: 'LOGIN_ERROR' });
            }
        } catch (error) {
            console.log('error', error);
            dispatch({ type: 'LOGIN_ERROR' });
        }
    };
};
