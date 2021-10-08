import { CONSTANTS } from '../actions'
const initialState = {
    loading: false,
    lists: []
}
const ListsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.REQUEST_LISTS:
            return {
                loading: true,
                lists: []
            }
        case CONSTANTS.LISTS_SUCCESS:
            return {
                loading: false,
                lists: action.payload
            }
        case CONSTANTS.GET_ALL_LISTS_ERROR:
            return {
                loading: false,
                errors: action.payload
            }
        case CONSTANTS.CREATE_LIST:
            return {
                loading: false,
                lists: action.payload
            }
        case CONSTANTS.CREATE_LIST_ERROR:
            return {
                loading: false,
                errors: action.payload
            }
        default:
            return state;
    }
}
export default ListsReducer;