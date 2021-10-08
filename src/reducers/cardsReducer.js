import { CONSTANTS } from '../actions'
const initialState = {
    loading: false,
    cards: []
}
const CardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.REQUEST_CARDS:
            return {
                loading: true,
                cards: []
            }
        case CONSTANTS.CARDS_SUCCESS:
            return {
                loading: false,
                cards: action.payload
            }
        case CONSTANTS.GET_ALL_CARDS_ERROR:
            return {
                loading: false,
                errors: action.payload
            }
        case CONSTANTS.CREATE_CARD:
            return {
                loading: false,
                cards: action.payload
            }
        case CONSTANTS.CREATE_CARD_ERROR:
            return {
                loading: false,
                errors: action.payload
            }
        case CONSTANTS.UPDATE_CARD_SUCCESS:
            return {
                loading: false,
                cards: action.payload
            }
        case CONSTANTS.UPDATE_CARD_ERROR:
            return {
                loading: false,
                errors: action.payload
            }
        default:
            return state;
    }
}
export default CardsReducer;