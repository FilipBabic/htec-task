import { CONSTANTS } from "../actions";
const initialState = {
    boards: [],
    loading: false
};
const BoardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.REQUEST_BOARDS:
            return {
                loading: true,
                boards: []
            }
        case CONSTANTS.BOARDS_SUCCESS:
            return {
                loading: false,
                boards: action.payload
            }
        case CONSTANTS.GET_ALL_BOARDS_ERROR:
            return {
                loading: false,
                errors: action.payload
            }
        case CONSTANTS.CREATE_BOARD:
            return {
                loading: false,
                boards: action.payload
            }
        case CONSTANTS.CREATE_BOARD_ERROR:
            return {
                loading: false,
                error: action.payload
            }
        case CONSTANTS.DELETE_BOARD:
            return {
                ...state,
                boards: action.payload
            }
        case CONSTANTS.DELETE_BOARD_ERROR:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
export default BoardsReducer;
