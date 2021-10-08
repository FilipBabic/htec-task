import { CONSTANTS } from '../actions';
import axios from 'axios';
export const getCards = (boardID) => async (dispatch) => {
    try {
        dispatch({
            type: CONSTANTS.REQUEST_CARDS
        })
        const response = await axios.get(`https://api.trello.com/1/boards/${boardID}/cards?key=3678cd613fe248e529d52ed488d8afc2&token=1b8c2e1451ccbac7aa565c0db3d019103a99186f147f8ddfcc9b422da807e98d`)
        dispatch({
            type: CONSTANTS.CARDS_SUCCESS,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: CONSTANTS.GET_ALL_CARDS_ERROR,
            payload: error?.message || 'something went wrong',
        })
    }
}
export const createCard = (listID, name) => async (dispatch, getState) => {
    const { cards } = getState().cardsData
    try {
        const response = await axios.post(`https://api.trello.com/1/cards?key=3678cd613fe248e529d52ed488d8afc2&token=1b8c2e1451ccbac7aa565c0db3d019103a99186f147f8ddfcc9b422da807e98d&idList=${listID}&name=${name}`)
        dispatch({
            type: CONSTANTS.CREATE_CARD,
            payload: [...cards, response.data]
        })
    } catch (error) {
        dispatch({
            type: CONSTANTS.CREATE_CARD_ERROR,
            payload: error?.message || 'error while creating a new CARD',
        })
    }
}

export const updateCard = (cardID, listID) => async (dispatch, getState) => {
    const { cards } = getState().cardsData
    try {
        const response = await axios.put(`https://api.trello.com/1/cards/${cardID}?key=3678cd613fe248e529d52ed488d8afc2&token=1b8c2e1451ccbac7aa565c0db3d019103a99186f147f8ddfcc9b422da807e98d&idList=${listID}`)
        dispatch({
            type: CONSTANTS.UPDATE_CARD_SUCCESS,
            payload: [...cards.filter(card => card.id !== cardID), response.data]
        })
    } catch (error) {
        dispatch({
            type: CONSTANTS.UPDATE_CARD_ERROR,
            payload: error?.message || 'error while creating a new CARD',
        })
    }
}