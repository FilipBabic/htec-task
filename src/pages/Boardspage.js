import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Board from '../components/Board';
import { getBoards, createBoard } from '../actions';
const BoardsPage = () => {
    const user = useSelector(state => state.user);
    const boards = useSelector(state => state.boardsData.boards);
    const dispatch = useDispatch();
    const [boardName, setBoardName] = useState('')
    const [error, setError] = useState(false)
    const AddNewBoard = () => {
        if (boardName === "") {
            setError(true)
            return
        }
        dispatch(createBoard(boardName))
        setBoardName("")
    }
    useEffect(() => {
        dispatch(getBoards())
    }, [dispatch])
    return (
        <div style={styles.container}>
            <p style={styles.user}>
                {user.userName}'s Boards
            </p>
            {boards.map((board) => <Board
                name={board.name}
                id={board.id}
                key={board.id}
                lists={board.lists}
            />)}
            <input type="text" style={styles.textField} value={boardName} onChange={(e) => setBoardName(e.target.value)} />
            {error && <div style={styles.error}>Board name is required field!!!</div>}
            <br />
            <button style={styles.button} onClick={AddNewBoard}>
                ADD NEW BOARD
            </button>
        </div>
    )
}
const styles = {
    container: { marginTop: '80px', textAlign: 'center', fontFamily: 'Helvetica' },
    user: { marginTop: '8px', textAlign: 'center', fontSize: '20px' },
    error: { color: 'red', marginTop: '10px', marginBottom: '10px' },
    textField: { padding: '0', marginTop: '10px', height: '30px', width: '220px' },
    button: { marginTop: '10px', height: '26px', width: '224px' }
}
export default BoardsPage;