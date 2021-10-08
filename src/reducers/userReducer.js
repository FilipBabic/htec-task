import { CONSTANTS } from '../actions';
const initialState = {
    userName: 'Marko'
}
const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_USER:
            const newUser = {
                ...state,
                userName: action.payload
            }
            return newUser;
        default:
            return state;
    }
}
export default UserReducer;