export * from './userActions';
export * from './boardActions';
export * from './listsActions';
export * from './cardActions';
export * from './commentActions';
export const CONSTANTS = {
    ADD_USER: "ADD_USER",
    ADD_BOARD: "ADD_BOARD",
    ADD_LIST: "ADD_LIST",
    ADD_CARD: "ADD_CARD",
    REQUEST_BOARD: "REQUEST_BOARD",
    BOARDS_SUCCESS: "BOARDS_SUCCESS",
    GET_ALL_BOARDS_ERROR: "GET_ALL_BOARDS_ERROR",
    CREATE_BOARD: "CREATE_BOARD",
    CREATE_BOARD_ERROR: "CREATE_BOARD_ERROR",
    REQUEST_LISTS: "REQUEST_LISTS",
    LISTS_SUCCESS: "LISTS_SUCCESS",
    CREATE_LIST: "CREATE_LIST",
    CREATE_LIST_ERROR: "CREATE_LIST_ERROR",
    GET_ALL_LIST_ERROR: "GET_ALL_LIST_ERROR",
    REQUEST_CARDS: "REQUEST_CARDS",
    CARDS_SUCCESS: "CARDS_SUCCESS",
    GET_ALL_CARDS_ERROR: "GET_ALL_CARDS_ERROR",
    CREATE_CARD: "CREATE_CARD",
    CREATE_CARD_ERROR: "CREATE_CARD_ERROR",
    DELETE_BOARD: "DELETE_BOARD",
    DELETE_BOARD_ERROR: "DELETE_BOARD_ERROR",
    REQUEST_COMMENTS: "REQUEST_COMMENTS",
    COMMENTS_SUCCESS: "COMMENTS_SUCCESS",
    GET_ALL_COMMENTS_ERROR: "GET_ALL_COMMENTS_ERROR",
    UPDATE_CARD_SUCCESS: "UPDATE_CARD_SUCCESS",
    UPDATE_CARD_ERROR: "UPDATE_CARD_ERROR",
    CREATE_COMMENT: "CREATE_COMMENT",
    CREATE_COMMENT_ERROR: "CREATE_COMMENT_ERROR"
}