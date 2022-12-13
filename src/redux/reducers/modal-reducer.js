const INITIAL_STATE = {
    show_modal: false,
    modal_type: null,
    modal_message: null,
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SHOW_MODAL':
            return {
                ...state,
                show_modal: action.payload,
            };
        case 'MODAL_MESSAGE':
            return {
                ...state,
                modal_message: action.payload,
            };
        case 'MODAL_TYPE':
            return {
                ...state,
                modal_type: action.payload,
            };
        case 'SIGN_UP_PROGRESS':
            return {
                ...state,
                loading: true,
            };
        case 'SIGN_UP_SUCCESS':
            return {
                ...state,
                user: action.payload,
                loading: false,
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
