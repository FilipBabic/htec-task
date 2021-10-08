import { CONSTANTS } from '../actions';
import axios from 'axios';
export const getBoards = () => async (dispatch) => {
    try {
        dispatch({
            type: CONSTANTS.REQUEST_BOARD,
        })
        const response = await axios.get('https://api.trello.com/1/members/filip1986babic/boards?key=3678cd613fe248e529d52ed488d8afc2&token=1b8c2e1451ccbac7aa565c0db3d019103a99186f147f8ddfcc9b422da807e98d')
        dispatch({
            type: CONSTANTS.BOARDS_SUCCESS,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: CONSTANTS.GET_ALL_BOARDS_ERROR,
            payload: error?.message || 'neki error',
        })
    }
}

export const createBoard = (name) => async (dispatch, getState) => {
    const { boards } = getState().boardsData
    try {
        const response = await axios.post(`https://api.trello.com/1/boards/?key=3678cd613fe248e529d52ed488d8afc2&token=1b8c2e1451ccbac7aa565c0db3d019103a99186f147f8ddfcc9b422da807e98d&name=${name}`)
        dispatch({
            type: CONSTANTS.BOARDS_SUCCESS,
            payload: [...boards, response.data]
        })
    } catch (error) {
        dispatch({
            type: CONSTANTS.CREATE_BOARD_ERROR,
            payload: error?.message || 'create board error',
        })
    }
}

export const deleteBoard = (boardID) => async (dispatch, getState) => {
    const { boards } = getState().boardsData
    try {
        await axios.delete(`https://api.trello.com/1/boards/${boardID}?key=3678cd613fe248e529d52ed488d8afc2&token=1b8c2e1451ccbac7aa565c0db3d019103a99186f147f8ddfcc9b422da807e98d`)
        dispatch({
            type: CONSTANTS.DELETE_BOARD,
            payload: boards?.filter((board) => board.id !== boardID)
        })
    } catch (error) {
        dispatch({
            type: CONSTANTS.DELETE_BOARD_ERROR,
            payload: error?.message || 'error while deleting a board',
        })
    }
}