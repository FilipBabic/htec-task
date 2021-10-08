import { CONSTANTS } from '../actions';
import axios from 'axios';
export const getLists = (boardID) => async (dispatch) => {
    try {
        dispatch({
            type: CONSTANTS.REQUEST_LISTS
        })
        const response = await axios.get(`https://api.trello.com/1/boards/${boardID}/lists?key=3678cd613fe248e529d52ed488d8afc2&token=1b8c2e1451ccbac7aa565c0db3d019103a99186f147f8ddfcc9b422da807e98d`)
        dispatch({
            type: CONSTANTS.LISTS_SUCCESS,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: CONSTANTS.GET_ALL_LIST_ERROR,
            payload: error?.message || 'something went wrong',
        })
    }
}

export const createList = (boardID, name) => async (dispatch, getState) => {
    const { lists } = getState().listsData
    try {
        const response = await axios.post(`https://api.trello.com/1/lists?key=3678cd613fe248e529d52ed488d8afc2&token=1b8c2e1451ccbac7aa565c0db3d019103a99186f147f8ddfcc9b422da807e98d&name=${name}&idBoard=${boardID}`)
        dispatch({
            type: CONSTANTS.LISTS_SUCCESS,
            payload: [...lists, response.data]
        })
    } catch (error) {
        dispatch({
            type: CONSTANTS.CREATE_LIST_ERROR,
            payload: error?.message || 'error while creating a new list',
        })
    }
}