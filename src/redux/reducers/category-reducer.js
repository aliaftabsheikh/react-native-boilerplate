const INITIAL_STATE = {
    categories: [],
    sub_categories: [],
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_CATEGORIES_PROGRESS':
            return {
                ...state,
                category_loading: true,
            };
        case 'GET_CATEGORIES_SUCCESS':
            return {
                ...state,
                category_loading: false,
                categories: action.payload
            };
        case 'GET_CATEGORIES_ERROR':
            return {
                ...state,
                category_loading: false,
            };
        case 'GET_SUB_CATEGORIES_PROGRESS':
            return {
                ...state,
                category_loading: true,
            };
        case 'GET_SUB_CATEGORIES_SUCCESS':
            return {
                ...state,
                category_loading: false,
                sub_categories: action.payload
            };
        case 'GET_SUB_CATEGORIES_ERROR':
            return {
                ...state,
                category_loading: false,
            };
        default:
            return state;
    }
};
