export const SHOW_SUB_MENU = "SHOW_SUB_MENU";
export const HIDE_SUB_MENU = "HIDE_SUB_MENU";
export const SET_IS_OWNER = "SET_IS_OWNER";
export const SET_VEHICLE_STATE = "SET_VEHICLE_STATE";
export const SET_WEAPON_STATE = "SET_WEAPON_STATE";
export const CLEAR_DATA = "CLEAR_DATA";

export const showSubMenu = () => ({
    type:SHOW_SUB_MENU,
})

export const hideSubMenu = () => ({
    type:HIDE_SUB_MENU,
})

export const setOwner = (value) => ({
    type:SET_IS_OWNER,
    payload: value,
})

export const setVehicleState = (value) => ({
    type:SET_VEHICLE_STATE,
    payload: value,
})

export const setWeaponState = (value) => ({
    type:SET_WEAPON_STATE,
    payload: value,
})

export const clearData = () => ({
    type:CLEAR_DATA,
})