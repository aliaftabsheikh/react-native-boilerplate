const INITIAL_STATE = {
    user_type: "lawyer",

};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USER_TYPE':
            return {
                ...state,
                user_type: action.payload,
            };

        default:
            return state;
    }
};
