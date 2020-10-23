import axios from 'axios';

const closeSubMenuUrl   = "http://pma-subs/closeSubMenu"
const changeColorUrl    = "http://pma-subs/changeColor"
const changeTintUrl     = "http://pma-subs/changeTint"

export const closeSubMenu = () => {
    return axios.post(closeSubMenuUrl, {})
}

export const changeColor = (colorCode) => {
    return axios.post(changeColorUrl, {colorCode})
}

export const changeTint = (colorCode) => {
    return axios.post(changeTintUrl, {colorCode})
}