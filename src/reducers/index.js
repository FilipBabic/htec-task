import { combineReducers } from "redux";
import listsReducer from './listsReducer';
import userReducer from './userReducer';
import boardsReducer from './boardsReducer';
import cardsReducer from './cardsReducer';
import commentsReducer from "./commentsReducer";
export default combineReducers({
    listsData: listsReducer,
    user: userReducer,
    boardsData: boardsReducer,
    cardsData: cardsReducer,
    commentsData: commentsReducer,
});