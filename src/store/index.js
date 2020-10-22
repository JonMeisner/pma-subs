import {combineReducers} from 'redux';
import SubReducer from './subs.reducer';

export default combineReducers({
    SubMenu: SubReducer,
})