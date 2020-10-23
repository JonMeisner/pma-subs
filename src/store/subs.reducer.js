import * as types from './subs.actions';

const intiailState = {
    showSubState: false,
    isOwner: false,
    inVehicle: false,
    hasWeapon: false,
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
        case types.SET_IS_OWNER:
            return {
                ...state,
                isOwner: action.payload,
            }
        case types.SET_VEHICLE_STATE:
            return {
                ...state,
                inVehicle: action.payload,
            }
        case types.SET_WEAPON_STATE:
            return {
                ...state,
                hasWeapon: action.payload,
            }
        case types.CLEAR_DATA:
            return {
                ...state,
                showSubState: false,
                isOwner: false,
                inVehicle: false,
                hasWeapon: false,
            }
        default:
            return state;
    }
};

export default SubReducer;