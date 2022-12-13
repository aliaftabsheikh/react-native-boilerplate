const INITIAL_STATE = {
    user: null,
    loading: false,
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN_PROGRESS':
            return {
                ...state,
                loading: true,
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loading: false,
                user: action.payload
            };
        case 'LOGIN_ERROR':
            return {
                ...state,
                loading: false,
            };
        case 'SIGN_UP_PROGRESS':
            return {
                ...state,
                loading: true,
            };
        case 'SIGN_UP_ERROR':
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
