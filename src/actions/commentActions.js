import { CONSTANTS } from '../actions';
import axios from 'axios';
export const getCommentsOnCard = (cardID) => async (dispatch) => {
    try {
        dispatch({
            type: CONSTANTS.REQUEST_COMMENTS
        })
        const response = await axios.get(`https://api.trello.com/1/cards/${cardID}/actions?key=3678cd613fe248e529d52ed488d8afc2&token=1b8c2e1451ccbac7aa565c0db3d019103a99186f147f8ddfcc9b422da807e98d`)
        dispatch({
            type: CONSTANTS.COMMENTS_SUCCESS,
            payload: response.data,
        })
    } catch (error) {
        dispatch({
            type: CONSTANTS.GET_ALL_COMMENTS_ERROR,
            payload: error?.message || 'something went wrong with request comments',
        })
    }
}
export const addComment = (cardID, text) => async (dispatch, getState) => {
    const { comments } = getState().commentsData
    try {
        const response = await axios.post(`https://api.trello.com/1/cards/${cardID}/actions/comments?key=3678cd613fe248e529d52ed488d8afc2&token=1b8c2e1451ccbac7aa565c0db3d019103a99186f147f8ddfcc9b422da807e98d&text=${text}`)
        dispatch({
            type: CONSTANTS.CREATE_COMMENT,
            payload: [...comments, response.data]
        })
    } catch (error) {
        dispatch({
            type: CONSTANTS.CREATE_COMMENT_ERROR,
            payload: error?.message || 'error while adding a new comment',
        })
    }
}