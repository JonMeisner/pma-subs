import * as types from './subs.actions';

const intiailState = {
    showSubState: false,
}

const SubReducer = (state = intiailState, action) => {
    switch (action.type) {
        case types.SHOW_SUB_MENU:
            return {
                ...state,
                showSubState: true,
            }
        case types.HIDE_SUB_MENU:
            return {
                ...state,
                showSubState: false,
            }
        default:
            return state;
    }
}

export default SubReducer;