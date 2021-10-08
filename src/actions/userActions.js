import { CONSTANTS } from '../actions';
export const addUser = userName => {
    return {
        type: CONSTANTS.ADD_USER,
        payload: userName
    }
}