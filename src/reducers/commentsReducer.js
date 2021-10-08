import { CONSTANTS } from "../actions";
const initialState = {
    loading: false,
    comments: []
};
const CommentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.REQUEST_COMMENTS:
            return {
                loading: true,
                comments: []
            }
        case CONSTANTS.COMMENTS_SUCCESS:
            return {
                loading: false,
                comments: action.payload
            }
        case CONSTANTS.GET_ALL_COMMENTS_ERROR:
            return {
                loading: false,
                errors: action.payload
            }
        case CONSTANTS.CREATE_COMMENT:
            return {
                loading: false,
                comments: action.payload
            }
        case CONSTANTS.CREATE_COMMENT_ERROR:
            return {
                loading: false,
                errors: action.payload
            }
        default:
            return state;
    }
}
export default CommentsReducer;
