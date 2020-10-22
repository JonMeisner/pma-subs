import axios from 'axios';

const closeSubMenuUrl = "http://pma-subs/closeSubMenu"
const changeColorUrl = "https://pma-subs/changeColor"

export const closeSubMenu = () => {
    return axios.post(closeSubMenuUrl, {})
}

export const changeColor = (R,G,B) => {
    return axios.post(changeColorUrl, {R,G,B})
}