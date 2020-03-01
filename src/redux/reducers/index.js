import user from './userReducer';
import product from './productReducer';
import auth from './authReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    user, product, auth
});

// {
//     user: {
//         customNumber: 0,
//         customText: "Hello World"
//     },
//     product: {
//         page: 0,
//         data: []
//     }
// }