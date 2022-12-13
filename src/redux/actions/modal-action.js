export const ModalHandler = ({ show, message, type }) => {
    return async dispatch => {
        try {
            dispatch({ type: 'SHOW_MODAL', payload: show });
            dispatch({ type: 'MODAL_MESSAGE', payload: message });
            dispatch({ type: 'MODAL_TYPE', payload: type });
        } catch (error) {
            console.log('error', error);
        }
    };
};
